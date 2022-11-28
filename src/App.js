import React from "react";
import Navbar from "./Componentes/Header/Navbar";
import ItemListContainer from "./Componentes/ItemListContainer";
import ItemDetailContainer from "./Componentes/Containers/ItemDetailContainer";
import {Cart} from "./Componentes/Containers/CartView/Cart"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomProvider } from "./Context/CustomProvider";

const App = () => {

  const saludo = "Bienvenidos a la tienda";

  return (
    <CustomProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={saludo}/>}/>
        <Route path="/categoria/:id" element={<ItemListContainer greeting={saludo}/>}/>
        <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<ItemListContainer greeting={saludo}/>}/>
      </Routes>
    </BrowserRouter>
    </CustomProvider>
  )
}

export default App
