import React from 'react';
import './Items.css';

const Items = props => {
    // console.log(props);
    return (
        <div className="menuItem">
            <div>
                <p>{props.name}</p>
                <span>Price: {props.price}</span>
            </div>
        </div>
    );
};

export default Items;