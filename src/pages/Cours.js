import React, { useState } from 'react';
import { Fragment } from 'react';
import Menu from './Menu';
import cours1 from "../JSON/Cours/cours1.json";
import { useLocation } from "react-router-dom";

function Cours(){

    const location = useLocation();
    const data = location.state;
    const dataCours = data.coursPlan;

    const [video, setVideo] = useState()

    function x(){
        return (
            dataCours.map((element) => {
                return (
                    <tr>
                        <td onClick={z}>{element.cours1}</td>
                    </tr>
                )
            })
        )
    }

    function z(e){
        setVideo(e.target.innerHTML)
        console.log(video.innerHTML)
    }

  return (
     <Fragment>
          <Menu />
          <h3>{data.CoursTitle}</h3>
          <div className="cours1">
                <div className="coursInfo">
                    {video} 
                </div>
          <div className="dawra">
            <table>
                <tr>
                    <th>القسم الاول : 10 دروس</th>
                </tr>
                {x()}
            </table>
        </div>
          </div>

          <section class="foot2">
            <ul class="listOne">
                <li><a href=""><img src="assets/images/facebook.png" alt="" /></a></li>
                <li><a href=""><img src="assets/images/youtube.png" alt="" /></a></li>
                <li><a href=""><img src="assets/images/instagram.png" alt="" /></a></li>
            </ul>
            <ul class="listTwo">
                <li>الرئيسية</li>
                <li>عن مينارف</li>
                <li>اتصل بنا</li>
                <li>خدماتنا</li>
            </ul>
        </section> 
    
     </Fragment>
  )
}

export default Cours