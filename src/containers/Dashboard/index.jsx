import "./index.scss";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../assets/svg/Logo";
import profilePic from "../../assets/img/profile.png";
import Clock from "../../assets/svg/Clock";
import Pin from "../../assets/svg/Pin";

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
            <div className="filter-wrapper">
              <h2>
                Filtros
              </h2>
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
            </div>
          </div>
        </div>
        <div className="dashboard-right">
          <div className="dashboard-right-content">
            <h2>Gerenciar chamados</h2>


            <div className="tickets-wrapper">
              <div className="tickets">
                {filteredChamados.length > 0
                  ? filteredChamados.map(function (chamado) {
                      return (
                        <div key={chamado.Número} className="ticket" onClick={() => handleVerMais(chamado.Número)}>
                          <div className="ticket-inner">
                            <div className="ticket-top">
                              <div className="ticket-id">
                                <div
                                  className="text"                                  
                                >
                                  {chamado.Número}
                                </div>
                              </div>
                              <div className="ticket-time">
                                <Clock height={13} color={"#001010"}/>
                                <div className="text">
                                  {chamado.Aberto.split(" ")[0]}
                                </div>
                              </div>
                            </div>
                            <div className="ticket-main">
                              <div className="ticket-description">
                                <div className="text">{chamado.Descrição}</div>
                              </div>
                              <div className="ticket-local">
                                <Pin height={13} color="#001010"/>
                                <div className="text">
                                  {chamado.Local}
                                </div>
                              </div>
                            </div>
                            <div className="ticket-bottom">
                              <div className="ticket-priority">
                                <div className={`priority-color ${chamado.Prioridade.split(" - ")[1].toLowerCase()}`}> </div>
                                <div className="text">
                                  {chamado.Prioridade.split(" - ")[1]}
                                </div>
                              </div>
                              <div className="ticket-status">
                                
                                <div className="text">{chamado.Status}</div>
                              </div>

                            </div>
                          </div>
                        </div>
                      );
                    })
                  : 
                  <div className="tickets-not-found">
                    Nenhum chamado encontrado.
                  </div> 
                  }
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
