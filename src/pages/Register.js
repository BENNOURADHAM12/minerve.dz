import react, {Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";

function Register(){

    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");


    const onChangeHandler = (e) =>{

        if(e.target.name == "Firstname"){
            setFirstname(e.target.value)
        } else if(e.target.name == "Lastname"){
            setLastname(e.target.value)
        } else if(e.target.name == "Email"){
            setEmail(e.target.value)
        }else if(e.target.name == "Password"){
            setPassword(e.target.value)
        }   
    }    

    const handleClick = (e) =>{
        e.preventDefault()
       console.log(Firstname, Lastname, Email, Password);
       fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain:true,
        headers:{
            "Content-Type": "application/json",
            Accept:"Application/json",
            "Acces-Control-Allow-Origin":"*"
        },
        body:JSON.stringify({
            Firstname,
            Lastname,
            Email,
            Password
        })
       })
       .then((res)=>res.json())
       .then((data)=>{
         console.log(data,"Register with success")
       })
    }
    
        return (
            <Fragment>
                <div className="test1">
                    <h1>Registration</h1> 
                        <form onSubmit={handleClick}>
                            <Input type="text" label="First Name" name="Firstname" onChangeHandler = {onChangeHandler} />
                            <Input type="text" label="Last Name" name="Lastname"  onChangeHandler = {onChangeHandler} />
                            <Input type="email" label="Email address" name="Email" onChangeHandler = {onChangeHandler} />
                            <Input type="password" label="password" name="Password" onChangeHandler = {onChangeHandler} />
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                        <Link className="loginBtn" to="/login">already existe</Link>
                </div> 
            </Fragment> 
         )
}

export default Register;