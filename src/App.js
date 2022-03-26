import { useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import ProductShow from './Components/ProductShow/ProductShow';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <Cart cartArray= {cartArray}></Cart>
        <div className="button">
        <MyModal cartArray={cartArray}></MyModal> 
        <button className='btn btn-primary ms-2' onClick={()=>clear()} disabled={cartArray.length<4}>Choose Again</button>
        </div>
      </div>
      </div>
      <div className="question">
        <div className="first">
        <div className="props">
          <h1>Props: </h1>
          <p>Props are used to pass data to components</p>
          <p>Props are immutable</p>
          <p>Props can make the component reusable</p>
        </div>
        <div className="state">
          <h1>State: </h1>
          <p>States are local.</p>
          <p>States are mutable</p>
          <p>States can not make the component reusable</p>
        </div>
        </div>
        <div className="second">
          <div className="third">
            <h1>UseState</h1>
            <p>useState has 2 things. One is initial state and the other is a function which does the work of changing the initial state. This function return the changed value of initial state.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
