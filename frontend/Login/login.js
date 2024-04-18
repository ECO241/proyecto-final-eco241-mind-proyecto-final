import { supabase } from "../../supabase"

const inputEmail = document.getElementById('Email')
const inputPassword = document.getElementById('Password')
const loginButton = document.getElementById("loginButton")

loginButton.addEventListener('click', async() =>{
    const {usersData, error} = await supabase
    .from('Usuarios')
    .select()

    const found = usersData.find((user) => user.email === inputEmail.value)

     if (found !== undefined) {
        if (inputPassword.value) {
            alert("inicio de sesión")
        }
        
     }   

} )