import React from 'react';
import CartShow from '../CartShow/CartShow';

const Cart = ({cartArray,random}) => {
    // console.log(cartArray);
    return (
        <div>
            {
                cartArray.map(book=> <CartShow key={book.id} book={book}></CartShow>)
            }
            
        </div>
    );
};

export default Cart;