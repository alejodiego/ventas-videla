import { estilosItems } from "../../ItemList.styles";
import * as React from 'react';
import {useState, useContext} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemCount from "./../../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import {Context} from '../../../Context/CustomProvider';

export const ItemDetail = ({ products }) => {
  const [showItemCount, setShowItemCount] = useState(true);
  const {addItem} = useContext(Context);

  const onAdd = (count) =>{
    addItem(products,count);
    setShowItemCount(false);
  }

  return (
    <>
      <Card style={estilosItems.card2} sx={{ maxWidth: 750 }}>
        <img style={estilosItems.imagenDetail} src={products.image} alt="" />
        <CardContent style={estilosItems.detailItem}>
          <Typography gutterBottom variant="h6" component="div" textAlign="center">
            {products.title}
          </Typography>
          <Typography variant="body2" color="text.primary" textAlign="center">
            {products.description}
          </Typography>
          <Typography variant="body2" color="text.primary" textAlign="center">
            {`${"$ " + products.price}`}
          </Typography>
        <CardActions style={estilosItems.portaBoton}>
          {showItemCount ? (<ItemCount stock={10} initial={1} onAdd={onAdd}/>):(<Link to ={'/cart'}><button>Finalizar compra</button></Link>)}
        </CardActions>
        </CardContent>
      </Card>
    </>
  )
}