import { render } from "@testing-library/react";
import React, { COM } from "react";
import "./style.css";
import { Component } from "react/cjs/react.production.min";
import Home from "./Home";
import About from "./About";
import Todo from "./Todo";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import todo from "./Todo";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home">home</Link>
              </li>

              <li>
                <Link to="/about">about </Link>
              </li>

              <li>
                <Link to="/todo">to-do app </Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/todo' element={<Todo />} />

          </Routes>

        </div>
      </Router>

    </div>
  )
};

export default App;
