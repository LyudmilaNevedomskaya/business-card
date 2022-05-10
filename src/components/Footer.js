import React from "react";
import { faFacebookSquare, faInstagramSquare, faGithubSquare, faMedium} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  const medium = <FontAwesomeIcon icon={faMedium}/>
  const facebook = <FontAwesomeIcon icon={faFacebookSquare}/>
  const instagram = <FontAwesomeIcon icon={faInstagramSquare}/>
  const git = <FontAwesomeIcon icon={faGithubSquare}/>


  return (
    <footer className="footer">
      <ul>
        <a href="https://medium.com/@milo4kamoya/which-is-the-best-hapi-vs-express-9389ed713dd6">
        <li className="medium">{medium}</li>
        </a>
        <a href="https://www.facebook.com/milo4kaa/">
        <li className="facebook">{facebook}</li>
        </a>
        <a href="https://www.instagram.com/lyudmilayamila/">
        <li className="instagram">{instagram}</li>
        </a>
        <a href="https://github.com/LyudmilaNevedomskaya">
        <li className="git">{git}</li>
        </a>
      </ul>
    </footer>
  )
}