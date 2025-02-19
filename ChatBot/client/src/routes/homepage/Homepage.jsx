import { Link } from 'react-router-dom'
import './homepage.css'
import { TypeAnimation } from 'react-type-animation'
import React, { useState } from 'react'

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState('human1')
  return (
    <div className='homepage'>
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>ECHO AI</h1>
        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus natus dolorem aliquam asperiores tempore.</h3>
        <Link to='/dashboard'>Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" className='bot' alt="bot" />
          <div className="chat">
            <img src={typingStatus === "human1"
              ? "/human1.jpeg"
              : typingStatus === "human2"
              ? "/human2.jpeg"
              : "bot.png"
              }
              alt="bot"
            />
            <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Human:We produce food for Mice',
              2000, () => {setTypingStatus('bot')}, // wait 1s before replacing "Mice" with "Hamsters"
              'Bot:We produce food for Hamsters',
              2000, () => {setTypingStatus('human1')},
              'Human2:We produce food for Guinea Pigs',
              2000, () => {setTypingStatus('bot')},
              'Bot:We produce food for Chinchillas',
              2000, () => {setTypingStatus('human2')},
            ]}
            wrapper="span"
            repeat={Infinity}
            cursor={true}
            omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="Logo" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  )
}

export default Homepage