import React from "react";
import Notfound from "./NotFound";
import { withRouter } from "react-router-dom";
import { observablePageStore } from "./dataStors/dataStorePage";
import { observer } from "mobx-react";

@observer
class EntryPoint extends React.Component {
  render() {
    const userLocation = this.props.location.pathname;
    let pageData = observablePageStore.getPageByPathName(userLocation);

    if (pageData) {
      const content = {
         __html: pageData.content.rendered
      };
      return (
        <div>
          {" "}
          {pageData.title.rendered}
          <h1>{pageData.title.rendered}</h1>
          <div dangerouslySetInnerHTML = {content}></div>
        </div>
      );
    }
    return <Notfound />;
  }
}

export default withRouter(EntryPoint);
