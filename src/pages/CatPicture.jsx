import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/media-queries.css'

class CatPicture extends Component {
  constructor(props) {
    super(props);

    this.state = {
      catPictureURL: '',
      isLoading: false,
    };

    this.fetchRandomCatPicture = this.fetchRandomCatPicture.bind(this);
  }

  componentDidMount() {
    this.fetchRandomCatPicture();
  }

  async fetchRandomCatPicture() {
    this.setState({
      isLoading: true,
    });

    const endPoint = 'https://aws.random.cat/meow';
    const request = await fetch(endPoint);
    const response = await request.json();
    const catPictureURL = response.file;

    this.setState({
      catPictureURL,
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
              src="https://i.pinimg.com/originals/97/e9/42/97e942ce7fc4e9d4ea6d844a382f251f.gif"
              alt="cat"
            />
          ) : (
            <img src={this.state.catPictureURL} alt="cat" />
          )}
          <br/>
          <button className="result-page-btn" onClick={this.fetchRandomCatPicture}>
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

export default CatPicture;
