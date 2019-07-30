import { observable, action } from "mobx";
import Api from "../utils/api";

class ObservablePageStore {
  @observable pages = [];
  @observable isPagesLoaded = false;

  @action load() {
    if (observablePageStore.isPagesLoaded === false) {
      function getPage(pageNumber) {
        console.log(pageNumber);
        return Api.pages
          .all(pageNumber)
          .then(myJson => {
            observablePageStore.pages = [
              ...observablePageStore.pages,
              ...myJson
              // .filter(({ parent }) => {
              //   return parent === 0;
              // })
              // .filter(({ status }) => {
              //   return status === "publish";
              // })
            ];
            getPage((pageNumber += 1));
          })
          .catch(e => {
            console.log(e);
            observablePageStore.isPagesLoaded = true;
          });
      }
      observablePageStore.pages = [];
      getPage(1);
    }
  }

  getMenu() {
    return observablePageStore.pages.filter(page => {
      return page.menu_order > 0;
    })
    .sort((a, b) => a.menu_order - b.menu_order);
  }
}

export const observablePageStore = new ObservablePageStore();
