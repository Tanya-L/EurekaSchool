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
              ...myJson.map(page => {
                page.link = page.link.split("https://eurika.se")[1];
                return page;
              })

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
    return observablePageStore.pages
      .filter(page => {
        return page.menu_order > 0;
      })
      .sort((a, b) => a.menu_order - b.menu_order);
  }

  getPageByPathName(pathname) {
    const result = observablePageStore.pages.filter(page => {
      return page.link === pathname;
    });
    return result.length ? result[0] : null;
  }

  getPageChildrenById(id) {
    return observablePageStore.pages.filter(page => 
      page.parent == id);
  }
}

export const observablePageStore = new ObservablePageStore();
