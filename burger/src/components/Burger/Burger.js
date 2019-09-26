import React from 'react';
import './Burger.css'
import BurgerIngredient from './Burgeringredient/Burgeringredient';

const burger =(props) =>{
    let transfromedIngredients = Object.keys(props.ingredients)
        .map(k => {
            return [...Array(props.ingredients[k])].map((_,i) =>{
               return  <BurgerIngredient key={k+i} type={k}/>
            });
        })
        .reduce((arr,el) =>{
            return arr.concat(el);
        },[]);
    // console.log(transfromedIngredients);
    if(transfromedIngredients.length === 0 ){
        transfromedIngredients = <p>Please adding ingredients</p>
    };

    return(
        <div className='Burger'>
            <BurgerIngredient type='bread-top'/>
            {transfromedIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
}

export default burger;