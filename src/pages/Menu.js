import React, {Fragment, useEffect} from "react";
import {Link} from "react-router-dom";
import { useState, setState } from 'react';

//import Script from "./Script";

function Menu(){

    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    
    useEffect(() => {
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
         console.log(data.data.Firstname,"UserData");
         //this.setState({useData : data.data})
         setFirstname(data.data.Firstname)
         setLastname(data.data.Lastname)
       })
      });

    const [imageX, setImageX] = useState("none");
    const [imageB, setImageB] = useState("");
    const [nav, setNav] = useState("");

    
    const handleClick = event =>{
        if(event.currentTarget.classList.contains('imageB')){
           setImageX('block');
           setImageB('none');
           setNav('flex');
        }else{
            setImageX('none');
            setImageB('block');
            setNav('none');
        }       
    }

    const logOut = () =>{
        window.localStorage.clear()
        window.location.href = "./"
      }

  return (
    <Fragment>
        <header>
            {
                Firstname == "" ? <Link className="btnLogin" to="/Register">سجل الان</Link>
                : 
                <div className="logout">
                   <h1 style={{color:"#FD7702", width:"100%"}} >{Firstname} {Lastname}</h1>
                   <button onClick={logOut} className="btnLogout">Logout</button>
                </div> 
            }
            <div className="burger" >
                <img src="assets/images/icons8.png" className="imageX" alt="" onClick={handleClick} style={{display:imageX}}/> 
                <img src="assets/images/burger.png" className="imageB" alt="" onClick={handleClick} style={{display:imageB}}/>
            </div>
            <nav>
                <ul className="nav__links" style={{display:nav}}>
                    <li><a href="#">عربية ▼</a></li>
                    <li className="afterdropdown"><a href="#foot">الاتصال بنا</a></li>
                    <li className="service"><Link to="/Articles">مقالات</Link></li>
                    <li className="afterdropdown"><Link to="/education">التكوين</Link></li>
                    <li className="afterdropdown"><Link to="/salon">التظاهرات التجارية</Link></li>
                    <li className="afterdropdown"><Link to="/commerce">حاضنة الاعمال</Link></li>
                    <li className="afterdropdown"><Link to="/catalogue">دليل المؤسسات</Link></li>
                    <li><Link to="/">الرئيسية</Link></li>
                </ul>
            </nav>
            <img className="headerLogo" src="assets/images/logo.png" alt="" />
        </header>
        
    </Fragment> 
    
  )
}
export default Menu;