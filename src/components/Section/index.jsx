/* eslint-disable react/prop-types */
import './index.scss'


function Section (props) {
    return (
        <section className='section'>
            <div className='section-content'>
                <div className='section-content-title'>
                    <h2>
                        {props.title}
                    </h2>
                    {props.description ? (
                        <p>
                            {props.description}
                        </p>
                    ) : null}
                </div>
                <div className='section-content-inner'>
                    {props.children}
                </div>
            </div>
        </section>
    )
}

export default Section
