import React from 'react'
import Typist from 'react-typist'

export default props => (
    
    <section id='home' className='content-page background-home'>
        <Typist avgTypingSpeed={400} startDelay={1000}>
            <h1> Victor Levi </h1>
            <Typist.Delay ms={1000} />
            <span>Web Devolo</span>
            <Typist.Backspace count={3} delay={800} />
            <span>loper</span>
        </Typist>
    </section >
)