import React, { Component, Fragment } from "react";

export default class UserDetails extends Component{

   constructor(props){
    super(props);
    this.state = {
        useData : ""
    }
   } 

  componentDidMount(){
    fetch("http://localhost:5000/userData", {
        method: "POST",
        crossDomain:true,
        headers:{
            "Content-Type": "application/json",
            Accept:"Application/json",
            "Acces-Control-Allow-Origin":"*"
        },
        body:JSON.stringify({
            token:window.localStorage.getItem("token")
        })
       })
       .then((res)=>res.json())
       .then((data)=>{
         console.log(data,"UserData");
         this.setState({useData : data.data})
       })
  }

  logOut = () =>{
    window.localStorage.clear()
    window.location.href = "./Login"
  }

  render(){
    return (
        <Fragment>
           name <h1>{this.state.useData.Firstname}</h1>
           Email <h1>{this.state.useData.Email}</h1>
           <button onClick={this.logOut}>Log out</button>
        </Fragment>
     )
  }
}

//export default UserDetails