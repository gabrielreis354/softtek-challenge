import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";

export default function Detail() {
  const { numero } = useParams(); // Obtém o ID do chamado da URL
  const [chamado, setChamado] = useState(null);
  const [chamados, setChamados] = useState([]);
  const [solucoesSemelhantes, setSolucoesSemelhantes] = useState([]);
  const [solutionTitle, setSolutionTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data/chamados.json", {
        headers: {
          Accept: "application/json",
        },
      });
      const result = await response.json();
      setChamados(result.data);
      const chamadoEncontrado = result.data.find(
        (item) => item.Número === numero
      );
      setChamado(chamadoEncontrado);
    };

    fetchData();
  }, [numero]);

  const encontrarSolucoesSemelhantes = useCallback(() => {
    if (!chamado) return;

    const solucoes = chamado.Interacoes
      ? chamados.filter(
          (ticket) =>
            ticket.Status === "Resolvido" &&
            ticket.Interacoes.some((interacao) =>
              chamado.Interacoes.includes(interacao)
            ) &&
            ticket.Categoria === chamado.Categoria &&
            ticket.grupoAtribuicao === chamado.grupoAtribuicao
        )
      : [];

    console.log(solucoes);

    setSolutionTitle("Soluções Encontradas:");
    setSolucoesSemelhantes(solucoes.map((solucao) => solucao.Resolução));
  }, [chamado, chamados]);

  const handleClose = useCallback(() => {
    window.history.back();
  }, []);

  const handleSearchSolution = useCallback(() => {
    setSolutionTitle("Procurando soluções semelhantes...");
    setTimeout(encontrarSolucoesSemelhantes, 500);
  }, [encontrarSolucoesSemelhantes]);

  const handleSelectSolution = useCallback((solucao) => {
    const currentDate = new Date();
    const date =
      currentDate.toLocaleDateString("pt-br", {
        timeZone: "UTC",
      }) +
      " - " +
      currentDate.toLocaleTimeString("pt-br", {
        timeZone: "UTC",
      });

    setChamado((prevChamado) => ({
      ...prevChamado,
      Status: "Resolvido",
      Atualizado: date,
      Resolução: solucao,
      Encerrado: date,
      dataResolucao: currentDate.toLocaleDateString("pt-br", {
        timeZone: "UTC",
      }),
    }));
  }, []);

  if (!chamado) {
    return (
      <div className="detail_wrapper">
        <p>Chamado não encontrado</p>
      </div>
    );
  }

  return (
    <div className="detail_wrapper">
      <div className="detail_panel">
        <div className="tabs">
          <div className="tab">
            <h3>
              <strong>{chamado.Status}</strong>
            </h3>
          </div>
        </div>
        <h2>Detalhes do Chamado #{chamado.Número}</h2>
        <div className="items">
          <div className="item">
            <div className="item_title">
              <h4>Abertura</h4>
            </div>
            <p>{chamado.Aberto}</p>
          </div>
          <div className="item">
            <div className="item_title">
              <h4>Data de Atualização</h4>
            </div>
            <p>{chamado.Atualizado}</p>
          </div>
          <div className="item">
            <div className="item_title">
              <h4>Encerramento</h4>
            </div>
            <p>
              {chamado.Encerrado ? chamado.Encerrado : "Não resolvido ainda"}
            </p>
          </div>
          <div className="item">
            <div className="item_title">
              <h4>Empresa</h4>
            </div>
            <p>{chamado.Empresa}</p>
          </div>
          <div className="item">
            <div className="item_title">
              <h4>Local</h4>
            </div>
            <p>{chamado.Local}</p>
          </div>
          <div className="item">
            <div className="item_title">
              <h4>Prioridade</h4>
            </div>
            <p>{chamado.Prioridade}</p>
          </div>
          <div className="item">
            <div className="item_title">
              <h4>Atribuído</h4>
            </div>
            <p>{chamado.Atribuído}</p>
          </div>
          <div className="item">
            <div className="item_title">
              <h4>Descrição</h4>
            </div>
            <p>{chamado.Descrição}</p>
          </div>
          <div className="item">
            <div className="item_title">
              <h4>Resolução</h4>
            </div>
            <p>
              {chamado.Resolução ? chamado.Resolução : "Não resolvido ainda"}
            </p>
          </div>
        </div>
        <h2>Histórico de Interações</h2>
        <div className="items">
          {chamado.Interacoes.map((interacao, index) => (
            <div className="item" key={index}>
              <div className="item_title">
                <h4>Comentário {index + 1}</h4>
              </div>
              <p>{interacao}</p>
            </div>
          ))}
        </div>

        <div className="buttons">
          <button className="btn" onClick={handleClose}>
            Voltar para a lista
          </button>
          <button className="btn" onClick={handleSearchSolution}>
            Procurar Soluções
          </button>
        </div>
      </div>

      <div className="solution">
        <h2>Soluções</h2>

        <h3>{solutionTitle}</h3>
        <div className="solucoes_resumo">
          {solucoesSemelhantes.length > 0 ? (
            solucoesSemelhantes.map((solucao, index) => (
              <div className="item" key={index}>
                <div className="item_title">
                  <h3>Solução #{index + 1}</h3>
                </div>
                <p>{solucao}</p>
                <button
                  className="btn_solution"
                  onClick={() => handleSelectSolution(solucao)}
                >
                  Aplicar Solução
                </button>
              </div>
            ))
          ) : (
            <p>Nenhuma solução encontrada.</p>
          )}
        </div>
      </div>
    </div>
  );
}
