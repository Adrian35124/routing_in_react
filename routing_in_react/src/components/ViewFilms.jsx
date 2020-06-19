import React, { Component } from "react";

class ViewFilms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: [],
    };
  }
  loadFilms() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((films) => this.setState({ films }))
      .catch((err) => console.log(err));
  }
  render() {
    this.loadFilms();
    return this.state.films.map((film) => {
      return (
        <div key={film.id} className="card m-2">
          <div className="card-body">
            <h5 className="card-title">{film.title}</h5>
            <p className="card-text">{film.director}</p>
            <h3 className="card-text">{film.description}</h3>
            <a href={`/ViewFilms/${film.id}`} className="card-link">
              Go somewhere
            </a>
          </div>
        </div>
      );
    });
  }
}
export default ViewFilms