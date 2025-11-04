/* eslint-disable react/prop-types */
import { Container, Grid, Header } from "semantic-ui-react";
import RecipeListItem from "./RecipeListItem";


const RecipesList = ({recipes, seachedQuery}) => {
  return (
    <>
     <Container>
      
      <Header size="huge"  textAlign="left" >
        <span style={{color: 'white'}}>Recipe list for{' '}</span>
        <span style={{color:'#deb887'}}>{seachedQuery}</span>
      </Header>
      
      <Grid columns={4}>
        {
          recipes && recipes.map((recipe,index)=> {
            return(
              <Grid.Column  key={index}>
                <RecipeListItem recipe={recipe}/>
              </Grid.Column>
            )
          })
        }
      </Grid>
     </Container> 
    </>
  )
}

export default RecipesList;
