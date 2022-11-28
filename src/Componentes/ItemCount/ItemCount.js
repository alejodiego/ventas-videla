import React, {useState} from 'react'

const estilos = {
  contador:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  btn:{
    width:'2vw',  
  },
  numero:{
           
  }

}


const ItemCount = ({stock,initial,onAdd})=>{
    const[count,setCount]=useState(initial);

    const subtract = () =>{
        if(count>1){
            setCount(count-1);
        }
    };
    const add = () => {
        if(count<stock){
            setCount(count+1);
        }
    }


  return (
    <div>
    <div style={estilos.contador}>
      <div><button style={estilos.btn} onClick={subtract}>-</button></div>
      <div><h2 style={estilos.numero}>{count}</h2></div>
      <div><button style={estilos.btn} onClick={add}>+</button></div>
    </div>
    <div>
      <button disabled={stock === 0} onClick={()=>onAdd(count)}>
        <span>{stock === 0 ? 'NO tenemos stock' : 'Agrega al carrito'}</span>
      </button>
    </div>
    </div>
  )
}

export default ItemCount;
