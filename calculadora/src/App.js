import './App.css';
import icono from './imagenes/icono.png'
import Boton from './componentes/Boton'
import './style/Boton.css'
import './style/Pantalla.css'
import Pantalla from './componentes/Pantalla';

function App() {
  return (
    <div className="App">
      <div className='anime-logo-contenedor'>
        <img
          src={icono}
          className='anime-logo'
          alt='Logo de anime'
        />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla/>
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
        <div className='fila'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className='fila'>
          <Boton>=</Boton>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>/</Boton>
        </div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
