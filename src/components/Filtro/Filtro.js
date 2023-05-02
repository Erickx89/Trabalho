import "./Filtro.css";
import React, { useState } from "react";

export default function Filtro({ onFiltroSelecionado, onOrdemSelecionada }) {
  const [filtroSelecionado, setFiltroSelecionado] = useState("titulo");
  const [ordemSelecionada, setOrdemSelecionada] = useState("asc");

  function handleFiltroChange(e) {
    setFiltroSelecionado(e.target.value);
    onFiltroSelecionado(e.target.value);
  }

  function handleOrdemChange(e) {
    setOrdemSelecionada(e.target.value);
    onOrdemSelecionada(e.target.value);
  }

  return (
    <div className="filtro-container">
      <div className="filtro">
        <label className="filtro-titulo">Ordenar por:</label>
        <div className="filtro-opcoes">
          <div>
            <input
              type="radio"
              id="titulo"
              name="filtro"
              value="titulo"
              checked={filtroSelecionado === "titulo"}
              onChange={handleFiltroChange}
            />
            <label htmlFor="titulo">Título</label>
          </div>
          <div>
            <input
              type="radio"
              id="ano"
              name="filtro"
              value="ano"
              checked={filtroSelecionado === "ano"}
              onChange={handleFiltroChange}
            />
            <label htmlFor="ano">Ano</label>
          </div>
          <div>
            <input
              type="radio"
              id="nota"
              name="filtro"
              value="nota"
              checked={filtroSelecionado === "nota"}
              onChange={handleFiltroChange}
            />
            <label htmlFor="nota">Nota</label>
          </div>
        </div>
      </div>
      
    </div>
  );
}
