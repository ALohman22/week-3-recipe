import React, {useEffect, useState} from 'react'
import icon from "../../assets/icon.png";
import axios from "axios"
import AdBanner from './AdBanner'
import RecipeCard from "../RecipeCard"
import "./homeScreen.css"

const HomeScreen = () => { 

  const [search, setSearch] = useState('')
  const [recipes, setRecipes] = useState([])
  
  const getRecipes = () => {
    axios.get("https://recipes.devmountain.com/recipes")
    .then((res)=> {
      setRecipes(res.data)
      console.log(res.data)
    })
  }

  useEffect(()=> {
    getRecipes()
  }, [])
  
  const recipeDisplay = recipes.filter((recipe, index) => {
    let title = recipe.recipe_name.toLowerCase()
    let searchParams = search.toLowerCase()
    return title.includes(searchParams)
  })
  .map((recipe, index) => {
    return <RecipeCard key={recipe.recipe_id} recipe={recipe}/>
  })
  

  return (
    <div className='mainPage'>
      <AdBanner />
      <div className='searchContainer'>
        <img className='icon' src={icon} alt="search"/>
        <input className='search' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search for a Recipe' type="text" />
      </div>
      <div className='cardContainer'>
        {recipeDisplay}
      </div>
      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  )
}

export default HomeScreen