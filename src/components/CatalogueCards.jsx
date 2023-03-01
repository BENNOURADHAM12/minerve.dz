import React from "react";
import { Link } from "react-router-dom";

function CatalogueCards(props){

    const myData = {
        CatalogueId: props.CatalogueId, 
        CatalogueName: props.CatalogueName,
        CatalogueDescription: props.CatalogueDescription,
        CatalogueImage: props.CatalogueImage,
      } 

   return (
        <div className="cardone">
            <img src={props.CatalogueImage} alt="" />
            <h3>{props.CatalogueName}</h3>
            <h6>شركة</h6>
            <p>{props.CatalogueDescription}</p>
            <Link to="/CatalogueDescription" state={myData}>...</Link>
        </div>
   )
}

export default CatalogueCards;