import React, {Component} from 'react';
import recipes from '../data/recipes';

class Recipe extends Component{
    renderRecipes(){
        const allRecipes = recipes.map((recipes,index) =>{
            return (
                <div className="ecipe" key={index}>
                    <p>Name: {recipes.name}</p>
                    <p>Servings: {recipes.servings}</p>
                    <p>Category: {recipes.category}</p>
                </div>
            )
        })
        return allRecipes;
    }

    render(){
        const recipe = this.props.recipe;
        return(
            <div className="indivRecipe">
                <ul>
                    <li>Name: {recipe.name}</li>
                    <li>Servings: {recipe.servings}</li>
                    <li>Category: {recipe.category}</li>
                </ul>
            </div>
        )
    }
}

export default Recipe;