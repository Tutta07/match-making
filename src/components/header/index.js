import React  from 'react';
import './styles.css';
import volantyLogo from '../../assets/volanty-logo.svg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const Header = () => {
    return <nav className="menu-nav">
        <div className="brand">
            <img className="logo" src={volantyLogo} alt="Volanty brand logo"/>
        </div>
         <Navbar collapseOnSelect expand="lg" variant="light">
          <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className="linksnavgador">
            <Nav.Link href="Home">Home</Nav.Link>
            <Nav.Link href="Base">Bases</Nav.Link>
            <Nav.Link href="Match">Match</Nav.Link>
           </Nav>
           </Navbar.Collapse>
      
      </Navbar>
    </nav>
}

export default Header; 