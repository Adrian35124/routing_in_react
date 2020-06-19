import React, { Component } from 'react'

class SinglePerson extends Component {
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
        this.loadPeople();
        return this.state.people.map((person) => {
          return (
            <div key={person.id} className="card m-2">
              <div className="card-body">
                <h5 className="card-title">{this.state.people.name}</h5>
                <p className="card-text">{this.state.person.gender}</p>
                <h3 className="card-text">{this.state.person.age}</h3>
              </div>
            </div>
          );
        });
      }
}
export default SinglePerson