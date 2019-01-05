import React, {Component} from 'react';
import recipeOfTheDay from '../data/recipeOfTheDay';
import Ingredient from './Ingredient';


class RecipeOfTheDay extends Component{
    renderIngredients(){
        const ingredients = recipeOfTheDay.ingredients.map((recipe, index) =>{
            return(
                <Ingredient indivIngredient={recipe} key={index}/>
            )
        
        })
        return ingredients;

    }

    render(){
        return(
            <div className="recipeOfTheDay">
                <div className="headerR">
                    <h2>Recipe Of The Day</h2>
                    <h2>{recipeOfTheDay.name}</h2>
                </div>
                

                <div className="allIngredients">
                    <h3>Description:</h3>
                    <p>{recipeOfTheDay.description}</p>
                    <h3>Ingredients:</h3>
                    {this.renderIngredients()}
                </div>
            </div>
        )
    }
}

export default RecipeOfTheDay;