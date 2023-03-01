import React, { Fragment } from "react";
import Menu from "./Menu";
import { useLocation } from "react-router-dom";

function Voda(){
    const location = useLocation();
    const data = location.state;
    console.log(data)
  
    return (
        <Fragment>
             
             <Menu />
             <section class="description">
                <div class="Info">
                    <h3>عن المؤسسة</h3>
                    <p>{data.SalonDescription}</p>
                </div>
                <div class="logoCatalogue">
                    <img src={data.SalonImage} alt="" />
                    <h2>{data.SalonName}</h2>
                    <p>شركة</p>
                </div>
            </section>

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

export default Voda