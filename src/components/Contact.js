import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

export default function Contact() {

  const mail = <FontAwesomeIcon icon={faEnvelope} />
  const linkedin = <FontAwesomeIcon icon={faLinkedin} />

  function emailMe() {
    window.location.href = 'mailto:mila.webdev@gmail.com'
  }

  function linkedinVisit() {
    window.location.href = 'https://www.linkedin.com/in/lyudmilanevedomskaya/'
  }
  return (
    <div className="contact">
      
      <button className="mail" onClick={emailMe}>{mail} Email</button>
      <button className="linkedin" onClick={linkedinVisit}>{linkedin} LinkedIn</button>

    </div>
  )
}