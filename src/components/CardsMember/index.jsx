import './index.scss'
import Card from "../Card";

function CardsMember() {
  return (
    <div className="cards-member">
      <div className="card-member">
        <Card>
          <div className="card-member-pic" id="bialas"></div>
          <div className="card-member-description">
            <div className="card-member-name">Eduardo Bialas</div>
            <div className="card-member-job">Edição de Vídeo</div>
          </div>
        </Card>
      </div>
      <Card>
        <div className="card-member-pic" id="luiz"></div>
        <div className="card-member-description">
          <div className="card-member-name">Luiz Gustavo</div>
          <div className="card-member-job">Desenvolvedor</div>
        </div>
      </Card>
      <Card>
        <div className="card-member-pic" id="higor"></div>
        <div className="card-member-description">
          <div className="card-member-name">Higor Alves</div>
          <div className="card-member-job">Desenvolvedor</div>
        </div>
      </Card>
      <Card>
        <div className="card-member-pic" id="guilherme"></div>
        <div className="card-member-description">
          <div className="card-member-name">Guilherme Lopes</div>
          <div className="card-member-job">Edição de Vídeo</div>
        </div>
      </Card>
      <Card>
        <div className="card-member-pic" id="gabriel"></div>
        <div className="card-member-description">
          <div className="card-member-name">Gabriel Reis</div>
          <div className="card-member-job">Desenvolvedor</div>
        </div>
      </Card>
    </div>
  );
}

export default CardsMember;
