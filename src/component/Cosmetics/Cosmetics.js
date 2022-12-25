import React, { useEffect, useState } from 'react';
import './Cosmetics.css'
import { totalPrice } from '../../utilities/calculation';
import Cosmetic from '../Cosmetic/Cosmetic';



const Cosmetics = () => {

    const [cosmetics, setCosmetics] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])
    const total = totalPrice(cosmetics)

    return (
        <div >
            <div className='cosmetics-headlines'>
                <h3>Welcome To My Cosmetics Store!!!!</h3>
                <p>Total money needed: {total} Taka</p>
            </div>
            <div className='cosmetics'>
                {
                    cosmetics.map(cosmetic => <Cosmetic
                        key={cosmetic.id}
                        cosmetic={cosmetic}
                    ></Cosmetic>)
                }
            </div>

        </div>
    );
};

export default Cosmetics;