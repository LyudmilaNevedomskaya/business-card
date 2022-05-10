import React from 'react';
import logo from '../img/mila.jpg'

export default function Header() {
  return (
    <header className='header'>
      <img src={logo} alt="logo" width="317px" height="317px" />
      <h1>Mila Nevedomskaya</h1>
      <h3>Frontend Developer</h3>
      <a href="https://spotty-wave-onion.glitch.me/" target="_blank"><p>mila.website</p></a>
    </header>
  )
};