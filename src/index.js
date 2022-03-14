import './style.css';
import numeral from 'numeral';
import {getUsers, deleteUser} from './api/usersApi';

getUsers().then(result => {
  let userBody = '';

  result.forEach(user => {
    const saved = numeral(user.saved).format('$0,000.00');

    userBody += `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      <td>${saved}</td>
    </tr>`;
  });

  global.document.getElementById('users').innerHTML = userBody;

  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  Array.from(deleteLinks, link => {
    link.onclick = function (e) {
      const element = e.target;
      //Prevent default behavior of link; change to URL
      e.preventDefault();
      //Delete user from the db.json file and the UI (table)
      //using the deleteUser function from the api/usersApi.js file
      deleteUser(element.attributes['data-id'].value);
      //Delte the row from the table
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
});
