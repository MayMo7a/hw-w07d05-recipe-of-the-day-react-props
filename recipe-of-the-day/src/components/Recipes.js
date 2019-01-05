import React, {Component} from 'react';
import recipes from '../data/recipes';
import Recipe from './Recipe';

class Recipes extends Component{
    renderRecipes(){
        const allRecipes = recipes.map((recipe, index) =>{
            return(
                <Recipe recipe={recipe} key={index}/>
            )
        })
        return allRecipes;
    }

    render(){
        return(
            <div className="recipes">
                <h2>Recipes</h2>
                {this.renderRecipes()}
            </div>
        )
    }
}

export default Recipes;

