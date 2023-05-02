import React from 'react';
import Server from './../assets/images/server.svg';
import "./../assets/css/sobre.css"

function Sobre() {
    
    return (
        <div className='about-us'>            
            <img src={Server} alt='Logo da Stream Server'/>
            <p className='description'>Bem-vindo ao nosso site de filmes, o lugar perfeito para os amantes do cinema! Aqui, você encontrará uma enorme seleção de filmes para todos os gostos e estilos, desde os clássicos até as mais recentes produções de Hollywood. Nossa plataforma oferece a você a melhor experiência de streaming de filmes, com qualidade de imagem e som excepcionais e uma interface intuitiva e fácil de usar.</p>
        </div>
    )
}

export default Sobre;