function Saludo(props){
    // var nombre = props.nombre;
    // var edad = props.edad;
    const {edad,nombre, numero,metodoPadre, dobleNumeroPadre} = props;

    return (
        <div>

            <h1> Hoy es Super Lunes</h1>
            <h2> de Octubre</h2>
            <h3>By {nombre} y tengo {edad}</h3>
            {/* <button onClick={() => metodo()}>LLamar al metodo Padre</button> */}
        {/* <button onClick={() => metodoPadre(nombre + " y tengo " + edad)}>LLamar al metodo Padre</button> */}
        <button onClick={() => dobleNumeroPadre(numero)}>Doblar numero</button>
        </div>
    );
}
export default Saludo;