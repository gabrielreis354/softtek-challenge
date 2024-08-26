import "./index.scss";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../assets/svg/Logo";
import profilePic from "../../assets/img/profile.png";

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

  const navigate = useNavigate();

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

  const handleVerMais = (id) => {
    navigate(`ticket/${id}`); // Navega para a página de detalhes do chamado
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <Link className="logo" to={"/dashboard"}>
          <Logo
            width={120}
            icon_color={"#f1ffff"}
            icon_bg_color={"#24a5a4"}
            name_color={"#24a5a4"}
          />
          <span>Service Management</span>
        </Link>

        <div className="profile">
          <div className="profile-icon">
            <img src={profilePic} alt="profile pic" />
          </div>
          <div className="profile-name">Olá Fulano</div>
        </div>
      </div>
      <div className="dashboard-inner">
        <div className="dashboard-left">
          <div className="dashboard-left-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ad
            nobis perspiciatis nostrum sapiente explicabo eos magni officiis
            laboriosam? Eaque dignissimos sapiente consectetur officia
            perspiciatis fuga. Aliquid rerum neque ipsam?
          </div>
        </div>
        <div className="dashboard-right">
          <div className="dashboard-right-content">
            <h2>Gerenciar chamados</h2>
            <div className="filter">
              <label>
                <div className="input-label">Nº do chamado</div>
                <div className="input-wrapper">
                  <input
                    id="numero"
                    placeholder="Número do chamado"
                    type="text"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                  />
                </div>
              </label>

              <label>
                <div className="input-label">Local</div>
                <div className="input-wrapper">
                  <select
                    id="local"
                    value={local}
                    onChange={(e) => setLocal(e.target.value)}
                  >
                    <option value="">Todos</option>
                    <option value="Centro de Distribuição">
                      Centro de Distribuição
                    </option>
                    <option value="Escritório central">
                      Escritório Central
                    </option>
                    <option value="Fábrica 1">Fábrica 1</option>
                  </select>
                </div>
              </label>

              <label>
                <div className="input-label">Status</div>
                <div className="input-wrapper">
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
              </label>

              <label>
                <div className="input-label">Prioridade</div>
                <div className="input-wrapper">
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
              </label>
            </div>

            <div className="tickets-wrapper">
              <div className="tickets">
                {filteredChamados.length > 0
                  ? filteredChamados.map(function (chamado) {
                      return (
                        <div key={chamado.Número} className="ticket">
                          <div className="ticket-inner">
                            <div className="ticket-id">
                              <div
                                className="text"
                                onClick={() => handleVerMais(chamado.Número)}
                              >
                                {chamado.Número}
                              </div>
                            </div>
                            <div className="ticket-description">
                              <div className="text">{chamado.Descrição}</div>
                            </div>
                            <div className="ticket-local">
                              <div className="text">{chamado.Local}</div>
                            </div>
                            <div className="ticket-priority">
                              <div className="text">
                                {chamado.Prioridade.split(" - ")[1]}
                              </div>
                            </div>
                            <div className="ticket-status">
                              <div className="text">{chamado.Status}</div>
                            </div>
                            <div className="ticket-time">
                              <div className="text">
                                {chamado.Aberto.split(" ")[0]}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : ""}
              </div>
            </div>
            <div>
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
                          <p className="card_prioridade">
                            {chamado.Prioridade}
                          </p>
                          <p className="card_description">
                            {chamado.Descrição}
                          </p>
                        </div>

                        <button
                          onClick={() => handleVerMais(chamado.Número)}
                          className="btn"
                        >
                          Ver Mais
                        </button>
                      </div>
                    ))
                  ) : (
                    <p id="aviso">
                      <strong>Nenhum chamado encontrado.</strong>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
