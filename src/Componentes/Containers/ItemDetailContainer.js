import React from 'react'
import { useState, useEffect } from 'react';
import { ItemDetail } from "./ItemDetail/ItemDetail";
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from 'react-router-dom';
import {getDoc, collection, doc} from "firebase/firestore";
import {db} from '../../firebase/firebase';


const ItemDetailContainer = ({ greeting }) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const {id} =  useParams();

  useEffect(() => {
    const productCollection = collection(db, "productos");
    const refDoc = doc(productCollection,id);

    getDoc(refDoc)
    .then(result => {
      setProducts({
        id: result.id, ...result.data(),
      });
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
          {loading ? <ClipLoader color="#36d7b7" /> : <ItemDetail products={products} />}
        </>
      }
    </>
  )
}

export default ItemDetailContainer