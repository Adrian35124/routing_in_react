import React, { Fragment } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./Home"
import ViewFilms from "./ViewFilms";
import ViewPeople from "./ViewPeople";
import SingleFilm from "./SingleFilm";
import SinglePerson from "./SinglePerson";
const App = () => {
  return (
    <Router>
      <Fragment>
        <nav>
          <ul>
            <li><Link to="./Home"> Go Home </Link></li>
            <li>
              <Link to="./ViewFilms"> Go View Films</Link>
            </li>
            <li>
              <Link to="./ViewPeople"> Go View People</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/ViewFilms" component={ViewFilms} />
          <Route exact path="/ViewPeople" component={ViewPeople} />
          <Route exact path="/Home" component={Home}/>
          <Route exact path="/ViewFilms/:id" component={SingleFilm}/>
          <Route exact path="/ViewPeople/:id" component={SinglePerson}/>
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
