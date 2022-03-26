import { useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import ProductShow from './Components/ProductShow/ProductShow';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import MyModal from './Components/MyModal/MyModal';
function App() {
  const books=[
    {name:'Cryptography and Network Security: Principles and Practice', id:1, price: 90, stock:20, img: 'https://images-na.ssl-images-amazon.com/images/I/51mH5Z0iaIL._SX375_BO1,204,203,200_.jpg' },
    {name:'Wireless Networking: Understanding Internetworking Challenges ', id:2, price: 100, stock:20, img: 'https://images-na.ssl-images-amazon.com/images/I/415SYIvApnL._SX313_BO1,204,203,200_.jpg' },
    {name:'Probability, Statistics, and Random Processes For Electrical Engineering', id:3, price: 80, stock:20, img: 'https://images-na.ssl-images-amazon.com/images/I/51A1fk+VMsL._SX356_BO1,204,203,200_.jpg' },
    {name:'Fundamentals of Applied Electromagnetics', id:4, price: 70, stock:20, img: 'https://images-na.ssl-images-amazon.com/images/I/41KSoZJZ-LL._SX441_BO1,204,203,200_.jpg' },
    {name:'Introduction to Electrodynamics', id:5, price: 100, stock:20, img: 'https://images-na.ssl-images-amazon.com/images/I/31gltTn8TlL._SX404_BO1,204,203,200_.jpg' },
    {name:'Electricity and Magnetism', id:6, price: 30, stock:20, img: 'https://images-na.ssl-images-amazon.com/images/I/41ZR94YgVWL._SX383_BO1,204,203,200_.jpg' },
    {name:'Introduction to Quantum Mechanics', id:7, price: 110, stock:20, img: 'https://images-na.ssl-images-amazon.com/images/I/41K19BWo3gL._SX379_BO1,204,203,200_.jpg' },
    {name:'Introduction to Elementary Particles', id:8, price: 90, stock:20, img: 'https://images-na.ssl-images-amazon.com/images/I/414pkaL1OQL._SX346_BO1,204,203,200_.jpg' },
    {name:'Spacetime and Geometry: An Introduction to General Relativity', id:9, price: 60, stock:20, img: 'https://images-na.ssl-images-amazon.com/images/I/41iUQ7tEp3L._SX356_BO1,204,203,200_.jpg' },
    {name:'General Relativity', id:10, price: 40, stock:20, img: 'https://images-na.ssl-images-amazon.com/images/I/41anGESlSHL._SX346_BO1,204,203,200_.jpg' }
  ];
  const [cartArray,setCartArray]= useState([]);
  let[count,setCount]= useState(0);
  const addToCart=(id)=>{   
    for(const book of books){      
       if(book.id===id){
        setCount(++count);
        book.count= count;
         if(cartArray.length<=3){
          setCartArray([...cartArray,book]);
         }          
        }
      }
      }
  const random= () => {
    const min= 0;
    const max= cartArray.length;
    const randomNum= Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(cartArray);
    console.log(randomNum);  
                      
  }
  const clear=()=>{
    setCartArray([]);
  }
  return (
    <section>
      <h1>Amar Boi er Shop</h1>
      <div className="products-cart">
      <div className="product">
      {
        books.map(book=><ProductShow key={book.id} addToCart={addToCart} book={book}></ProductShow>)
      }
      </div>
      <div className="cart">
        <Cart cartArray= {cartArray} random={random()}></Cart>
        <div className="button">
        <MyModal random={cartArray[random]} cartArray={cartArray}></MyModal> 
        <button className='btn btn-primary' onClick={()=>clear()}>Clear</button>
        </div>
      </div>
      </div>
    </section>
  );
}

export default App;
