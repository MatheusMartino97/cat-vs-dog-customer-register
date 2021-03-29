import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FailToLogin extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="page-heading">
            <h1>Falha ao fazer o login</h1>
          </div>
        </header>
        <footer>
          <Link to="/">Home</Link>
          <Link to="/login">Tentar novamente</Link>
          <Link to="/register">Cadastre-se</Link>
        </footer>
      </div>
    );
  }
}

export default FailToLogin;
