import React from "react"
import ReactDOM from "react-dom"

function Info() {
    return (
        <div className="info">
            <div className="info1">
            <h1> Pedro H. Milani Vagula</h1>
                <h2> Frontend Developer </h2>
                   <p className="Pedro"> PedroMilani04  </p>
                   <div className="botoes">
                    <a className="botao1"> </a>
                    <a href="https://www.linkedin.com/in/pedro-henrique-milani-vagula-6a291a21b/" className="botao2"> </a>
                    </div>
            </div>
            <div className="info2"> 
                <h3> Sobre </h3>
                    <p>  Desenvolvedor Front-End, focando na aprendizagem, especialmente de ReactJS. Tentando sempre manter boas práticas e segurança em projetos, procurando sempre aprender novas coisas. </p>
                <h3> Interesses </h3>
                    <p> ReactJS, Música, Jogos, Estudo. </p>
            </div>
        </div>
    )
}

export default Info