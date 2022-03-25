import React from 'react';
import './ProductShow.css';
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
               <button onClick={()=>addToCart(img,price,id)}>Add To Cart</button>
           </div>
        </div>
    );
};

export default ProductShow;