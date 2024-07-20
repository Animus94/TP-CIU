import React, { useState, useEffect } from 'react';
import "../styles/CafeGaleria.css";

const CafeGaleria = () => {
    const [titulos, setTitulos] = useState([])
    useEffect(() => {
        fetch("https://api.sampleapis.com/coffee/hot")
        .then(response => response.json())
        .then(data => setTitulos(data))
    },[])
    return (
        <div class="contenedorCartas">
            {titulos.map(data =>
                <Carta titulo={data.title} direcUrl={data.image}></Carta>
            )}
        </div>
    );
};

const Carta = ({ titulo, direcUrl }) => {
    return (
        <>
            <div class="carta">
                <div class="cartaContent">
                    <img class="cartaImagen" src={direcUrl}></img>   {/*ESTO ES LO MÁS IMPOR*/}
                    <h1 id="cartaTitulo">Titulo : {titulo}</h1>                        {/*ESTO ES LO MÁS IMPOR*/}
                </div> 
            </div>
        </>
    );
};

export default CafeGaleria;