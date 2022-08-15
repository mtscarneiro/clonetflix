import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer--info'>
            <div className='footer--credits'>
                <h4>Desenvolvido por Matheus Carneiro<span role='img' aria-label='desenvolvedor'>👨‍💻</span></h4>
                Um clone do Netflix, pra quem vai todos os créditos!<br/>
                API do Themoviedb.org!
            </div>
            <div className='footer--socials'>
                <div className='footer--github'>
                    <a href='https://github.com/mtscarneiro' >
                        <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
                             alt='GitHub'
                             target="_blank" />
                    </a>
                </div>
                <div className='footer--linkedin'>
                    <a href='https://www.linkedin.com/in/mtscarneiro23/' >
                        <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png'
                             alt='LinkedIn'
                             target="_blank" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer