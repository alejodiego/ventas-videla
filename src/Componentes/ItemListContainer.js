import React from 'react'
import { useState, useEffect } from 'react';
import { ItemList } from "./ItemList";
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from 'react-router-dom';
import {getDocs, collection, query, where} from "firebase/firestore";
import {db} from '../firebase/firebase';


const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const {id} =  useParams();
  
  
  const productCollection = collection(db,'productos');
  const q = query(productCollection, where('category', '==', "jewelery"));
  // var set="";
  // !id ? set=q : set=productCollection

  // !id ? q : productCollection

  useEffect(() =>{
    getDocs(!id ? q : productCollection)
    .then((result)=>{
      const listProducts = result.docs.map(item => {
        return {
          ...item.data(),
          id:item.id,
        };
      });
      setProducts(listProducts);
    })
    .catch((error) =>{
      console.log(error);
    })
    .finally(setLoading(false));

  }, [id]);
  return (
    <>
      <h3>{greeting}</h3>
      {
        <>
          {loading ? <ClipLoader color="#36d7b7" /> : <ItemList products={products} />}
        </>
      }
    </>
  )
}

export default ItemListContainer;