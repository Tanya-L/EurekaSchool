import { observable, action } from "mobx";
import Api from "../utils/api";

class ObservablePostStore {
  @observable posts = [];
  @observable isPostsLoaded = false;

  @action load() {
    if (!observablePostStore.isPostsLoaded) {
      function getPost(postNumber) {
        console.log(postNumber);
        return Api.posts
          .all(postNumber)
          .then(myJson => {
            observablePostStore.posts = [
              ...observablePostStore.posts,
              ...myJson
            ];
            getPost((postNumber += 1));
          })
          .catch(e => console.log(e));
      }
      observablePostStore.posts = [];
      getPost(1);

      // Api.posts
      // .all()
      // .then(function(myJson) {
      //   observablePostStore.isPostsLoaded = true;
      //   observablePostStore.posts = myJson;
      // })
      // .catch(function(error) {
      //   console.log(error);
      // });
    }
  }
}

export const observablePostStore = new ObservablePostStore();
