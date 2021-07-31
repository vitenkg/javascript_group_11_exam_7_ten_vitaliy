import './App.css';
import {useState} from "react";

function App() {
    const [menu, setMenu] = useState([
        {
            name: 'Hamburger',
            price: '150',
            id: 0,
            count: 0,
        },
        {
            name: 'Sandwich',
            price: '130',
            id: 1,
            count: 0,
        },
        {
            name: 'HotDog',
            price: '135',
            id: 2,
            count: 0,
        },
        {
            name: 'Donuts',
            price: '60',
            id: 3,
            count: 0,
        },
        {
            name: 'French Fries',
            price: '120',
            id: 4,
            count: 0,
        },
        {
            name: 'Coffee',
            price: '70',
            id: 5,
            count: 0,
        },
        {
            name: 'Tea',
            price: '30',
            id: 6,
            count: 0,
        },
        {
            name: 'Cola',
            price: '40',
            id: 7,
            count: 0,
        },
    ]);

    const [totalPrice, setTotalPrice] = useState(0);

    const itemsComponents = menu.map(inMenu => (

        <Items
            key = {inMenu.id}
            name = {inMenu.name}
            // onSelect = {}
        />
        )

    );

    return (
        <div className="App">

        </div>
    );
}

export default App;
