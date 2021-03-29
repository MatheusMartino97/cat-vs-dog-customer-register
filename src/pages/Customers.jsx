import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/customers.css';
import '../styles/media-queries.css';

class Customers extends Component {
  render() {
    const { customersList } = this.props;
    const customersListElement = () => {
      return (
        <div>
          <header>
            <div className="page-heading">
              <h1>Usuários encontrados:</h1>
            </div>
          </header>
          <main>
            <div id="customers-container">
              {customersList.map((customer, index) => {
                return (
                  <div className="customer" key={index}>
                    <span>
                      Usuário: <em>{customer.email}</em>
                    </span>
                    <span>
                      Senha: <em>{customer.password}</em>
                    </span>
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      );
    };

    return (
      <div>
        <div id="customers-list">
          {customersList.length === 0 ? (
            <header>
              <div className="page-heading">
                <h1>Nenhum cadastro encontrado</h1>
              </div>
            </header>
          ) : (
            customersListElement()
          )}
        </div>
        <footer>
          <Link to="/">Home</Link>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    customersList: state.registerReducer.customersList,
  };
};

export default connect(mapStateToProps, null)(Customers);
