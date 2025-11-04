import { useEffect, useState } from 'react';
import Search from '../Common/Search';
import RecipesList from '../Common/RecipesList';
import { getRecipes } from '../Services/Api';
import './Recipe.css'


const Recipes = () => {
  
  const [seachedQuery, setSeachedQuery] = useState('pizza');
  const [recipes, setRecipes] = useState([])
  
  
  
  
  
  
  useEffect(() => {
    
    const getSearchedResult = async () => {
      const results = await getRecipes(seachedQuery);
      if (results && Array.isArray(results) && results.length > 0) {
        setRecipes(results);
      } else {
        setRecipes([]); 
      }
    };
    
    getSearchedResult()
  }, [seachedQuery])
  
 
 
  
  
  
  
  return (
    <div className="recipes">
          <Search setSeachedQuery={setSeachedQuery}/>
          <RecipesList recipes={recipes} seachedQuery={seachedQuery}/>
    </div>
  );
}


export default Recipes;
