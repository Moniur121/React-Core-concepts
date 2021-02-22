import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const students={
    name:"Moniur Rahman Shimul",
    id: 12
  }
  const names =["Moniur Rahman Shimul","Ashraful Alom Mijan","Md Yeasin Ahmed","Muhammod Kuddus Boyati"]
  const Qualification=["Students","Software Engineer","NASA"]
  // const adobeTutorialName=['PhotoShop','Illustrator','Premier-Pro']
  const products=[
    {name:'PhotoShop',price:'$1200'},
    {name:"Illustrator", price:'$344'},
    {name:'Premiur-Pro', price:'$788'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Users></Users>
        <Counter></Counter>
       <Products product={products[0]}></Products>
       <Products product={products[1]}></Products>
         <h2>I am a React Person</h2>
         <Person name={names[0]} Qualification={Qualification[2]}></Person>
         <Person name="Rayhan Mojumdar"></Person>
         <ul>
           {
             names.map(name=><li>{name}</li>)
           }
           {
             products.map(product=><Products product={product}></Products>)
           }
         </ul>
      </header>
    </div>
  );
}
function Users(){
  const[users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=> setUsers(data))
  },[])
  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
        {
          users.map(user=><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Counter(){
  const[count,setCount]=useState(0);
  const increaseHandler=()=> setCount(count+1)
  return(
    <div>
      <h2>Count:{count}</h2>
      <button onClick={()=> setCount(count+1)}>Increase</button>
      <button onClick={()=> setCount(count-1)}>Decrease</button>
  </div>
  )
}
function Products(props){
  const productStyle={
    width:'300px',
    height:'300px',
    boxShadow: '5px 5px 10px gray',
    margin:'20px',
    padding:'10px',
    borderRadius:'20px',
    float:'left'
  }
  const{name,price}=props.product;
  return(
     
    <div style={productStyle}>
        <h1>{name}</h1>
        <h4>{price}</h4>
        <p>Creat a Beautiful adobe master</p>
        <button>BUY NOW</button>
    </div>
  );
}
function Person(props){
  const personStyle={
    border:'1px solid red',
    margin:'10px',
    padding:'10px'
  }
  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <p>Qualification: {props.Qualification}</p>
    </div>
  );
}

export default App;
