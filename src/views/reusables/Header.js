import React, { Component } from "react";
import { observablePageStore } from "../../dataStors/dataStorePage";
import { observer } from "mobx-react";

@observer
class Header extends Component {
 render() {
    return (
      <content className="Header">
        <h5> Hello from header! </h5>
        { observablePageStore.pages.length }
      </content>
    );
  }
}

export default Header;
