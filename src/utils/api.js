import fetch from "unfetch";

function returnProperResponseBody(response) {
  if (/text\/html/.test(response.headers.get("Content-Type"))) {
    return Promise.resolve(response.text());
  } else if (/stream/.test(response.headers.get("Content-Type"))) {
    return Promise.resolve(response.text());
  } else if (/javascript/.test(response.headers.get("Content-Type"))) {
    return Promise.resolve(response.text());
  } else {
    return Promise.resolve(response.json());
  }
}

const api_base_path = 'https://eurika.se/wp-json/wp/';
export function call({ method, url, data, params }) {
  let headers = {};

  return fetch(`${api_base_path}${url}`, {
    method: method.toLowerCase(),
    baseURL: api_base_path,
    body: JSON.stringify(data),
    headers: headers,
    params: params ? params : {},
    credentials: "same-origin"
  })
    .then(response => {
      if (response.ok) {
        return returnProperResponseBody(response);
      } else {
        return returnProperResponseBody(response).then(response =>
          Promise.reject(response)
        );
      }
    })
    .catch(function(error) {
      console.log(error);
    });
}

const Api = {
  pages: {
    //   
    // all: () => {
    //     return call({
    //       method: "GET",
    //       url: `v2/pages/`
    //     });
    //   },
    all: (id) => {
      return call({
        method: "GET",
        url: `v2/pages/?page=${id}`
      });
    // },
    // find: (id) => {
    //   return call({
    //     method: "GET",
    //     url: `v2/pages/${id}`
    //   });
    }
  },

  posts: {
    all: (id) => {
      return call({
        method: "GET",
        url: `v2/posts/?page=${id}`
      });
    }
  }
};

export default Api;
