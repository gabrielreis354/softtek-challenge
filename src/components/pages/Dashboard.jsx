import { useState, useEffect } from "react";
import "./Dashboard.scss";

export default function Dashboard() {
  const [database, setDatabase] = useState([]);

  //Adicionando dados ao estado
  useEffect(() => {
    fetch("./data/chamados.json", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setDatabase(res.data));
  }, []);

  const [numero, setNumero] = useState("");
  const [prioridade, setPrioridade] = useState("");
  const [status, setStatus] = useState("");
  const [local, setLocal] = useState("");

  // Função para aplicar os filtros
  const filterChamados = () => {
    return database.filter((chamado) => {
      return (
        (numero === "" ||
          chamado.Número.toLowerCase().includes(numero.toLowerCase())) &&
        (status === "" || chamado.Status === status) &&
        (local === "" || chamado.Local === local) &&
        (prioridade === "" || chamado.Prioridade === prioridade)
      );
    });
  };

  const filteredChamados = filterChamados();

  return (
    <div className="dashboard-wrapper">
      <div className="sidebar">
        <h2>Filtros</h2>
        <div className="filtros_form">
          <div className="input_wrapper">
            <label htmlFor="numero">Número</label>
            <input
              id="numero"
              type="text"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
          </div>
          <div className="input_wrapper">
            <label htmlFor="local">Local</label>
            <select
              id="local"
              value={local}
              onChange={(e) => setLocal(e.target.value)}
            >
              <option value="">Todos</option>
              <option value="Centro de Distribuição">
                Centro de Distribuição
              </option>
              <option value="Escritório Central">Escritório Central</option>
              <option value="Fábrica 1">Fábrica 1</option>
            </select>
          </div>
          <div className="input_wrapper">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Todos</option>
              <option value="Aberto">Aberto</option>
              <option value="Atribuído">Atribuído</option>
              <option value="Em Progresso">Em Progresso</option>
              <option value="Resolvido">Resolvido</option>
              <option value="Fechado">Fechado</option>
            </select>
          </div>
          <div className="input_wrapper">
            <label htmlFor="status">Prioridade</label>
            <select
              id="prioridade"
              value={prioridade}
              onChange={(e) => setPrioridade(e.target.value)}
            >
              <option value="">Todos</option>
              <option value="1 - Alto">1 - Alto</option>
              <option value="2 - Médio">2 - Médio</option>
              <option value="3 - Baixo">3 - Baixo</option>
              <option value="4 - Planejamento">4 - Planejamento</option>
            </select>
          </div>
        </div>
      </div>
      <div className="main_panel">
        <h2>Chamados</h2>

        <div className="cards_wrapper">
          {filteredChamados.length > 0 ? (
            filteredChamados.map((chamado) => (
              <div
                key={chamado.Número}
                className={`card_wrapper ${
                  chamado.Status === "Resolvido" && "card_resolved"
                }`}
              >
                <div className="card_info">
                  <h4 className="card_title">{chamado.Número}</h4>
                  <p className="card_subtitle">{chamado.Empresa}</p>
                  <p className="card_prioridade">{chamado.Prioridade}</p>
                  <p className="card_description">{chamado.Descrição}</p>
                </div>

                <a href="/about" className="btn">
                  Ver Mais
                </a>
              </div>
            ))
          ) : (
            <p id="aviso"><strong>Nenhum chamado encontrado !</strong></p>
          )}
        </div>
      </div>
    </div>
  );
}
