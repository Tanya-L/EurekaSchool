import React, { Component } from "react";
import "./assets/css/App.css";
import { observablePageStore } from "./dataStors/dataStorePage";
import { observer } from "mobx-react";
import Menu from "./Menu";
import Header from "./Header";

@observer
class App extends Component {
  componentWillMount() {
    observablePageStore.load();
  }
  render() {
    if (observablePageStore.isPagesLoaded === true) {
      return (
        <div className="App">
          <header className="App-header">
          <Header />
          </header>
          <Menu />
        </div>
      );
    }
    return <span>Loading</span>
  }
}

export default App;
