import react from "react";
import CoursCards from "./coursCards";
import cours1 from "../JSON/Cours/cours1.json"


function Cours(props){

    
    function x(){
        if(props.coursCategorie=="Design"){
            return cours1.map((Element) => {
                return <CoursCards CoursDescription={Element.CoursDescription} coursCategorie={Element.coursCategorie} coursPlan={Element.coursPlan} CoursId={Element.CoursId} CoursTitle={Element.CoursTitle} CoursProf={Element.CoursProf} CoursImage={Element.CoursImage}/>
            })
        }
    }

   return(
    <div class="cours1">
        <h1>{props.coursCategorie}</h1>
        <div class="one">
            {x()}
        </div>    
    </div>
   )
}

export default Cours;