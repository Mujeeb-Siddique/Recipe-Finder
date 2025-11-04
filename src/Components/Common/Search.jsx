/* eslint-disable react/prop-types */

import { useState } from "react"
import { Form, Grid, Input } from "semantic-ui-react"
import './RecipeDetails.css'


const Search = ({setSeachedQuery}) => {
  
    const [searchValue, setSearchValue] = useState('')
    // console.log(searchValue);
    
    function onFormSubmit(e){
        e.preventDefault()
        if(searchValue === ''){
            alert('Please enter a valid search term.')
            return;
        }
        setSeachedQuery(searchValue.trim())
    }
    
    return (
    <>
    
    <Grid columns={2} textAlign="center">
        <Grid.Column >
            <h2 >Search Recipe with <span style={{color:'#deb887'}}> Finer Recipes</span> </h2>
            <Form onSubmit={onFormSubmit}  >
            <Input
                style={{
                    backgroundColor: "black", 
                    color: "white", 
                    border: "0.5px solid white",
                    borderRadius: "4.5px", 
                }}
                input={{
                    style: {
                    backgroundColor: "black", 
                    color: "white", 
                    },
                }}
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
                placeholder="Search Recipe"
                action={{
                    icon: "search",
                    style: {
                    backgroundColor: "#deb887", 
                    color: "white", 
                    },
                }}
            />
            </Form>
        </Grid.Column>
    </Grid>    
    
      
    </>
  )
}

export default Search
