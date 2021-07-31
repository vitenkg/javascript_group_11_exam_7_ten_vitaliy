import './App.css';
import {useState} from "react";
import Items from "./Components/Items/Items";
import Order from "./Components/Order/Order";
import {nanoid} from 'nanoid';

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

    const [order, setOrder] = useState([]);

    const [totalPrice, setTotalPrice] = useState(0);
    let bool = true;
    const addItem = props => {
        setOrder(order.map(prev => {
            if (prev.name === props.name) {
                bool = false;
                setTotalPrice(totalPrice + props.price);
                return {
                    ...prev,
                    quantity: prev.quantity + 1,
                    priceTotal: prev.priceTotal + prev.price,
                }
            }
            return prev
        }))

        if (bool) {
            setTotalPrice(totalPrice + props.price);
            setOrder([
                ...order,
                {
                    name: props.name,
                    price: props.price,
                    priceTotal: props.price,
                    quantity: 1,
                    id: nanoid(),
                }])
        }

    };

    const removeItem = props => {
        setOrder(order.map(prev => {
            if (prev.name === props.name) {
                if (prev.quantity > 0) {
                    setTotalPrice(totalPrice - props.price);
                    return {
                        ...prev,
                        quantity: prev.quantity - 1,
                        priceTotal: prev.priceTotal - prev.price,
                    }
                } else {

                }
            }
            return prev
        }))
    };

    const orderComponents = order.map(list => (
            <Order
                key={list.id}
                name={list.name}
                priceTotal={list.priceTotal}
                price={list.price}
                qty={list.quantity}
                onRemove={removeItem}
            />
        )
    );

    const itemsComponents = menu.map(inMenu => (
            <Items
                key={inMenu.id}
                name={inMenu.name}
                price={inMenu.price}
                onSelect={addItem}
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
                <p>Total Price: {totalPrice} KGS</p>
            </fieldset>
            <fieldset className="Items">
                <legend>Add items:</legend>
                {itemsComponents}

            </fieldset>
        </div>
    );
}

export default App;
