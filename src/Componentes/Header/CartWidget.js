import React, {useContext} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {style} from './Navbar.styles';
import { Context } from '../../Context/CustomProvider';

export const CartWidget = () =>{
    const {qty} = useContext(Context)

    return(
        <>
        <p>{qty}</p>
        <button style={style.botonCart}><ShoppingCartIcon color='primary' fontSize="medium" style={style.logoCart} /></button>
        </>
    )
}
// export const cartLogo = <button style={style.botonCart}><ShoppingCartIcon color='primary' fontSize="medium" style={style.logoCart} /></button>