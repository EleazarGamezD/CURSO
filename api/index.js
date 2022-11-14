const mongoose = require ('mongoose');

mongoose.connect (
  'mongodb+srv://sa:21121733@cluster0.gschvgu.mongodb.net/myapp?retryWrites=true&w=majority'
);

const User = mongoose.model ('User', {
  username: String,
  edad: Number,
});
const crear = async () => {
  const user = new User ({username: 'cochinito triste ', edad: 25});
  const savedUser = await user.save ();
  console.log (savedUser);
};
//crear ();

const buscarTodo = async () => {
  const users = await User.find ();
  console.log (users);
};
//buscarTodo ();

const buscar = async () => {
  const user = await User.find ({username: 'cochinito feliz '});
  console.log (user);
};
//buscar ();

const buscarUno = async () => {
  const user = await User.findOne ({username: 'cochinito feliz '});
  console.log (user);
};
//buscarUno ();

const actualizar = async () => {
  const user = await User.findOne ({username: 'cochinito feliz '});
  console.log (user);
  user.edad = 30;
  await user.save ();
  console.log (user);
};
//actualizar ();

const eliminar = async () => {
  const user = await User.findOne ({username: 'cochinito feliz '});
  console.log (user);
  if (user) {
    await user.remove ();
  }
};
eliminar ();
