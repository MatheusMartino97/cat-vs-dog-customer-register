import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class DogPicture extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogPictureURL: '',
      isLoading: false,
    };

    this.fetchRandomDogPicture = this.fetchRandomDogPicture.bind(this);
  }

  componentDidMount() {
    this.fetchRandomDogPicture();
  }

  async fetchRandomDogPicture() {
    this.setState({
      isLoading: true,
    });

    const endPoint = 'https://dog.ceo/api/breeds/image/random';
    const request = await fetch(endPoint);
    const response = await request.json();
    const dogPictureURL = response.message;

    this.setState({
      dogPictureURL,
      isLoading: false,
    });
  }

  render() {
    return (
      <div>
        <header>
          <div className="page-heading">
            <h1>Login feito com Sucesso!!!</h1>
          </div>
        </header>
        <main>
            {this.state.isLoading === true ? (
              <img
                src="https://img.cloudygif.com/small/754f4958462ec465.gif"
                alt="dog"
              />
            ) : (
              <img height="500px" src={this.state.dogPictureURL} alt="dog" />
            )}
            <br/>
          <button className="result-page-btn" onClick={this.fetchRandomDogPicture}>
            Buscar outra foto
          </button>
        </main>
        <footer>
          <Link to="/">Home</Link>
          <Link to="/login">Entrar com outra conta</Link>
        </footer>
      </div>
    );
  }
}

export default DogPicture;
