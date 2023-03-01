import react, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

function CoursCards(props){

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


      const myData = {
        CoursId: props.CoursId, 
        coursCategorie: props.coursCategorie,
        CoursTitle: props.CoursTitle,
        CoursProf: props.CoursProf,
        CoursImage: props.CoursImage,
        coursPlan : props.coursPlan,
        CoursDescription : props.CoursDescription
      }

    return (
            <div class="card">
                <img src={props.CoursImage} alt=""/>
                <h4>{props.CoursTitle}</h4>
                <div class="prof">
                    <h2>{props.CoursProf}</h2>
                    <img src="assets/images/Profile-Male-PNG.png" alt="" />
                </div>
                {
                    Firstname == "" ? <Link to="/educationLogin" state={myData}>سجل الان .. مجانا</Link> : <Link to="/Cours" state={myData}>start formation</Link>
                }
            </div>
    )
}

export default CoursCards