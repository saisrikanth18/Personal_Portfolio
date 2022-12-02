import React from 'react';
import './Works.css';
import '../Services/Services.css';

const Works = () => {
    return (
        <div className='works'>
            <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.  consequuntur ex cumque
                    <br />
                    cupiditate nisi excepturi quidem alias unde ut quas.
                    <br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.  consequuntur ex cumque
                    <br />
                    cupiditate nisi excepturi quidem alias unde ut quas.
                </span>
                <button className='button s-button'>Hire me</button>
                <div className='blur s-blur1' style={{ background: '#ABF1FF94' }}></div>
            </div>
        </div>
    )
}

export default Works;