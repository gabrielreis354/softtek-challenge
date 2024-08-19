import './Cards.scss'
import Card from '../elements/Card'
import IconSelect from '../../svg/IconSelect'
import IconComputer from '../../svg/IconComputer'

function Cards () {
    return ( 
        <div className='cards'>
            <Card>
                <span>
                    <IconComputer color={"#e1ffff"} height={"36"} />
                </span>
                <h3 className='card-title'>
                    Inteligência artificial
                </h3>
                <p>
                    They are easy because they are poors. Falei, Mamae. Feature benefits will be writed here, aleatory words for make it be nice like a real text my friend hello world russian girls naked.
                </p>
            </Card>
            
            <Card>
                <span>
                    <IconSelect color={"#e1ffff"} height={"36"}/>
                </span>
                <h3>
                    Escalonamento Inteligente
                </h3>
                <p>
                    They are easy because they are poors. Falei, Mamae. Feature benefits will be writed here, aleatory words for make it be nice like a real text my friend hello world russian girls naked.
                </p>
            </Card>

            <Card>
                <span>
                    <IconSelect color={"#e1ffff"} height={"36"}/>
                </span>
                <h3>
                    Escalonamento Inteligente
                </h3>
                <p>
                    They are easy because they are poors. Falei, Mamae. Feature benefits will be writed here, aleatory words for make it be nice like a real text my friend hello world russian girls naked.
                </p>
            </Card>
        </div>
    )
}

export default Cards