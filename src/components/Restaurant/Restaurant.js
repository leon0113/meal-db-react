import React, { useEffect, useState } from 'react';

const Restaurant = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText]);

    const searchFood = e => {
        setSearchText(e.target.value);
    }
    return (
        <div>
            <h2>Find the food you want</h2>
            <input onChange={searchFood} type="text" /> <br />
            <h3>Result found : {meals.length}</h3>
            <div>
                {
                    meals.map(meal =>)
                }
            </div>
        </div>
    );
};

export default Restaurant;