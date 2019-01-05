import React, {Component} from 'react';

class Ingredient extends Component{
    render(){
        const indivIngredient = this.props.indivIngredient;
        return(
            <div className="ingredient">
                <p>{indivIngredient.ingredient}, {indivIngredient.amount}</p>
            </div>
        )
    }
}

export default Ingredient;