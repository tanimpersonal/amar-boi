import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cartArray= props.cartArray;
    console.log(cartArray);
    return (
        <div>
            {
                cartArray.map(book=>{
                    return <div className='cart-div'>
                        <div className="image">
                        <img src={book.img} alt="" />
                        </div>
                        <div className="price">
                            <p>${book.price}</p>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default Cart;