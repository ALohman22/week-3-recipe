import React, {useState} from "react";
import "./newRecipeScreen.css"
import axios from "axios"
import {Formik, Form, Field} from "formik"
import {useNavigate} from "react-router-dom"



const NewRecipeScreen = () => {


  const [ingredientList, setIngredientList] = useState([])
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  
  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
    
  }
  const nav = useNavigate()
  
  const onSubmit = (values) => {
    values.ingredients = ingredientList
    console.log(values)
    axios.post(`https://recipes.devmountain.com/recipes`, values)
    .then((res) => {
      console.log(res.data)
      nav(`/recipe/${res.data[0][0].recipe_id}`)
    })

  }
  
  const handleList = (e) => {
    setIngredientList([...ingredientList, {quantity, name}])
    setName('')
    setQuantity('')
  } 
 


  return (
    
    <section className="mainScreen">
        <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit}) => (
        
      <Form className="inputForm" onSubmit={handleSubmit}>
        <div className="input-feild1">
          <input
            type="text" 
            name= "recipeName"
            placeholder="Recipe Name"
            onChange={handleChange}
            value= {values.recipeName}
            />
          <input
            type="text" 
            name= "imageURL"
            placeholder="Image URL"
            onChange={handleChange}
            value={values.imageURL}
            />
            
        </div>
        <div className="allRadioContainers">

          <div className="radioContainer">
            <Field 
              type="radio"
              name="type" 
              value="Cook"
              onChange={handleChange}
              />
            <label htmlFor="Cook" className="label-type">Cook</label>
          </div>

          <div className="radioContainer">
            <Field 
              type="radio"
              name="type" 
              value="Bake"
              onChange={handleChange}
              />
            <label htmlFor="Bake" lassName="label-type">Bake</label>
          </div>

          <div className="radioContainer">
            <Field 
              type="radio"
              name="type" 
              value="Drink"
              onChange={handleChange}
               />
            <label htmlFor="Drink" className="label-type">Drink</label>
          </div>

        </div>

        <div className="input-feild2">
          <input 
            type="text"
            name="prepTime" 
            placeholder="Prep Time"
            onChange={handleChange}
            value={values.prepTime}
            />
          <input 
            type="text" 
            name="cookTime"
            placeholder="Cook Time"
            onChange={handleChange}
            value={values.cookTime}
            />
          <input 
            type="text" 
            name="serves"
            placeholder="Serves"
            onChange={handleChange}
            value={values.serves}
            />
        </div>  

        <div className="addIngredientForm">
          <div className="input-feild3">
            <input 
              type="text" 
              placeholder="Recipe Name"
              value={name}
              onChange={(e)=> setName(e.target.value)}
              />
            <input
              type="text"
              placeholder="Quantity"
              value={quantity}
              onChange={(e)=> setQuantity(e.target.value)}/>
          </div>
          <div className="listContainer">
          <ul className="ingredientList">
            {ingredientList.map((ingredient)=> {
              return <li key={ingredient.ingredient}>{ingredient.quantity} {ingredient.ingredient}</li>
              })}
          </ul>
          </div>
        </div>


        <div className="formBottom">
        <button type="button" className="addBtn" onClick={handleList}>Add Another</button>


        <textarea 
          type="text"
          name="instructions"
          placeholder="What are the instructions?"
          onChange={handleChange}
          value={values.instructions}
        />

        <button type="submit" className="save">Save</button>

        </div>
      </Form>

      )}</Formik>
    </section>
  );
};

export default NewRecipeScreen;
