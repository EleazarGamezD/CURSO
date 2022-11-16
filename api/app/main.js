const loadInitialTemplate = () => {
  const template = `
  <h1>Usuarios</h1>
    <form id="user-form">
    <div>
    <label>Nombre</label>
  <input name ="name"type="text" id="name" /></div>
  <div>
  <label>Apellido</label>
<input name="lastname" type="text" id="lastname" /></div>
  <div><input type="submit" value="Enviar" /></div>
</form>
<ul id="user-list"></ul>
    `;
  const body = document.getElementsByTagName ('body')[0];
  body.innerHTML = template;
};
const getUsers = async () => {
  const response = await fetch ('/users');
  const users = await response.json ();
  console.log (users);
  const template = user =>
    `<li>${user.name} ${user.lastname}<button data-id="${user._id}">Eliminar</button></li>`;
  const userList = document.getElementById ('user-list');
  userList.innerHTML = users.map (user => template (user)).join ('');
  users.forEach (user => {
    const userNode = document.querySelector (`[data-id="${user._id}"]`);
    userNode.onclick = async e => {
      await fetch (`/users/${user._id}`, {method: 'DELETE'});
      userNode.parentNode.remove ();
    };
  });
};
const addFormListener = () => {
  const userForm = document.getElementById ('user-form');
  userForm.onsubmit = async e => {
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
    userForm.reset ();
    getUsers ();
  };
};
window.onload = () => {
  loadInitialTemplate ();
  addFormListener ();
  getUsers ();
};
