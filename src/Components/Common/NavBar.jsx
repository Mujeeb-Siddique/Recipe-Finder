
import { Menu } from 'semantic-ui-react'
import kitchentool from '../../Constants/kitchen-tool.png'

import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
     <Menu borderless fixed='top' style={{ backgroundColor: '#1A1A1A', color: 'white' }} >
        <Menu.Item>
            <img src={kitchentool} alt='logo' style={{width: 60,}} />
        </Menu.Item>
        
        <Menu.Item as={Link} to='/' name='Home' style={{color: 'white'}}/>
        <Menu.Item as={Link} to='/recipes' name='Recipe' style={{color: 'white'}}/>
        
        
     </Menu>
    </div>
  )
}

export default NavBar
