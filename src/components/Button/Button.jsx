import { Link } from "react-router-dom"


export function Button(props) {
    const {title,image,url} = props
return (
   <button className="buttons">
        <Link to= {url}> <p>{title}</p> </Link>
        <img src={image}></img>
   </button>
)
}

export default Button