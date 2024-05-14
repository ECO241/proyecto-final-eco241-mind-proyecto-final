import Button from "../Button/Button"
import "./Header.css"


export function Header() {
   
return (
    <section className="container">
    <Button url ="/ProfileRegister" image="/src/assets/Back-small.png"></Button>
    <Button image="/src/assets/Logo.png"></Button>
    <Button image="/src/assets/person-circle.png"></Button>

    </section>
)
}

export default Button