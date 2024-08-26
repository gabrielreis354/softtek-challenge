import "./Dashboard.scss";
import { useState, useEffect, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../assets/svg/Logo.jsx";
import profilePic from "../../assets/img/profile.png";

export default function Dashboard() {
  const [database, setDatabase] = useState([]);
  const [numero, setNumero] = useState("");
  const [prioridade, setPrioridade] = useState("");
  const [status, setStatus] = useState("");
  const [local, setLocal] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Adicionando dados ao estado
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data/chamados.json", {
          headers: {
            Accept: "application/json",
          },
        });
        const result = await response.json();
        setDatabase(result.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Função para aplicar os filtros
  const filterChamados = useCallback(() => {
    return database.filter((chamado) => {
      return (
        (numero === "" || chamado.Número.toLowerCase().includes(numero.toLowerCase())) &&
        (status === "" || chamado.Status === status) &&
        (local === "" || chamado.Local === local) &&
        (prioridade === "" || chamado.Prioridade === prioridade)
      );
    });
  }, [database, numero, status, local, prioridade]);

  const filteredChamados = filterChamados();

  const handleVerMais = useCallback((id) => {
    navigate(`ticket/${id}`); // Navega para a página de detalhes do chamado
  }, [navigate]);

  if (loading) {
    return (
      <div className="dashboard">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <Link className="logo" to={"/dashboard"}>
          <Logo width={120} icon_color={"#f1ffff"} icon_bg_color={"#24a5a4"} name_color={"#24a5a4"} />
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ad nobis perspiciatis nostrum sapiente explicabo eos magni officiis laboriosam? Eaque dignissimos sapiente consectetur officia perspiciatis fuga. Aliquid rerum neque ipsam?
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
                    <option value="Centro de Distribuição">Centro de Distribuição</option>
                    <option value="Escritório central">Escritório Central</option>
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
              {filteredChamados.length > 0 ? (
                filteredChamados.map((chamado) => (
                  <div key={chamado.Número} className="ticket" onClick={() => handleVerMais(chamado.Número)}>
                    <div className="ticket-inner">
                      <div className="ticket-id">{chamado.Número}</div>
                      <div className="ticket-description">{chamado.Descrição}</div>
                      <div className="ticket-local">{chamado.Local}</div>
                      <div className="ticket-priority">{chamado.Prioridade.split(" - ")[1]}</div>
                      <div className="ticket-status">{chamado.Status}</div>
                      <div className="ticket-time">{chamado.Aberto.split(" ")[0]}</div>
                    </div>
                  </div>
                ))
              ) : (
                <p id="aviso"><strong>Nenhum chamado encontrado.</strong></p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
