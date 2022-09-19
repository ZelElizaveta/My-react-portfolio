import './AboutContent.css';
import React from 'react'

const Skills = () => {
    return (
        <>
            <h1 className="heading-about">Что я умею?</h1>
            <div className="seperator"></div>
            <div className="skill-container">
                <div className="skill-card" style={{'--backgroundColor': '#f06529'}}>
                    <p className="skill">HTML</p>
                </div>
                <div className="skill-card" style={{'--backgroundColor': '#379ad6'}}>
                    <p className="skill">CSS</p>
                </div>
                <div className="skill-card" style={{'--backgroundColor': '#cc6699'}}>
                    <p className="skill">SCSS/SASS</p>
                </div>
                <div className="skill-card" style={{'--backgroundColor': '#f7df1e'}}>
                    <p className="skill">JavaScript</p>
                </div>
                <div className="skill-card large" style={{'--backgroundColor': '#5ed9fb'}}>
                    <p className="skill">ReactJS</p>
                </div>
                <div className="skill-card large" style={{'--backgroundColor': '#83cd29'}}>
                    <p className="skill">NodeJS</p>
                </div>
                <div className="skill-card" style={{'--backgroundColor': '#326690'}}>
                    <p className="skill">TypeScript</p>
                </div>
                <div className="skill-card" style={{'--backgroundColor': '#ffa000'}}>
                    <p className="skill">Bootstrap</p>
                </div>
                <div className="skill-card large" style={{'--backgroundColor': '#5ed9fb'}}>
                    <p className="skill">Git</p>
                </div>
            </div>
        </>
    )
}

export default Skills