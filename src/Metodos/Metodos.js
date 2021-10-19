import Saludo from "../components/Saludo/Saludo";
function Metodos(){
    const mostrarMensaje = () => {
        console.log("has pulsado el boton");
    };

    //Metodos con parametros

    const dobleNumero = (numero) => {
       var doble = numero * 2;
       console.log(doble)
    };

    ///Estilos directos
    var estilo = {
        color:"white", backgroundColor: "fuchsia"
    }

    ///Practica de padre a hijo con numeros. Este es el padre
    const dobleNumeroPadre = (numero) => {
        var doble = numero * 2;
        console.log("el doble es:  " + doble);

      }

    return(
        <div> 
            <h1 style={{color:"red"}}> Ejemplo de Metodos</h1>
            <button style= {estilo} onClick={ () => mostrarMensaje() }>Pincha</button>
            <button onClick={ () => dobleNumero(7) }>Numero Doble</button>
            <Saludo dobleNumeroPadre  ={dobleNumeroPadre(5)} />Numero Doble
        </div>
    )
    
}
export default Metodos;