import './index.scss'
import { useState } from 'react';
import BadgeAI from '../../components/BadgeAI'
import Grid from '../../assets/svg/Grid'
import Play from '../../assets/svg/Play';
import thumbVP1 from '../../assets/img/vp1.webp';
import thumbVP2 from '../../assets/img/vp2.webp'

const videosInfo =[
    {
        youtubeId: "hXAfAjpD2R8",
        videoTitle: "Video Pitch 01",
        videoDescription: "O primeiro video pitch foi entregue no dia 16/05/2024 na plataforma On da FIAP. Foram abordados aspectos gerais do projeto como tecnologias utilizadas e principais beneficios do sistema. O video tem duração de 02:43.",
        thumbSrc: thumbVP1
    },
    {
        youtubeId: "dHFdrjl05Gc",
        videoTitle: "Video Pitch 02",
        videoDescription: "O segundo video pitch foi entregue no dia 29/08/2024 na plataforma On da FIAP. Este segundo video pitch focou principalmente em apresentar o contexto que permeia a aplicação e sua demonstração. O video tem duração de 03:00.",
        thumbSrc: thumbVP2
    },
]


function Hero () {
    
    const [isPaused, setIsPaused] = useState(true)

    const [videoInfo, setVideoInfo] = useState(videosInfo[0])

    const handleClick = function () {
      setIsPaused(false)
    }

    const handleRadioChange = function (e) {
        const selectedyoutubeId = e.target.value
        const selectedVideo = videosInfo.find(video => video.youtubeId === selectedyoutubeId)
        setVideoInfo(selectedVideo)
        setIsPaused(true)
    }
    
    return (
        <section className='hero'>
            <div className='hero-headline'>
                <BadgeAI/>
                <div className='hero-title'>
                    <h1 className='first-line'>
                        Facilitamos o suporte ao cliente com IA, 
                    </h1>
                    <h1 className='second-line'> 
                        combinando inovação e atenção pessoal.
                    </h1>
                </div>
                <div className='hero-text'>
                    A solução definitiva para facilitar os serviços de suporte técnico do seu negócio.
                </div>
                <div className='glow-grid'>
                    <Grid className={"grid-svg"} color={"#fff"}/>
                    <div className='glow'> </div>
                </div>
            </div>

            <div className='hero-element'>
                <div className='hero-frame'>
                    <div className='hero-frame-top'>
                        <div className='frame-actions'>
                            <div className='action action-red'></div>
                            <div className='action action-yellow'></div>
                            <div className='action action-green'></div>
                        </div>
                        <div className='frame-header'>
                            {videoInfo.videoTitle}.mp4
                        </div>

                    </div>
                    <div className='hero-frame-content'>
                        <div className='frame-content-head'>
                            <h3>
                                Videos Pitch Softtek
                            </h3>
                        </div>
                        <div className='frame-content-inner'>

                            <div className='frame-content-left'>
                                
                                <div className='frame-video'>
                                    <div onClick={handleClick} className='iframe-wrapper' >
                                        {!isPaused ? (
                                            <iframe
                                                src={`https://www.youtube.com/embed/${videoInfo.youtubeId}?autoplay=1`}
                                                frameBorder="0"
                                                allow="autoplay; fullscreen"
                                                allowFullScreen
                                                title={videoInfo.videoTitle}
                                            >
                                            </iframe>
                                        ) : (
                                            <>
                                                <img src={videoInfo.thumbSrc} alt="thumbnail"/>

                                                <div className='frame-video-overlay'>
                                                    <Play height={72} color="#fff" />
                                                </div>
                                            </>
                                            
                                            
                                        )
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='frame-content-right'>
                                <div className='frame-video-head'>
                                    <h3>
                                        {videoInfo.videoTitle}
                                    </h3>
                                    <p>
                                        {videoInfo.videoDescription}
                                    </p>
                                    
                                </div>
                                <div className='frame-video-select'>
                                    <h3>
                                        Selecione o video pitch
                                    </h3>
                                    <form>
                                        {videosInfo.map((video) => (
                                            <label key={video.youtubeId} className={(video.youtubeId === videoInfo.youtubeId) ? "checked" : ""}>
                                                <input
                                                    onChange={handleRadioChange}
                                                    type="radio"
                                                    name='video-info'
                                                    value={video.youtubeId}
                                                    checked={video.youtubeId === videoInfo.youtubeId}
                                                />
                                                <div className='select-video'>
                                                    <div className='select-video-inner'>
                                                        {video.videoTitle}.
                                                    </div>
                                                </div>
                                            </label>
                                        ))}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero