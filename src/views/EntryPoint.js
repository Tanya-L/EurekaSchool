import React from "react";
import Notfound from "./errorPage/NotFound";
import { withRouter } from "react-router-dom";
import { observablePageStore } from "../dataStors/dataStorePage";
import { observer } from "mobx-react";
import MainPage from "./mainPage/MainPage";
import SecondaryPage from "./secondaryPage/SecondaryPage";

@observer
class EntryPoint extends React.Component {
  componentWillMount() {
    observablePageStore.load();
  }

  render() {
    if (!observablePageStore.isPagesLoaded) {
      return <span>Loading</span>;
    }
    const userLocation = this.props.location.pathname;
    let pageData = observablePageStore.getPageByPathName(userLocation);
    console.log(userLocation);
    console.log(pageData);

    if (pageData) {
      switch (userLocation) {
        case "/":
          return <MainPage menuItems={observablePageStore.getMenu()}/>;
        case "/home/courses":
          return <MainPage menuItems={observablePageStore.getPageChildrenById(pageData.id)}/>;
        default:
          return <SecondaryPage pageData={pageData} />;
      }
    }
    return <Notfound />;
  }
}

export default withRouter(EntryPoint);
