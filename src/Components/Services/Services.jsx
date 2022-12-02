import React from 'react';
import "./Services.css";
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './Resume.pdf';

const Services = () => {
    return (
        <div className="services">

            {/* left side */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.  consequuntur ex cumque
                    <br />
                    cupiditate nisi excepturi quidem alias unde ut quas.
                </span>
                <a href={Resume} download>
                    <button className='button s-button'>Download CV</button>
                </a>
                <div className='blur s-blur1' style={{ background: '#ABF1FF94' }}></div>
            </div>

            {/* right side */}
            <div className="cards">
                <div style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
                    />
                </div>

                {/* second card */}
                <div style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={"Html, CSS, JavaScript, React"}
                    />
                </div>

                {/* 3rd card */}
                <div style={{ top: '19rem', left: '12rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'UI/UX'}
                        detail={"Lorem ipsum dummy text where we use to ahve some dummy text in our required fields"}
                    />
                </div>

                <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
            </div>

        </div>
    )
}

export default Services;