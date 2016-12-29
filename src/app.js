import {msg} from './modules/example';
import {getUsers, deleteUser} from './api/exampleApi';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#exampleMsg').innerHTML = msg;

  let usersContent = '';
  getUsers().then((users) => {
    users.forEach((user) => {
      usersContent += `<tr>
        <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}
      </tr>`;
    });

    document.querySelector('#exampleData').innerHTML = usersContent;

    const deleteLinks = document.querySelectorAll('.deleteUser');

    Array.from(deleteLinks, (link) => {
      link.onclick = function(event) {
        const element = event.target;
        event.preventDefault();
        deleteUser(element.attributes['data-id'].value);
        const row = element.parentNode.parentNode;
        row.parentNode.removeChild(row);
      }
    });
  });
});
