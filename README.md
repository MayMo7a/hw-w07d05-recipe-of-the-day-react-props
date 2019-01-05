# W07D05:  Recipe Of The Day

![](https://i.imgur.com/iMof4nV.png)

For this homework we will be making a basic site for a Recipe of the Day site.

## Setup
You've been provided an empty react app that's ready for use.  This is just the standard `create-react-app` scaffold with a couple additions to prepare us for this app.

You've been given a directory called `data`, inside there is a file called `recipes.js` and another called `recipeOfTheDay.js`.  These files each contain data that will be used in this app.

## Component Details:

#### RecipeOfTheDay Component
The `RecipeOfTheDay` Component renders all the information for the Recipe of the Day on the right side of the app.  It will render all the data about the Recipe of the Day, Grandma's Mashed Potatoes.  As part of that, it will render each ingredient from the recipe as well.

1.  Import the data from `data/recipeOfTheDay.js` into `RecipeIOfTheDay` component.
2.  This component should have a method called `renderIngredients()`.  This method should render an `Ingredient` component for each ingredient in the recipe! The ingredient `name` and `amount` should be passed to the each `Ingredient` component via props.  Lost?  Remember to look at the examples from todays blog codealong (hint: it involves `.map`).  This method should be called in the `render()` with `{this.renderIngredients()}`.
3.  The RecipeOfTheDay component should also render the `name` and the `description` from the the data.
4.  Add in the finishing details:  in the render function add `<h2>` tags for "Recipe Of the Day", "Description", and "Ingredients" in the right spots.  This test can just be typed directly render function, you do not need to use embedded javascript for these tags.
5.  Add the `RecipeOfTheDay` component to be rendered in the `App.js` component.

#### Ingredient Component
The Ingredient component is used in the Recipe of the Day component.  It renders each individual ingredient from the Grandma's Mashed Potatoes Recipe.

1.  In the RecipeOfTheDay component you passed the data for the ingredients each `Ingredients` component via props.  Access the properties so that each ingredient has the `name` and `amount` values in the `render()` function.  You can use `<p>`, `<span>`, or whatever you feel make sense.

#### Recipes Component
The Recipes Component is used to import the data from `data/recipes` and render each `Recipe` component inside of it.  Each recipe gets its own component, so the `Recipes` component also handles passing the data for each recipe to it's component.  The `Recipes` component is rendered in App.js

Note:  be attentive to when `Recipes` and `Recipe` components are being used.

1.  Import the data from `data/recipes.js` into the `Recipes` component.
2.  This component should have a method called `renderRecipes()`.  This should should render a `Recipe` component for each recipe in the `data/recipes.js` file.  Use the `.map` strategy to pass the data as `props` to each `Recipe`.
3.  Call the `renderRecipes()` method in the `render()` function using `{this.renderRecipes()}`.  Also add an `<h1>` tag at the top that says "Recipes".
4.  Render the `Recipes` component in the `App.js` component.

#### Recipe
The `Recipe` component is used to render an individual recipe from the `data/recipes.js`.  All of them are rendered in the `Recipes` component.

1. For each recipe, render the `name`, `servings`, and `category` as `<li>` tags.  You might want to wrap that in a `<div>`!

## Add Styling!
Add some basic styling so it your app looks decent.  Bare minimum, give each component some dimensions and a fresh background color.

