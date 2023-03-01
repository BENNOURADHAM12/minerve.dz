import React, { Fragment, useEffect } from 'react';
import Menu from "./Menu";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Commerce(){

    useEffect(() => {
        AOS.init();
      }, [])

   return (
    <Fragment>
        <Menu />
       
<section className="security"  data-aos="zoom-in" data-aos-duration="1000">
     <h1 data-aos="">مسرع حاضنة الاعمال</h1>
     <p data-aos="">تساعد الحاضنة شركتك أو مشروعك على حل المشكلات التي قد تواجهه، وتأمين ورشات العمل، الدعم</p>
     <p data-aos="">الاستشارة والإرشاد والتدريب وكل من شأنه تنمية عملك الريادي</p>
     <div className="container">
        <div className="SEC1">
            <img src="assets/images/education.png" alt="" />
            <h2>التدريب</h2>
             <p>تعلم كل ما تحتاجه لانشاء شركة ناجحة - اكثر من 20 مرحلة تدريبية تتضمن اكثر من 300 فيديو و ملفات تدريبية مجانا</p>   
        </div>
        <div className="SEC2">
            <img src="assets/images/presentation.png" alt="" />
            <h2>الارشاد</h2>
             <p>لجنة من الخبراء و اصحاب الانجازت يقومون بتوجيهك و صقل مشروعك من اجل انجاحه</p>
        </div>
        <div className="SEC4">
            <img src="assets/images/student.png" alt="" />
            <h2>الاستثمار</h2>
             <p>المستثمرون على المنصة جادين في تحريك حلمك و خططك الى شركة فعالة</p>
        </div>
        <div className="SEC3" >
            <img src="assets/images/graduation.png" alt="" />
            <h2>التمويل</h2>
             <p>لتعزيز فرصتك في اطلاق مسيرتك المهنية أو تنميتها و تطوريها</p>
        </div>
      </div>
        <hr style={{marginTop:"-15%"}} />
      <div className="register">
        <img src="assets/images/signin.jpg" alt="" />
        <form>
            <h2>سجل الأن معنا</h2>
            <input type="text" placeholder="الاسم و اللقب" name="name" />
            <input type="text" placeholder="تاريخ و مكان الازدياد" name="date_naissance" />
            <input type="text" placeholder="رقم الهاتف" name="phone" />
            <input type="email" placeholder="البريد الالكتروني" name="email" />
            <input type="password" placeholder="الرقم السري" name="password" />
            <button>سجل</button>
        </form>
        </div>
</section>

<section className="foot2">
    <ul className="listOne">
        <li><a href=""><img src="assets/images/facebook.png" alt="" /></a></li>
        <li><a href=""><img src="assets/images/youtube.png" alt="" /></a></li>
        <li><a href=""><img src="assets/images/instagram.png" alt="" /></a></li>
    </ul>
    <ul className="listTwo">
        <li>الرئيسية</li>
        <li>عن مينارف</li>
        <li>اتصل بنا</li>
        <li>خدماتنا</li>
    </ul>
</section>


    </Fragment>
   )
}

export default Commerce;
