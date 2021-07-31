import React from 'react';
import './Order.css'

const Order = props => {
    console.log(props);
    return (
        <li>
            <p className="name">{props.name}</p><span className="quantity">x{props.qty}</span><span className="erase">x</span>
        </li>
    );
};

export default Order;