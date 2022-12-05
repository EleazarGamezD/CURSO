import Button from './Button';

const arr = ['c1', 'c2', 'c3'];

const App = () => {
  const miVariable = false;
  if (miVariable) {
    return <p>Mi Variable es TRUE </p>;
  }
  return (
    <div>
      <h1 onClick={e => console.log ('Click', e)}>Hola Mundo</h1>
      {arr.map (el => <p key={el}>{el}</p>)} 
      <Button onClick={() => console.log ('clickeado')}>Enviar</Button>
    </div>
  );
};

export default App;
