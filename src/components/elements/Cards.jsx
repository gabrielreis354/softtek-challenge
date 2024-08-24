import './Cards.scss'
import Card from './Card'
import IconSelect from '../../assets/svg/IconSelect'
import IconComputer from '../../assets/svg/IconComputer'
import IconFocus from '../../assets/svg/IconFocus'

function Cards () {
    return ( 
        <div className='cards'>
            <Card>
                <span>
                    <IconComputer color={"#e1ffff"} height={"42"} />
                </span>
                <h3 className='card-title'>
                    Inteligência artificial
                </h3>
                <p>
                    A EasyCall usa IA para analisar históricos e identificar padrões, acelerando a resolução de problemas e aprimorando a precisão das soluções.
                </p>
            </Card>
            
            <Card>
                <span>
                    <IconSelect color={"#e1ffff"} height={"42"}/>
                </span>
                <h3>
                    Escalonamento Inteligente
                </h3>
                <p>
                    A EasyCall aloca chamados para técnicos com a especialização e carga de trabalho adequadas, garantindo uma resolução rápida e eficiente.
                </p>
            </Card>

            <Card>
                <span>
                    <IconFocus color={"#e1ffff"} height={"42"}/>
                </span>
                <h3>
                    Foco no problema
                </h3>
                <p>
                    A EasyCall oferece uma abordagem inteligente para melhorar a eficiência do suporte técnico e agilizar a resolução de problemas.
                </p>
            </Card>
        </div>
    )
}

export default Cards