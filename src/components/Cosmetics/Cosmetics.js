import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const cosmetics = [
        {id:1, name:'alta', price:100},
        {id:2, name:'Sonu', price:200},
        {id:3, name:'lebestic', price:300},
        {id:4, name:'curi', price:400},
        {id:5, name:'saban', price:500},
    ]
    return (
        <div>
            {
                cosmetics.map(cosmetic => <Cosmetic 
                    cosmetic = {cosmetic}
                    key ={cosmetic.id}
                    ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;