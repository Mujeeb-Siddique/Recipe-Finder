/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { getRecipe } from "../Services/Api"
import {  Link, useParams } from "react-router-dom"
import { Button, Grid,Image,Header, Segment } from "semantic-ui-react"
import './RecipeDetails.css'

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState({})
  
  const {recipeId} = useParams()
  console.log({recipeId})
  
  
  useEffect(() => {
        const getData = async() => {
            const result = await getRecipe(recipeId)
            if (result) {
              setRecipe(result);
            }
        }
        getData()
    }, [recipeId])
  
    return (
      
      Object.keys(recipe).length > 0 ?
      <Grid container stackable columns={2} className="details-page-content">
        <Grid.Column>
          <Button
            as={Link}
            to={'/recipes'}
            content='Back to recipe list'
            style={{ backgroundColor: '#deb887', color: 'white' }}
          />
          <Image src={recipe.image_url}/>
        </Grid.Column>
        <Grid.Column>
          <Header size="medium" style={{color: 'white'}}>{recipe.title}</Header>
          <p>Provided By: {recipe.publisher} </p>
          <Button
            as={'a'}
            href= {recipe.publisher_url}
            content='Publisher Webpage'
            target= "_blank"
            style={{ backgroundColor: '#deb887', color: 'white' }}
          />
          <Button
           className="button-3"
            as={'a'}
            href= {recipe.source_url}
            content='Recipe URL'
            target= "_blank"
            style={{ backgroundColor: '#deb887', color: 'white' }}
          />
          <Header size="large"  style={{ color: '#deb887' }}  content='Ingredients:'/>
          <Segment.Group>
            {
              recipe && recipe.ingredients.map(data => (
                <Segment style={{ backgroundColor: '#1A1A1A', color: 'white', border:'0.5px solid white' }}>
                  <h5>{data}</h5>
                </Segment>
              ))
            }
          </Segment.Group>
        </Grid.Column>
      </Grid>: 'No data to display'
    
  )
}

export default RecipeDetails
