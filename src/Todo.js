import { render } from "@testing-library/react";
import React, { COM } from "react";
import "./style.css";
import { Component } from "react/cjs/react.production.min";
import { Button } from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from "react-bootstrap";
import Home from './Home';
import About from './About';
import { router, link } from 'react-router-dom'

class todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    }
  }

  updateInput(key, value) {
    this.setState({ [key]: value });
  }

  addItem() {
    // vytvorenie novej veci s unikatnym ID pomocou random funkcie
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()

    };

    // okopirujem list a vytvorim novu vec
    const list = [...this.state.list];
    list.push(newItem);

    // updatnem state novym listom
    this.setState({
      list,
      newItem: "" //vyprazdnim miesto na pridanie
    });
  }

  deleteItem(id) {//skopirujem si list konkretny
    const list = [...this.state.list];

    // dam prec/vyfiltrujem vec ktora chcem vymazat
    const updatedList = list.filter(item => item.id !== id);
    this.setState({ list: updatedList });
  }

  render() {
    return (

      <div>

        <div className="container">

          <h1>Add some to-do</h1>
          <br />
          <input className="inputplace"
            type="text"
            placeholder="Type to-do thing..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <div className="centerbtn">
            <button
              className="add-btn btn-floating"
              onClick={() => this.addItem()}
              disabled={!this.state.newItem.length}
            >
              <i class="material-icons"> + </i>
            </button>
          </div>
          <br /> <br />
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button className="btn btn-floating" onClick={() => this.deleteItem(item.id)}>
                    <i class="material-icons">X</i>
                  </button>
                </li>
              );
            })}
          </ul>


        </div>
      </div>
    );
  }
}

export default todo;
