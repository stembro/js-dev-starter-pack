import 'whatwg-fetch';

export function getExamples() {
  return get('examples');
}

function get(url) {
  return fetch(url).then(
    (response) => {
      return response.json();
    },
    (reason) => {
      console.log(reason);
    });
}