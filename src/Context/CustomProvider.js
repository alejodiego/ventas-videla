//import { Card } from '@mui/material';
import React, { createContext, useState } from 'react';
import { useEffect } from 'react';

export const Context = createContext();

export const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState(5);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setQty(cart.reduce((total, item) => total + item.cantidad, 0))
    setTotal(cart.reduce((total, item) => total + (item.cantidad * item.price), 0))
  }, [cart])

  const addItem = (item, cantidad) => {
    if (IsInCart(item.id)) {
      const modificado = cart.map((producto) => {
        if (producto.id === item.id) {
          producto.cantidad += cantidad;
        }
        return producto;
      });
      setCart(modificado);
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
    setQty(qty + cantidad);
    setTotal(total + (item.price * cantidad));
  };

  const deleteItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const IsInCart = (id) => cart.some(item => item.id === id);

  const clear = () => {
    setCart([]);
    setQty(0);
    setTotal(0);
  };

  return (
    <Context.Provider value={{ cart, qty, total, addItem, deleteItem, clear, IsInCart }}>
      {children}
    </Context.Provider>
  )
}

