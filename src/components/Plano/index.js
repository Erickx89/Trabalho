import "./Plano.css";
import { Link } from "react-router-dom";

export default function Plano() {
  return (
    <section className="subscription-container">
      
      <div className="card-plano p-3">
        <div className="card-plano-body">
          
          <h2 className="card-plano-title">Plano Básico</h2>
          <h6 className="card-plano-subtitle text-body-secondary">
            R$29,90 por mês
          </h6>
          <p className="card-plano-text">
            Acesso ilimitado à séries e filmes em HD. <br />Até 2 telas simultaneas.
          </p>

          <div className="card-plano-bottom">
            <Link to="/" className="card-plano-link">
              <div className="btn btn-primary my-2">Assine já!</div>
            </Link>
            <Link to="/" className="card-plano-link">
              Voltar ao Inicio
            </Link>
          </div>
        </div>
      </div>

          
      <div className="card-plano p-3">
        <div className="card-plano-body">
          <h2 className="card-plano-title">Plano Premium</h2>
          <h6 className="card-plano-subtitle text-body-secondary">
            R$59,90 por mês. 
          </h6>
          <p className="card-plano-text">
            Acesso ilimitado à séries e filmes em Full HD. <br />Até 3 telas simultaneas.
          </p>

          <div className="card-plano-bottom">
            <Link to="/" className="card-plano-link">
              <div className="btn btn-primary my-2">Assine já!</div>
            </Link>
            <Link to="/" className="card-plano-link">
              Voltar ao Inicio
            </Link>
          </div>
        </div>
      </div>


      
      <div className="card-plano p-3">
        <div className="card-plano-body">
          <h2 className="card-plano-title">Plano Super Premium</h2>
          <h6 className="card-plano-subtitle text-body-secondary">
            R$79.90,00 por mês.
          </h6>
          <p className="card-plano-text">
            Acesso ilimitado à séries e filmes em 4K. <br />Sem limitação.
          </p>

          <div className="card-plano-bottom">
            <Link to="/" className="card-plano-link">
              <div className="btn btn-primary my-2">Assine já!</div>
            </Link>
            <Link to="/" className="card-plano-link">
              Voltar ao Inicio
            </Link>
          </div>
        </div>
      </div>


    </section>
  );
}
