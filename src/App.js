import React, { Component } from "react";
import "./App.css";
import me from "./samcat.jpg";
import {mail, github, linkedin, resume} from './buttons';

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
              <div>ES6</div>
              <div>Node.js</div>
              <div>React </div>
              <div>Redux</div>
              <div>Angular</div>
            </ul>
            <ul>
              <div>AWS (I'm certified!)</div>
              <div>SQL</div>
              <div>HTML/CSS</div>
              <div>Postgres</div>
              <div>Sequedivze</div>
            </ul>
            <ul>
              <div>Docker</div>
              <div>GraphQL</div>
              <div>Kafka</div>
              <div>MySQL</div>
              <div>TypeORM</div>
            </ul>
            <ul>
              <div>Mocha/Chai</div>
              <div>Jasmine</div>
              <div>Git</div>
            </ul>
          </div>
          <div>
            Some non-tech things I like:
            <ul>
              <div>cats (duh)</div>
              <div>exercise</div>
              <div>reading novels</div>
              <div>The Met and other museums</div>
              <div>Building stuff with people</div>
            </ul>
          </div>
          <div className="toolbar">
              <a href='href="mailto:samuelglass@gmail.com"'><img alt='mail' className='image' src={mail} /></a>
              <a href='https://www.linkedin.com/in/sam-glass/'><img alt='linkedin' className='image'  src={linkedin} /></a>
              <a href='https://github.com/gazebosx3'><img  alt='github'  className='image'  src={github} /></a>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
