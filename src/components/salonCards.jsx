import React from "react";
import { Link } from "react-router-dom";

function SalonCards(props){

    const myData = {
        SalonId: props.SalonId, 
        SalonName: props.SalonName,
        SalonDescription: props.SalonDescription,
        SalonImage: props.SalonImage,
      } 

   return (
        <div className="cardone">
            <img src={props.SalonImage} alt="" />
            <h3>{props.SalonName}</h3>
            <h6>شركة</h6>
            <p>{props.SalonDescription}</p>
            <Link to="/voda" state={myData}>...</Link>
        </div>
   )
}

export default SalonCards;