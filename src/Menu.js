import React, { Component } from "react";
import "./assets/css/App.css";
import { observablePageStore } from "./dataStors/dataStorePage";
import { observer } from "mobx-react";

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
                <a href={link}> {title.rendered} </a>
              </li>
            </h6>
          ))}
      </div>
    );
  }
}

export default Menu;
