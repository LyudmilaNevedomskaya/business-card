import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

export default function Contact() {

  const mail = <FontAwesomeIcon icon={faEnvelope} />
  const linkedin = <FontAwesomeIcon icon={faLinkedin} />
  
  return (
    <div className="contact">
      <button className="mail">{mail} Email</button>
      <button className="linkedin">{linkedin} LinkedIn</button>

    </div>
  )
}