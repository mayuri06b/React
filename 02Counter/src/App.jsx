import './App.css'
import { useState } from 'react';

function App() {
  // change ko dom ke andar propagte karne ke liye 
  let [counter , setCounter] = useState(15)
  // pehli value -> counter , dusri value -> setCounter-> yeh ek method hai jo us variable ko control karega 
  // default value de do 

  // let counter = 15

  const clickHandler = ()=>{
    // THEIR IS THE PROBLEM in ui Updation 
    // react karti hai jab ek Variable update hoga 
    // Kuch methods hoti hai so ismein hooks Hote hai
    // haar ek hook ka ek kaam hai -> ek hook ek hi kaam karta hia 

    // counter = counter +1;

    setCounter(counter+1);
    // ismein bass counter ki value replace kar do 
  }

  
  const reduceHandler = ()=>{
    
    if(counter <= 0) {
      alert('Value can not go Negative!!')
    }else {
      counter= counter - 1;
      setCounter(counter);
    }
  }
  return (
    <>
      <h1> Mayuri Barapatre </h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={clickHandler}>Add Value</button>
      <br />
      <button onClick={reduceHandler}>Reduce Value</button>
    </>
  )
}

export default App
