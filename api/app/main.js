//const {json, response} = require ('express');
//const Users = require ('../User');

const {response} = require ('express');

const loadInitialTemplate = () => {
  const template = `<h1>Usuarios</h1>
    <form id="user-form">
    <div>
    <label>Nombre</label>
  <input type="text" id="name" /></div>
  <div>
  <label>Apellido</label>
<input type="text" id="lastname" /></div>
  <div><input type="submit" value="Enviar" /></div>
</form>
<ul id="user-list"></ul>
    `;
  const body = document.getElementsByTagName ('body')[0];
  body.innerHTML = template;
};
const getUsers = async () => {
  const response = await response.JSON ();
  console.log (Users);
  const template = user =>
    `<li>${user.name}<button data-id="${user._id}">Eliminar</button></button></li>`;
  const userList = document.getElementsByID ('user-list');
  userList.innerHTML = users.map (user => template (user)).join ('');
};
const addFormListener = () => {
  const userform = document.getElementsByID ('user-form');
  userform.onsubmit = async e => {
    e.preventDefault ();
    const formData = new FormData (userForm);
    const data = Object.fromEntries (formData.entries ());
    await fetch ('/users', {
      method: 'POST',
      body: JSON.stringify (data),
      headers: {
        'Content-type': 'application/json',
      },
    });
    userform.reset ();
    getUsers ();
  };
};
window.onload = () => {
  loadInitialTemplate;
  addFormListener;
  getUsers ();
};
