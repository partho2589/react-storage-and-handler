import React from 'react';
import { add } from '../../utilities/Calculate';


const Cosmetics = () => {
    const first = 10;
    const second = 30;
    const total =add(first, second)
    return (
        <div>
            <h1>Well come to my cosmetics strong </h1>
            <p>Total: {total}</p>
        </div>
    );
};

export default Cosmetics;