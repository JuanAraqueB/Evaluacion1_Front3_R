import '../App.css';

const Card =(props) => {

    return(
    <>
    <div className='tarjeta'>

    <h2>Resumen</h2>
    <p>Nombre: {props.nombre}</p>
    <p>Libro favorito: {props.libro}</p>
    <p>Lees {props.cantidad} libros al año</p>

    </div>
    </>
    );
};

export default Card;

