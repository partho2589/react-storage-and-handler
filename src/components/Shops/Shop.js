import React from 'react';
import { add, multiply } from '../../utilities/Calculate';


const Shop = () => {
  const first = 50;
  const second = 20;
  const result = multiply(first, second);
  const total = add(first, second)
     
    return (
        <div>
            <h1> This is shop comb.</h1>
        <p> Result: {result} and Total: {total}  </p>
        </div>
    );
};

export default Shop;