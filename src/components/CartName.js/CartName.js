import React from 'react';
import './CartName.css';
const CartName = (props) => {
    return (
        <div  className="name-div">
            <li>{props.name}</li>
        </div>
    );
};

export default CartName;