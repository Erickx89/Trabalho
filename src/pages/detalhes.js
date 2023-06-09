import "./../assets/css/destaques.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Carregando from "../components/Carregando/Carregando";

function Detalhes() {
  const { filme } = useParams();
  const options = { method: "GET" };
  const [movieToBeShown, setMovieToBeShown] = useState(null);
  const URL = `https://my-json-server.typicode.com/marycamila184/moviedetails/moviedetails/${filme}`;

  useEffect(() => {
    fetch(URL, options)
      .then((response) => response.json())
      .then((movieToBeShown) => setMovieToBeShown(movieToBeShown));
  }, []);

  if (!movieToBeShown) {
    return <Carregando />
  }

  return (
    <div className="filme-destaque px-5">
      <img src={`${movieToBeShown.poster}`} alt={`${movieToBeShown.titulo}`} />
      <article className="main-text">
        <h1 className="filme-title">{movieToBeShown.titulo}</h1>
        <h6 className="filme-ano">{movieToBeShown.ano} </h6>
        <p className="filme-sinopse">{movieToBeShown.sinopse}</p>
        <div className="btn-container">
          <Link
            to={`https://youtube.com/results?search_query=${movieToBeShown.titulo} Trailer ,`}
            className="filme-trailer"
          >
            <div className="btn btn-primary me-3">Trailer</div>
          </Link>
          <Link to="/" className="btn btn-primary">
            Voltar ao Inicio
          </Link>
        </div>
      </article>
    </div>
  );
}

export default Detalhes;
