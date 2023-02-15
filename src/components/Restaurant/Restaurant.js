import React from 'react';

const Restaurant = () => {
    const searchFood = e => {
        console.log(e.target.value);
    }
    return (
        <div>
            <h2>Find the food you want</h2>
            <input onChange={searchFood} type="text" />
        </div>
    );
};
kll
export default Restaurant;