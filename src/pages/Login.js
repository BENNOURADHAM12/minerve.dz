import {Fragment, React, useState} from "react";
import Input from "../components/Input";


function Login(){
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const onChangeHandler = (e) =>{
        if(e.target.name == "Email"){
            setEmail(e.target.value)
        }else if(e.target.name == "Password"){
            setPassword(e.target.value)
        }   
    } 

    const handleClick = (e) =>{
        e.preventDefault()
       console.log(Email, Password);
       fetch("http://localhost:5000/login", {
        method: "POST",
        crossDomain:true,
        headers:{
            "Content-Type": "application/json",
            Accept:"Application/json",
            "Acces-Control-Allow-Origin":"*"
        },
        body:JSON.stringify({
            Email,
            Password
        })
       })
       .then((res)=>res.json())
       .then((data)=>{
         console.log(data,"Register with success")
         if(data.status === "ok"){
            alert('login successful')
            window.localStorage.setItem("token", data.data)
            window.localStorage.setItem("loggedIn", true)
            window.location.href = "./"
         }
       })
    }

  return (
            <Fragment>
                <div className="test1">
                    <h1>Login</h1> 
                        <form onSubmit={handleClick}>
                            <Input type="email" label="Email address" name="Email"  onChangeHandler = {onChangeHandler}/>
                            <Input type="password" label="password" name="Password"  onChangeHandler = {onChangeHandler}/>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form> 
                </div>
            </Fragment> 
  )
}
export default Login