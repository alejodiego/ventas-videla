import React, { useContext } from 'react';
import { Context } from '../../../Context/CustomProvider';
import "./Cart.css";
import { estilosCart } from './Cart.styles';
import { Link } from 'react-router-dom';
import { db } from "../../../firebase/firebase";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore"

export const Cart = ({ estilo, color }) => {
  const { cart, total, clear } = useContext(Context);

  const comprador = {
    nombre: 'Diego',
    apellido: 'Videla',
    email: 'videladiegoalejo@gmail.com'
  };

  const finalizarCompra = () => {
    const ventasCollection = collection(db, "ventas");
    addDoc(ventasCollection, {
      comprador,
      items: cart,
      total: total,
      date: serverTimestamp()
    })
      .then(result => {
        console.log(result.id);
      })
      .catch(e => {
        console.log('todo mal');
        console.log(e);
      });
      console.log(comprador.nombre,comprador.apellido,comprador.email);
    clear();
  }


  const handleInputChangeNombre = (event) =>{
    comprador.nombre = event.target.value;
    console.log(comprador.nombre);
  }
  
  const handleInputChangeApellido = (event) =>{
    comprador.apellido = event.target.value;
    console.log(comprador.apellido);
  }
  
  const handleInputChangeEmail = (event) =>{
    comprador.email = event.target.value;
    console.log(comprador.email);
  }


  return (
    <>
      {cart.length === 0 ? (
        <>
          <h1 className={estilo ? "red" : "green"}>
            No agregaste productos aun, puedes ir <Link to="/">ACA</Link>
          </h1>
          <h2 className={`tamanio ${color || ''}`}>Gracias por tu visita</h2>
        </>
      ) : (
        <>
        <form action="">
          <label htmlFor="">Nombre</label>
          <input onChange={handleInputChangeNombre} type="text" />
          <label htmlFor="">Apellido</label>
          <input onChange={handleInputChangeApellido} type="text" />
          <label htmlFor="">Email</label>
          <input onChange={handleInputChangeEmail} type="email" name="" id="" />
        </form>
          {cart.map((producto) => (
            <>
              <div style={estilosCart.divisorProducto} key={producto.id}>
                <p >{producto.title}</p>
                <p style={estilosCart.p2}>{producto.price}</p>
              </div>
            </>
          ))}
        </>
      )}
      <button onClick={finalizarCompra}>finalizar compra</button>
    </>
  );
};