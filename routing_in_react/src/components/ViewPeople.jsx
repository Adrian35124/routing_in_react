import React, { Component } from "react";

class ViewPeople extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    };
  }
  loadPeople() {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((people) => this.setState({ people }))
      .catch((err) => console.log(err));
  }
  render() {
    return this.state.people.map((person) => {
      return (
        <div key={person.id} className="card m-2">
          <div className="card-body">
            <h5 className="card-title">{person.name}</h5>
            <p className="card-text">{person.gender}</p>
            <h3 className="card-text">{person.age}</h3>
            <a href={`/ViewPeople/${person.id}`} className="card-link">
              Go somewhere
            </a>
          </div>
        </div>
      );
    });
  }
}
export default ViewPeople