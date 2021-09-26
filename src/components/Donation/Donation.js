import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Donation.css';

const element = <FontAwesomeIcon icon={faCartPlus} />



const Donation = (props) => {

    const {image,name,country,id,donation,home}=props.student;
  
    return (
       
      
            <div className="student-detail">
            <img src={image} alt="" />
            <h4>ID: {id}</h4>
            <h3 className="title">Name: {name}</h3>
            <h3>Country: {country}</h3>
            <h3>Home-town: {home}</h3>
            <h3>Donation:$ {donation}</h3>
            <button className="cart-btn" onClick={() => props.cartHandler(props.student)}>{element}  Add</button>
            
        </div>
    
   

    );
};

export default Donation;