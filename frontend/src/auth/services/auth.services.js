import axios from "axios"

export async function login({email,password}) {
    let res = await axios.post("http://localhost:4000/api/auth/login",{email,password},{withCredentials:true})
    console.log(res.data)
    return res.data
}
export async function signup({name,email,password}) {
        let res = await axios.post("http://localhost:4000/api/auth/signup",{name,email,password},{withCredentials:true})
    return res.data
}

