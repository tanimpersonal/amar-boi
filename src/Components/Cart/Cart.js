import React from 'react';
import './Cart.css';
import CartShow from '../CartShow/CartShow';
const Cart = (props) => {
    const cartArray= props.cartArray;
    console.log(cartArray);
    return (
        <div>
            {
                cartArray.map(book=> <CartShow key={book.id} book={book}></CartShow>)
            }
        </div>
    );
};

export default Cart;