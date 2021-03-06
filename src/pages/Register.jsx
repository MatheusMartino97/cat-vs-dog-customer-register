import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import registerCustomerAction from '../actions';
import { connect } from 'react-redux';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      animal: 'none',
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateUser = this.validateUser.bind(this);
    this.validateChosenAnimal = this.validateChosenAnimal.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  validateUser(email, customersList) {
    const customerWithThisEmail = customersList.find((customer) => {
      return customer.email === email;
    });

    if (customerWithThisEmail) {
      window.alert(
        'Falha ao cadastrar: email já está sendo utilezado por outro usuário'
      );

      return false;
    }

    return true;
  }

  validateChosenAnimal() {
    const { registerCustomer } = this.props;
    if (this.state.animal !== 'none') {
      if (this.state.animal === 'cat') {
        const validateAnimal = window.confirm(
          'Tem certeza que gosta de gatos?'
        );

        if (validateAnimal === true) {
          registerCustomer(this.state);

          this.setState({
            email: '',
            password: '',
          });

          return;
        }

        return;
      }
      registerCustomer(this.state);

      this.setState({
        email: '',
        password: '',
        animal: 'none',
      });
    } else {
      window.alert('Favor escolher um animal');
    }
  }

  handleClick() {
    const { email } = this.state;
    const { customersList } = this.props;

    if (this.validateUser(email, customersList) === true) {
      this.validateChosenAnimal();
    }
  }

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <header>
          <div className="page-heading">
            <h1>Cadastro</h1>
          </div>
        </header>
        <main>
          <form className="inputs" onChange={this.handleChange}>
            <fieldset>
              <legend>Informações para cadastro</legend>
              <label htmlFor="email">
                Usuário:
                <input
                  type="email"
                  placeholder="Digite seu email"
                  id="email"
                  value={email}
                />
              </label>
              <br />
              <label htmlFor="password">
                Senha:
                <input
                  type="password"
                  placeholder="Digite sua senha"
                  id="password"
                  value={password}
                />
              </label>
              <br />
              <label htmlFor="animail">
                Você prefere:
                <br/>
                <select value={this.state.animal} name="aminal-select" id="animal">
                  <option value="none">Opções</option>
                  <option value="dog">Cachorro</option>
                  <option value="cat">Gato</option>
                </select>
              </label>
            </fieldset>

            <br />
            <button type="button" onClick={this.handleClick}>
              Cadastrar
            </button>
          </form>
        </main>

        <footer>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
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

const mapDispatchToProps = (dispatch) => {
  return {
    registerCustomer: (customerData) =>
      dispatch(registerCustomerAction(customerData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
