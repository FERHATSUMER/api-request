import React from 'react'
import { AiFillLinkedin } from "react-icons/ai";
import { BsInstagram, BsGithub } from "react-icons/bs";
import './header.css'

const Header = () => {
  return (
    <header className='header-container'>
     <img
        className="logo"
        src="https://media.licdn.com/dms/image/D4D03AQFMfnp5H1M-vA/profile-displayphoto-shrink_800_800/0/1667210919849?e=2147483647&v=beta&t=SL-bp4f4k3ElkP3ot_ahz2KSGT-uH9OeKbtvYwBTajw"
        alt="logo"
      />
       <nav className="nav">
        <ul>
          <li>
            <AiFillLinkedin />
            <a href="https://www.linkedin.com/in/ferhatsumer/" target="_blank">
              <h4>Linkedin</h4>
            </a>
          </li>
          <li>
            <BsGithub />
            <a href="https://github.com/FERHATSUMER" target="_blank">
              <h4>Github</h4>
            </a>
          </li>
          <li>
            <BsInstagram />
            <a href="https://www.instagram.com/ferhatsumer_/" target="_blank">
              <h4>Instagram</h4>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
