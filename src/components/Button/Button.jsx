import { Link } from "react-router-dom"

export function Button(props) {
    const {title} = props
return (
   <button className="buttons">
        <Link to=""> <p>{title}</p> </Link>
   </button>
)
}

export default Button