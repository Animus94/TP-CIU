import React, { useState, useEffect } from "react";
import "../styles/CafeGaleria.css";

const CafeGaleria = () => {
  const [titulos, setTitulos] = useState([]);
  useEffect(() => {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((response) => response.json())
      .then((data) =>
        setTitulos(data.filter((i) => i.title != null && i.title != "test 1"))
      );
  }, []);

  return (
    <div className="contenedorCartas">
      {titulos.map((data, indice) => (
        <Carta key={indice} titulo={data.title} direcUrl={data.image}></Carta>
      ))}
    </div>
  );
};

const Carta = ({ titulo, direcUrl }) => {
  return (
    <div className="carta">
      <div className="cartaContent">
        <img className="cartaImagen" src={direcUrl}></img>
        <h1 id="cartaTitulo">{titulo}</h1>
      </div>
    </div>
  );
};

export default CafeGaleria;
