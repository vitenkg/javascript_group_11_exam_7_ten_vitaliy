import React from 'react';
import './Items.css';
import tea from '../../assets/tea.jpg';
import burger from '../../assets/burger.png';
import sandwich from '../../assets/sandwich.png';
import cola from '../../assets/cola.png';
import hotdog from '../../assets/hotdog.png';
import frenchFries from '../../assets/french.png';
import donuts from '../../assets/doughnut.png';


const Items = props => {
    let icon
    if (props.name === 'Hamburger') {
        icon = burger;
    }
    if (props.name === 'Sandwich') {
        icon = sandwich;
    }
    if (props.name === 'Cola') {
        icon = cola;
    }
    if (props.name === 'Coffee') {
        icon = tea;
    }
    if (props.name === 'Tea') {
        icon = tea;
    }
    if (props.name === 'French Fries') {
        icon = frenchFries;
    }

    if (props.name === 'Donuts') {
        icon = donuts;
    }
    if (props.name === 'HotDog') {
        icon = hotdog;
    }

    return (
        <div className="menuItem" onClick={()=> props.onSelect(props)}>
            <div><img src={icon} alt={"tea"} className="image"/> </div>
            <div>
                <p>{props.name}</p>
                <span>Price: {props.price}</span>
            </div>
        </div>
    );
};

export default Items;