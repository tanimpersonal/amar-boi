import { TrashIcon } from '@heroicons/react/solid';
import React from 'react';

const CartShow = ({book}) => {
    return (
        <div className='cart-div'>
                        <div className="image">
                        <img src={book.img} alt="" />
                        </div>
                        <div className="price">
                            <p>${book.price}</p>
                        </div>
                        <div className="delete">
                            <TrashIcon className='delete-button'></TrashIcon>
                        </div>
                    </div>
    );
};

export default CartShow;