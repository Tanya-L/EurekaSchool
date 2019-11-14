import React, { Component } from "react";
import "./assets/css/App.css";
import { observablePageStore } from "./dataStors/dataStorePage";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

@observer
class Menu extends Component {
  render() {
    return (
      <div className="MainMenu">
        {observablePageStore
          .getMenu()
          .map(({ title, link, index }) => (
            <h6>
              <li key={index}>
                <Link to={link}> {title.rendered} </Link>
              </li>
            </h6>
          ))}
      </div>
    );
  }
}

export default Menu;
