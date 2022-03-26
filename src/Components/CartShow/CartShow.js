import { TrashIcon } from '@heroicons/react/solid';
import React from 'react';
import './CartShow.css';
const CartShow = ({book,random}) => {
    return (
                    <div className='cart-div'>
                        <div className="image">
                        <img src={book.img} alt="" />
                        </div>
                        <div className="price">
                            <p className='price-text'>${book.price}</p>
                        </div>
                        <div className="delete">
                            <TrashIcon className='delete-button'></TrashIcon>
                        </div>
                    </div>
    );
};

export default CartShow;