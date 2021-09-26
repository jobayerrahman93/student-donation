import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Donation from '../Donation/Donation';
import './Card.css';



const Card = () => {

    const [students, setStudents] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./donation.json')
            .then(res => res.json())
            .then(data => setStudents(data))
    }, []);

    const cartHandler = (product) => {
      
        const newCart = [...cart, product];
        setCart(newCart);

    }



    return (
        <div className="card-container">
            <div className="donation-container">
                {
                    students.map(student => <Donation key={student.id} student={student} cartHandler={cartHandler}></Donation>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Card;