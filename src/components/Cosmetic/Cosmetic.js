import React from 'react';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const {name, price, id } = props.cosmetic
    const addToCard = (id) => {
        console.log('add card', id)
    }
    return (
        <div className='product bg-primary '>
            <h2> Product Name: {name} </h2>
            <p>Product: {price} </p>
            <p><small>Id: {id}</small></p>
            <button onClick={ () => addToCard (id)}> Add to card</button>
        </div>
    );
};

export default Cosmetic;