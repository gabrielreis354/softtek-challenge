import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Detail.scss";

export default function Detail() {
  const { numero } = useParams(); // Obtém o ID do chamado da URL
  const [chamado, setChamado] = useState();

  useEffect(() => {
    fetch("/data/chamados.json", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => res.data.find((item) => item.Número === numero))
      .then((res) => setChamado(res));
  }, [numero]);

  if (!chamado) {
    return (
      <div className="detail_wrapper">
        <p>Chamado não encontrado</p>
      </div>
    );
  }

  const handleClose = () => {
    window.history.back();
  };

  const searchSolution = () => {
    console.log("Oi");
  };

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
          <button className="btn" onClick={() => handleClose()}>
            Voltar
          </button>
          <button className="btn" onClick={() => searchSolution()}>
            Procurar Soluções
          </button>
        </div>
      </div>

      <div className="solucoes">
        <h2>Soluções</h2>
      </div>
    </div>
  );
}
