
import { useEffect, useState } from 'react';
import './App.css';
import Country from './Component/Country/Country';
import Cart from './Component/Cart/Cart';

function App() {
  const [countrys, setCountrys] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=> {
        setCountrys(data)
    
      }
    );
  }, [])

  const handleAddCountry = (country) =>{
    const newCart = [...cart, country];
    setCart(newCart);
  }
  return (
    <div className="App">
      
      <h1>Country loaded : {countrys.length}</h1>
      <h4>Country Selected : {cart.length}</h4>
      <Cart cart = {cart}></Cart>
      
      <ul>
        {countrys.map(country => <Country key={country.cca3} country={country} handleAddCountry= {handleAddCountry}></Country>)}
      </ul>
      
     
      
      
      
    </div>
  );
}

export default App;
