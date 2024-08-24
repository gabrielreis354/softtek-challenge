import Grid from '../../assets/svg/Grid'
import BadgeAI from '../elements/BadgeAI'
import React, { useState } from 'react';

import './HeroSection.scss'

function Hero () {
    const [isPaused, setIsPaused] = useState(true)

    const handleClick = () => {
      setIsPaused(false)
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
                            Nome do video a ser apresentado.mp4
                        </div>

                    </div>
                    <div className='hero-frame-content'>
                        <div className='frame-content-inner'>
                            <div className='frame-content-left'>
                                <div className='frame-video'>
                                    <div onClick={handleClick}  className={`iframe-wrapper ${isPaused ? 'paused' : ''}`}>
                                    {!isPaused && (
                                            <iframe
                                                src="https://www.youtube.com/embed/Bmj3bcI7nmI?autoplay=1"
                                                frameBorder="0"
                                                allow="autoplay; fullscreen"
                                                allowFullScreen
                                                title="YouTube video"
                                            ></iframe>
                                    )}
                                    </div>
                                </div>
                                <div className='frame-video-title'>
                                    Video pitch 1 .mp4
                                </div>
                            </div>
                            <div className='frame-content-right'>
                                <div className='frame-video-select'>
                                    Video 1
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