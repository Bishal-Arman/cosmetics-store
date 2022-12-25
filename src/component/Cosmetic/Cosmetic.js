import React from 'react';
import "./Cosmetic.css"
import { localStrorageDb, removeFromDb } from '../../utilities/fakeDb';



const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;

    const handleAddCart = (id) => {
        // console.log('item added', id)
        localStrorageDb(id)
    }
    // const handleAddItem = () => handleAddCart(id)

    const handleRemoveFromCart = (id) => {
        removeFromDb(id)
    }
    return (
        <div className='cosmetic'>
            <h4>Name:{name}</h4>
            <p>Price:{price} Taka</p>
            <button onClick={() => handleAddCart(id)}>Add To Cart</button>
            <button className='btn-remove' onClick={() => handleRemoveFromCart(id)}>Remove From Cart</button>
        </div>
    );
};

export default Cosmetic;