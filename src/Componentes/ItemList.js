//import React from 'react'
import { estilosItems } from "./ItemList.styles";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";

export const ItemList = ({ products }) => {
    return (
        <div style={estilosItems.superContainer}>
        {products.map((products) => {
            return (
                <Card key={products.id} style={estilosItems.card} sx={{ maxWidth: 250 }}>
                    {/* CardMedia component="img" objectFit="fill"  height="130" image={products.image} alt="" /> */}
                    <img style={estilosItems.imagen} src={products.image} alt="" />
                    <CardContent style={estilosItems.textoCard}>
                        <Typography style={estilosItems.i1} gutterBottom variant="h6" component="div" textAlign="center">
                            {products.title}
                        </Typography>
                        <Typography style={estilosItems.i2} variant="body2" color="text.primary">
                            {`${"$ "+ products.price}`}
                        </Typography>
                    </CardContent>
                    <CardActions style={estilosItems.portaBoton}>
                        <Link to={'/producto/' + products.id}>
                        <Button  size="medium">Detalle</Button>
                        </Link>
                    </CardActions>
                </Card>
            )          
        } 
               
        )}
    </div>
    )
}