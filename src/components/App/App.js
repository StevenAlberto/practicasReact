// import logo from './logo.svg';
import Saludo from '../Saludo/Saludo';
import './App.css';

function App() {
  //Para pasar metodos de padre a hijo ---> aqui el metodo y en el return 
  //la referencia al hijo mandandole el parametro creado aqui, pero con el metodo del hijo Saludo
  const metodoPadre = (description) => {
    console.log("Soy " + description);

  }
  return (
    <div className="App">
      {/* <Saludo metodoPadre={metodoPadre}/> */}
      <Saludo nombre="Alberto" edad="15" metodoPadre={metodoPadre}/>
    </div>
  );
}

export default App;
