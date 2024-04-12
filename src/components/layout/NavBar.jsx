import { Link } from "react-router-dom";

import Container from "./Container";

import './NavBar.css';
import logo from '../../img/costs_logo.png';

function NavBar(params) {
  return(
    <nav className="navbar">
      <Container>
        <ul className="list">
          <li className="item">
            <Link to="/"><img src={logo} alt="Costs" /></Link>
          </li>
          <li className="item">
            <Link to="/">Home</Link>
          </li>
          <li className="item">
            <Link to="/projects">Projetos</Link>
          </li>
          <li className="item"> 
           <Link to="/company">Sobre</Link>
          </li>
          <li className="item">
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </Container>
    </nav>
  )
    
}

export default NavBar;