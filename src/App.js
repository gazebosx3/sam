import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import me from "./samcat.jpg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={me} className="App-logo" alt="logo" />
        <div>
          <h1>Hi! I'm Sam</h1>
          <h3>I love programming even more than my beloved cat loves me.</h3>
          Some tech things I like:
          <div className="tech-stuff">
            <ul>
              <li>ES6</li>
              <li>Node.js</li>
              <li>React </li>
              <li>Redux</li>
              <li>Angular</li>
            </ul>
            <ul>
              <li>AWS (I'm certified!)</li>
              <li>SQL</li>
              <li>HTML/CSS</li>
              <li>Postgres</li>
              <li>Sequelize</li>
            </ul>
            <ul>
              <li>Docker</li>
              <li>GraphQL</li>
              <li>Kafka</li>
              <li>MySQL</li>
              <li>TypeORM</li>
            </ul>
            <ul>
              <li>Mocha/Chai</li>
              <li>Jasmine</li>
              <li>Git</li>
            </ul>
          </div>
          <div>
            Some non-tech things I like:
            <ul>
              <li>cats (duh)</li>
              <li>exercise</li>
              <li>reading novels</li>
              <li>The Met and other museums</li>
              <li>Learning and building stuff with people</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
