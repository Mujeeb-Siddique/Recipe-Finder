/* eslint-disable react/prop-types */


const Header = (props) => {
  return (
    <>
     <div className={props.bgClass}>
        <div>
            <h1>{props.title}</h1>
            {props.children}
        </div>
     </div> 
    </>
  )
}

export default Header
