import React, { Component } from 'react'

class SingleFilm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          film: {},
        };
      }
      componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
          .then((res) => res.json())
          .then((film) => this.setState({ film }))
          .catch((err) => console.log(err));
      }
      render() {
          return (
            <div className="card m-2">
              <div className="card-body">
                <h5 className="card-title">{this.state.film.title}</h5>
                <p className="card-text">{this.state.film.director}</p>
                <h3 className="card-text">{this.state.film.description}</h3>
              </div>
            </div>
          );
        }
      }
export default SingleFilm
