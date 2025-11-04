import { Button } from "semantic-ui-react";
import Header from "../Common/Header";
import { Link } from "react-router-dom";
import './Home.css'; 

const Home = () => {
  return (
    <div>
      <Header title='Title' bgClass='bg-image'>
        <Button 
          as={Link} 
          to='/recipes' 
          content='SEARCH RECIPE' 
          className="button-wood"  // Apply the woodish button class
        />
      </Header>
    </div>
  );
}

export default Home;
