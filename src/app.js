import {msg} from './modules/example';
import {getExamples} from './api/exampleApi';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#exampleMsg').innerHTML = msg;

  let examplesHtml = '';
  getExamples().then((result) => {
    result.forEach((example) => {
      examplesHtml += `<tr>
        <td><a href="#" data-id="${example.id}" class="deleteItem">Delete</a></td>
        <td>${example.id}</td>
        <td>${example.name}</td>
      </tr>`;
    });

    document.querySelector('#exampleData').innerHTML = examplesHtml;
  });
});
