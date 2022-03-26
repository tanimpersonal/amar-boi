import React from 'react';
import './ProductShow.css';
import {ShoppingCartIcon} from '@heroicons/react/solid'
const ProductShow = ({addToCart,book}) => {
    const {name,img,price,id}=book;
    return (
        <div className='all-product'>
           <div className="image">
            <img src={img} alt="" />
           </div>
           <div className="text">
               <p>{name.slice(0,15)+'...'}</p>
               <p>Price: ${price}</p>
               <div className="button">
               <button className='cart-button' onClick={()=>addToCart(id)}>Add To Cart</button>
              <ShoppingCartIcon className='icon'></ShoppingCartIcon>
               </div>
           </div>
        </div>
    );
};

export default ProductShow;