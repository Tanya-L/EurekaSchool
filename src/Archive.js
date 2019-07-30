import React, { Component } from "react";
import "./assets/css/App.css";
import { observablePostStore } from "./dataStors/dataStorePost";
import { observer } from "mobx-react";

let post = '';
// let data = "data_gmt";
// let id = "ID";
// let arr = [];

// function PostList(props) {
//   let posts = props.posts;
//   console.log(props);
//   let listItem = posts.map((post) => <li key={post.title}> {post.title.rendered} </li>)
//   return (
//     <ul> {listItem} </ul>
//   )
// }

@observer
class Archive extends Component {
  componentWillMount() {
    observablePostStore.load();
  }
  render() {
    // let component = this;

    // if (post === "publish") {
    //   fetch("http://eurika.se/wp-json/wp/v2/posts")
    //     .then(function(response) {
    //       return response.json();
    //     })
    //     .then(function(myJson) {
    //       console.log(post);

    //       arr = myJson.filter(function(element) {
    //         if (element.status==="publish") {
    //           return element
    //         }
    //       });
    //       post="done";
    //       component.forceUpdate();
    //     })
    //     .catch(function(error) {
    //       post = "error";

    //       console.log(error);
    //     });
    // }

    return (
      <div className="App">
        <header className="App-header">
          {observablePostStore.posts.length}
        </header>
        <content className="About-body">
          {observablePostStore.posts.map(({ title, link }) => (
            <div key={post.id}>
              <h4>
                <a href={link}> {title.rendered} </a>
              </h4>
            </div>
          ))}
        </content>
      </div>
    );
  }
}

export default Archive;
