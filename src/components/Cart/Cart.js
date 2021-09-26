import React from 'react';
import CartName from '../CartName.js/CartName';
import './Cart.css';

const Cart = (props) => {
   
    const {cart}=props;

    let totalFund=0;
    const names=[];

    for(const cartItem of cart ){
       
        totalFund=totalFund+cartItem.donation;
        names.push(cartItem.name);
        
    }
    
    return (
       <div>
            <div className="cart">
            <h2>Item: {cart.length}</h2>
            <h3>Total: {totalFund}</h3>
            <br />
            <h3>Donation by :</h3>
            {
                names.map(name=><CartName key={name} name={name}></CartName>)
            }
        </div>
       </div>
    );
};

export default Cart;