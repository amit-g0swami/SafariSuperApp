import MealsSummary from "./MealsSummary";
import React  from 'react'
import AvailableMeals from "./AvailableMeals";
const Meals = (props)=>{
    return (
        <>
            <MealsSummary></MealsSummary>
            <AvailableMeals></AvailableMeals>
        </>
    );
}

export default  Meals;