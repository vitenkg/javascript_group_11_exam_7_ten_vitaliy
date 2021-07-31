import React from 'react';
import './Order.css'

const Order = props => {
    if (props.qty > 0) {
        return (
            <li>
                <p className="name">{props.name}</p>
                <span className="quantity">x{props.qty}</span>
                <span className="price">{props.priceTotal} KGS</span>
                <span className="erase" onClick={()=>props.onRemove(props)}>x</span>
            </li>
        );
    } else {
        return null
    }

};

export default Order;