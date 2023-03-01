import React, {Fragment, useEffect} from "react";
import Menu from "./Menu";
import {Link} from "react-router-dom";
import Cours from "../components/cours";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Education(){

    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <Fragment>
        <Menu />

    <section class="security" data-aos="zoom-in" data-aos-duration="1000">
     <h1>التكوين</h1>
     <p>منصة للتكوين الالكتروني الاحترافي</p>
     <p>هنا تبدأ رحلتك من العلم الى العمل</p>
     <div class="container">
        <div class="SEC1">
            <img src="assets/images/education.png" alt="" />
            <h2>اكتشف</h2>
             <p>مجموعة كبيرة و متنوعة من اكثر الدوريات و التخصصات كفائة و جودة</p>   
        </div>
        <div class="SEC2">
            <img src="assets/images/presentation.png" alt="" />
            <h2>تعلم</h2>
             <p>مع اكثر المدربين كفائة لصقل مهارتك المهنية و العملية</p>
        </div>
        <div class="SEC4">
            <img src="assets/images/student.png" alt="" />
            <h2>التحق</h2>
             <p>تأخذ البرامج لتنضم الى مجتمع من المتعلمين الراغبين بالتطور</p>
        </div>
        <div class="SEC3" >
            <img src="assets/images/graduation.png" alt="" />
            <h2>احصل على شهادة</h2>
             <p>لتعزيز فرصتك في اطلاق مسيرتك المهنية أو تنميتها و تطوريها</p>
        </div>
      </div>

      <div class="cours" data-aos="zoom-in" data-aos-duration="1000">
          <Cours coursCategorie="Design"/>
      </div>

      <div class="cours cours2" data-aos="zoom-in" data-aos-duration="1000">
          <Cours coursCategorie="Design"/>
      </div>

      {/* <div class="cours cours2" >
          <Cours coursCategorie="دورات في التسويق الالكتروني"/>
      </div> */}

      
  </section>


  <section class="foot2">
    <ul class="listOne">
        <li><a href=""><img src="assets/images/facebook.png" alt="" /></a></li>
        <li><a href=""><img src="assets/images/youtube.png" alt="" /></a></li>
        <li><a href=""><img src="assets/images/instagram.png" alt="" /></a></li>
    </ul>
    <ul class="listTwo">
        <li><Link class="test" to="/">الرئيسية</Link></li>
        <li><Link class="test" to="/addArticle">أضف مقال</Link></li>
        <li><Link class="test" to="/">اتصل بنا</Link></li>
        <li><Link class="test" to="/">خدماتنا</Link></li>
    </ul>
</section>

    </Fragment> 
  )
}

export default Education;