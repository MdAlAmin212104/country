import React from 'react';
import Country from './../Country/Country';

const Cart = (props) => {
    const cart = props.cart;
    let totalpopulations = 0;
    for (let i = 0; i < cart.length; i++) {
        const Country = cart[i];
        totalpopulations = totalpopulations + Country.population;
    }
    return (
        <div>
            <h1>this is cart : {cart.length}</h1>
            <p>total population : {totalpopulations }</p>

        </div>
    );
};

export default Cart;