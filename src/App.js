import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const people = {
    name: "Dr. Mahfuzur Rahman",
    job: "singer"
  }
  const person = {
    name: "Eva Rahman",
    job: "kokil konthi"
  }
  var style ={
    color:"red",
    backgroundColor:"yellow"
  }

  const products = [
    {name:"photoshop", price:"$299"},
    {name:"illustrator", price:"$390"},
    {name: "Pdf reader", price: "$123"},
    {name: "porimonni", price:"$100"}
  ]

  const girlfriends = [
    {name: "Shammi", age: 22},
    {name: "Ruhi", age:19},
    {name: "Swarna", age:20}
  ]

  const footballer =["Messi","Ronaldo","Neymar"]
  const position =["Right", "striker","left"]
  const nayok = ["joshim","manna","Riaz"]
  const nayika =["shabana","tisha","moushumi","purnima","odhora"]

  const productNames = products.map(product=>product.name)
  console.log(productNames)

  const footballerNames = footballer.map(name=>name)
  console.log(footballerNames)

  return (
    <div className="App">
      <header className="App-header">
      <ul>
        {
          nayika.map(nayika=> <li>{nayika}</li>)
        }
        {
          footballer.map(name=> <li>{name}</li>)
        }
        {
          products.map(product=> <li>{product.name}</li>)
        }
      </ul>

      <Users></Users>

      <Counter></Counter>
      <Products name={products[0].name} price={products[0].price}></Products>
      <Products name={products[1].name} price= {products[1].price}></Products>
      <Products name={products[2].name} price= {products[2].price}></Products>
      <FullProducts product={products[0]}></FullProducts>

      <Footballer name={footballer[0]} position={position[0]} ></Footballer>
      <Footballer name={footballer[1]} position= {position[1]}></Footballer>
      <Footballer name= {footballer[2]} position = {position[2]}></Footballer>
      <Person name= {nayok[0]} nayika = {nayika[0]}></Person>
      <Person name= {nayok[1]} nayika = {nayika[1]}></Person>
      <Person name = {nayok[2]} nayika = {nayika[2]}></Person>
      <p>I am a react person</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <h1 style={style}>React Heading: {people.name +" "+people.job}</h1>
        <h3 style={{backgroundColor:"yellow", color:"red"}}>Second Best singer in the world {person.name + " " + person.job}</h3>
        <p>My First React</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


function Users(){
  const [user, setUser] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setUser(data))
  },[])
  return (
    <div>
      <h2>Display User : {user.length}</h2>
      <ul>
        {
          user.map(user=> <li>{user.email}</li>)
        }
      </ul>

    </div>
  )
}


function Counter(){
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick = {()=> setCount(count-1)}>Decrease</button>
      <button onClick = {()=> setCount(count+1)}>Increase</button>
    </div>
  )
}

function FullProducts(props){
  var productStyle = {
    border: "1px solid gray",
    backgroundColor: "lightgray",
    borderRadius: "10px",
    float: "left",
    height: "200px",
    width: "200px",
    margin: "10px"
  }

  const {name, price} =props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h2>{price}</h2>
    </div>
  )
}

function Products(props){
  var productStyle = {
    border: "1px solid gray",
    backgroundColor: "lightgray",
    borderRadius: "10px",
    float: "left",
    height: "200px",
    width: "200px",
    margin: "10px"
  }
  return (
    <div style={productStyle}>
      <h3>{props.name}</h3>
      <h2>{props.price}</h2>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  var PersonStyle = {
    color: "red",
    backgroundColor: "yellow",
    border: "2px solid red",
    margin: "10px",
    width: "400px"
  }
  return (
    <div style={PersonStyle}>
      <h1>Name of hero: {props.name}</h1>
      <h3>Name of heroin: {props.nayika}</h3>
    </div>
  );
}

function Footballer(props){
  return (
    <div style= {{border: "2px dashed yellow", width:"400px"}}>
      <h2>Name of footballer: {props.name}</h2>
      <h3>Position of the footballer: {props.position}</h3>
    </div>
  );
}

export default App;
