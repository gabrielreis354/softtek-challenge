import './index.scss'
import HTMLImg from "../../assets/img/html.png"
import CSSImg from "../../assets/img/css-3.png"
import JSImg from "../../assets/img/js.png"
import ReactImg from "../../assets/img/atom.png"
import SASSImg from "../../assets/img/sass.png"


function Technologies() {
  return (
    <div className='technologies-wrapper'>
        <div className='technologies'>
             <div className='technology'>
                <div className='tech-head'>
                    <div className='tech-icon'>
                        <img src={HTMLImg} alt="technology icon" width={28}/>
                    </div>
                    <div className='tech-name'>
                        HTML 5
                    </div>
                </div>
                <div className='tech-text'>
                    HTML é a linguagem usada para estruturar e exibir conteúdo na web.
                </div>
             </div>
             <div className='technology'>
                <div className='tech-head'>
                    <div className='tech-icon'>
                        <img src={CSSImg} alt="technology icon" width={28}/>
                    </div>
                    <div className='tech-name'>
                        CSS 3
                    </div>
                </div>
                <div className='tech-text'>
                    CSS é a linguagem usada para estilizar e formatar elementos em páginas web.
                </div>
             </div>
             <div className='technology'>
                <div className='tech-head'>
                    <div className='tech-icon'>
                        <img src={JSImg} alt="technology icon" width={28}/>
                    </div>
                    <div className='tech-name'>
                        JavaScript
                    </div>
                </div>
                <div className='tech-text'>
                    JavaScript é a linguagem de programação que adiciona interatividade a páginas web.
                </div>
             </div>
             <div className='technology'>
                <div className='tech-head'>
                    <div className='tech-icon'>
                        <img src={ReactImg} alt="technology icon" width={28}/>
                    </div>
                    <div className='tech-name'>
                        React
                    </div>
                </div>
                <div className='tech-text'>
                    React é uma biblioteca JavaScript para construir interfaces reativas e componentes reutilizáveis.
                </div>
             </div>
             <div className='technology'>
                <div className='tech-head'>
                    <div className='tech-icon'>
                        <img src={SASSImg} alt="technology icon" width={28}/>
                    </div>
                    <div className='tech-name'>
                        SASS
                    </div>
                </div>
                <div className='tech-text'>
                    Sass é uma linguagem que estende CSS com variáveis e funcionalidades adicionais.
                </div>
             </div>
        </div>
    </div>
  )
}

export default Technologies
