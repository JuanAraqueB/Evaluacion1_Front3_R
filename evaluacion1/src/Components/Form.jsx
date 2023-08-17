import { useState } from "react";
import Card from "./Card";
import '../App.css';

const Form =() => {
    const[nombre, setNombre]=useState('')
    const[cantidad, setCantidad]=useState(0)
    const[libro, setLibro]=useState('')
    const[mensajeError, setMensajeError]=useState('')
    const[mostrarTarjeta, setMosatrarTarjeta]=useState(false)


    const handleSubmit = (e) =>{
        e.preventDefault()

        if (nombre.length < 3) {

            console.log('error')
            setMensajeError('por favor chequea que la información sea correcta')
            setMosatrarTarjeta(false)
   
        }else if (nombre.startsWith(' ')) {

            console.log('error')
            setMensajeError('por favor chequea que la información sea correcta')
            setMosatrarTarjeta(false)
            
        }else if (cantidad < 1) {
            console.log('error')
            setMensajeError('por favor chequea que la información sea correcta')
            setMosatrarTarjeta(false)

            
        }
        else if(libro.length < 6){

            console.log('error')
            setMensajeError('por favor chequea que la información sea correcta')
            setMosatrarTarjeta(false)

        }else {

            console.log('correcto')
            setMensajeError('')
            setMosatrarTarjeta(true)
        }
        
    }


    return(
    <>
    <h2>Formulario</h2>
    <form onSubmit={handleSubmit}>

        <label htmlFor='name'>Nombre  
        <input  type='text' name='name' value={nombre} onChange={(e)=>setNombre(e.target.value)}></input>
        </label>

        <br />

        <label htmlFor='cantidad'>Cuantos libros lees al año ?  
        <input  type='number' name='cantidad' value={cantidad} onChange={(e)=>setCantidad(e.target.value)}></input>
        </label>

        <br />

        <label htmlFor='libro'>Cual es tu libro favorito
        <input  type='text' name='libro' value={libro} onChange={(e)=>setLibro(e.target.value)}></input>
        </label>

        <br />

        {mensajeError && <p className="error">{mensajeError}</p>}
        <button type="submit">enviar</button>

    </form>

    
    {mostrarTarjeta && (<Card nombre={nombre} libro={libro} cantidad={cantidad}/>)}
    
    </>
    );
};

export default Form;
