const actualizaSalvardato = salvardato => {
  const salvardatoStrings = JSON.stringify (salvardato);
  localStorage.setItem ('salvardato', salvardatoStrings);
};

const todos = JSON.parse (localStorage.getItem ('todos')) || [];
const render = () => {
  const todolist = document.getElementById ('todo-list');
  const todosTemplate = todos.map (t => '<li>' + t + '</li>');
  todolist.innerHTML = todosTemplate.join ('');
  console.log (todosTemplate);
  const elementos = document.querySelectorAll ('#todo-list li');
  elementos.forEach ((elemento, i) => {
    elemento.addEventListener ('click', () => {
      elemento.parentNode.removeChild (elemento);
      todos.splice (i, 1);
      actualizaSalvardato (salvardato);
      render ();
    });
  });
};
Window.onload = () => {
  render ();
  const form = document.getElementById ('listado');
  form.onsubmit = e => {
    e.preventDefault ();
    const salvar = document.getElementById ('texto');
    const salvardato = salvar.value;
    salvar.value = ' ';
    console.log (salvardato);
    todos.push (salvardato);
    actualizaSalvardato (salvardato);
  };
};
