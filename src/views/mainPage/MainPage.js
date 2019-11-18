import React, { Component } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

@observer
class MainPage extends Component {
  render() {
    const menuItems = this.props.menuItems;
    return (
      <div>
        {menuItems.map(item => (
          <div>
          <Link to={item.link}> {item.title.rendered} </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default MainPage;
