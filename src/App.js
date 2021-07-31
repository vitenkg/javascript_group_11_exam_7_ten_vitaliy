import './App.css';
import {useState} from "react";
import Items from "./Components/Items/Items";
import Order from "./Components/Order/Order";

function App() {
    const menu = [
        {
            name: 'Hamburger',
            price: 150,
            id: 0,
            count: 0,
        },
        {
            name: 'Sandwich',
            price: 130,
            id: 1,
            count: 0,
        },
        {
            name: 'HotDog',
            price: 135,
            id: 2,
            count: 0,
        },
        {
            name: 'Donuts',
            price: 60,
            id: 3,
            count: 0,
        },
        {
            name: 'French Fries',
            price: 120,
            id: 4,
            count: 0,
        },
        {
            name: 'Coffee',
            price: 70,
            id: 5,
            count: 0,
        },
        {
            name: 'Tea',
            price: 30,
            id: 6,
            count: 0,
        },
        {
            name: 'Cola',
            price: 40,
            id: 7,
            count: 0,
        },
    ];

    const [order, setOrder] = useState([
        {
            name: 'Hamburger',
            price: 150,
            quantity: 1,
            id: 1,
        }

    ]);

    const [totalPrice, setTotalPrice] = useState(0);

    const orderComponents = order.map(list => (
            <Order
                key={list.id}
                name={list.name}
                price={list.price}
                qty={list.quantity}
            />
        )
    );

    const itemsComponents = menu.map(inMenu => (
            <Items
                key={inMenu.id}
                name={inMenu.name}
                price={inMenu.price}
                // onSelect = {}
            />
        )
    );

    return (
        <div className="App">
            <fieldset className="Order">
                <legend>Order Details:</legend>
                <ul>
                    {orderComponents}
                </ul>

            </fieldset>
            <fieldset className="Items">
                <legend>Add items:</legend>
                {itemsComponents}
            </fieldset>
        </div>
    );
}

export default App;
