/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"
import { Button, Card } from "semantic-ui-react"


const RecipeListItem = ({recipe}) => {
  return (
    <>
    
      
      <Card style={{ backgroundColor: '#1A1A1A', color: 'white' }} >
        <img  src={recipe.image_url} style={{height: 170,}}/>
        <Card.Content >
            <Card.Header  style={{color: 'white'}} content={recipe.title}/>
            <Card.Description style={{color: 'white'}}>
                <h4>{recipe.publisher}</h4>
            </Card.Description>
        </Card.Content>
        <Card.Content>
            <Button 
            as={Link}
            to={`/recipe/${recipe.recipe_id}`}
            content="Details"
            style={{ backgroundColor: '#deb887', color: 'white' }}
            />
            
            <Button 
            as='a'
            href={recipe.source_url}
            target="_blank"
            content="Recipe URL"
            style={{ backgroundColor: '#8B4513', color: 'white', border: 'none' }}
            />
        </Card.Content>
     </Card> 
    
    
    </>
  )
}

export default RecipeListItem
