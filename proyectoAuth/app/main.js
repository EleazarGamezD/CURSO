const loadInitialTemplate = () => {
  const template = `
		<h1>Animales</h1>
		<form id="animal-form">
			<div>
				<label>Nombre</label>
				<input name="name" />
			</div>
			<div>
				<label>Tipo</label>
				<input name="type" />
			</div>
			<button type="submit">Enviar</button>
		</form>
		<ul id="animal-list"></ul>
	`;
  const body = document.getElementsByTagName ('body')[0];
  body.innerHTML = template;
};

const getAnimals = async () => {
  const response = await fetch ('/animals', {
    headers: {
      Authorization: localStorage.getItem ('jwt'),
    },
  });
  const animals = await response.json ();
  const template = animal => `
		<li>
			${animal.name} ${animal.type} <button data-id="${animal._id}">Eliminar</button>
		</li>
	`;

  const animalList = document.getElementById ('animal-list');
  animalList.innerHTML = animals.map (animal => template (animal)).join ('');
  animals.forEach (animal => {
    animalNode = document.querySelector (`[data-id="${animal._id}"]`);
    animalNode.onclick = async e => {
      await fetch (`/animals/${animal._id}`, {
        method: 'DELETE',
        headers: {
          Authorization: localStorage.getItem ('jwt'),
        },
      });
      animalNode.parentNode.remove ();
      alert ('Eliminado con éxito');
    };
  });
};

const addFormListener = () => {
  const animalForm = document.getElementById ('animal-form');
  animalForm.onsubmit = async e => {
    e.preventDefault ();
    const formData = new FormData (animalForm);
    const data = Object.fromEntries (formData.entries ());
    await fetch ('/animals', {
      method: 'POST',
      body: JSON.stringify (data),
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem ('jwt'),
      },
    });
    animalForm.reset ();
    getAnimals ();
  };
};
const checkLogin = () => localStorage.getItem ('jwt');

const animaIsPage = () => {
  loadInitialTemplate ();
  addFormListener ();
  getAnimals ();
};

//// seccion de codigo equivalente al pagina de Login /acceso / inicio de sesion

const loadRegisterTemplate = () => {
  const template = `
		<h1>Registro</h1>
		<form id="register-form">
			<div>
				<label>Correo</label>
				<input name="email" />
			</div>
			<div>
				<label>Contraseña</label>
				<input type="password" name="password" />
			</div>
			<button type="submit">Enviar</button>
		</form>
    <a href="#" id="login">Iniciar Sesión</a>
		<div id ="error"></div>
	`;
  const body = document.getElementsByTagName ('body')[0];
  body.innerHTML = template;
};

//// Fin de sección de código equivalente al pagina de Login /acceso / inicio de sesion
//// Inicio de seccion de codigo equivalente a la funcion de Registro "Crear" de usuario
const addRegisterListener = () => {
  const registerForm = document.getElementById ('register-form');
  registerForm.onsubmit = async e => {
    e.preventDefault ();
    const registerData = new FormData (registerForm);
    const data = Object.fromEntries (registerData.entries ());
    const response = await fetch ('/register', {
      method: 'POST',
      body: JSON.stringify (data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseData = await response.text ();
    if (response.status >= 300) {
      const errorNode = document.getElementById ('error');
      errorNode.innerHTML = responseData;
    } else {
      localStorage.setItem ('jwt', `Bearer ${responseData}`);
      animaIsPage ();
    }
  };
};

const gotoLoginListener = () => {};

/// llamado a la pagina de registro
const registerPage = () => {
  loadRegisterTemplate ();
  addRegisterListener ();
  gotoLoginListener ();
};

/// llamando a la pagina de login / acceso
const loginPage = () => {
  loadLoginTemplate ();
  addLoginListener ();
  gotoRegisterListener ();
};
//// seccion de codigo para cargar pagina de Registro "crear" usuario
const loadLoginTemplate = () => {
  const template = `
		<h1>Login</h1>
		<form id="login-form">
			<div>
				<label>Correo</label>
				<input name="email" />
			</div>
			<div>
				<label>Contraseña</label>
				<input type="password" name="password" />
			</div>
			<button type="submit">Enviar</button>
		</form>
    <a href="#" id="register">Registrarse</a>
		<div id ="error"></div>
	`;
  const body = document.getElementsByTagName ('body')[0];
  body.innerHTML = template;
};
const gotoRegisterListener = () => {
  const gotoRegister = document.getElementById ('register');
  gotoRegister.onclick = e => {
    e.preventDefault ();
    registerPage ();
  };
};

const addLoginListener = () => {
  const loginForm = document.getElementById ('login-form');
  loginForm.onsubmit = async e => {
    e.preventDefault ();
    const formData = new FormData (loginForm);
    const data = Object.fromEntries (formData.entries ());
    const response = await fetch ('/login', {
      method: 'POST',
      body: JSON.stringify (data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseData = await response.text ();
    if (response.status >= 300) {
      const errorNode = document.getElementById ('error');
      errorNode.innerHTML = responseData;
    } else {
      localStorage.setItem ('jwt', `Bearer ${responseData}`);
      animaIsPage ();
    }
  };
};

window.onload = () => {
  const isLoggedIn = checkLogin ();
  if (isLoggedIn) {
    animaIsPage ();
  } else {
    loginPage ();
  }
};
