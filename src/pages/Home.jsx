import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="page-heading">
            <h1>Cães e Gatos</h1>
          </div>
          <nav>
            <div id="home-links">
              <Link to="/register">Cadastre-se</Link>
              <Link to="/login">Login</Link>
              <Link to="/customers">Cadastros</Link>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Home;
