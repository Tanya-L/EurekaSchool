import React, { Component } from "react";
import "./assets/css/App.css";

let status = "publish";

class News extends Component {
  render() {
    let component = this;

    if (status === "publish") {
      fetch("http://eurika.se/wp-json/wp/v2/posts")
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          console.log(status);

          status = myJson[0].title.rendered;
          component.forceUpdate();
        })
        .catch(function(error) {
          status = "error";

          console.log(error);
        });

    }
    return (
      <div className="App">
        <header className="App-header"> {status}</header>
        <content className="About-body">Body App Tanya</content>
      </div>
    );
  }
}

export default News;
