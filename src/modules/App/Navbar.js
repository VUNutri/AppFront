import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../img/logo.png';
import recipePage from './recipePage';
import Container from './Container';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userLoggedIn:false};
  }

  render() {
    return (
      <Router>
        <nav id="sidebar">
          <div className="sidebar-header">
            <img alt="Nutri logo" src={logo} className="navLogo"/>
          </div>
          <ul className="list-unstyled components">
            <li>
              <a href="/">PAGRINDINIS</a>
            </li>
            <li>
              <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">PATIEKALAI</a>
              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li>
                  <a href="#">Veganiški</a>
                </li>
                <li>
                  <a href="#">Saldūs</a>
                </li>
                <li>
                  <a href="#">Gurmaniški</a>
                </li>
                <li>
                  <a href="#">Mėsos mylėtojai</a>
                </li>
                <li>
                  <a href="#">Vegetariški</a>
                </li>
                <li>
                  <a href="#">Užkandžiai</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">APIE NUTRI</a>
            </li>
            <li>
              <a href="/recipes">RECEPTAI</a>
            </li>
            <li>
              <a href="#">MŪSŲ KOMANDA</a>
            </li>
          </ul>
          <ul className="list-unstyled CTAs">
            <li>
              <a href="#" className="navLogin">PRISIJUNGTI</a>
            </li>
            <li>
              <a href="/createProfile" className="navRegister">REGISTRUOTIS</a>
            </li>
          </ul>
        </nav>
      </Router>);
  }
}

export default Navbar;
