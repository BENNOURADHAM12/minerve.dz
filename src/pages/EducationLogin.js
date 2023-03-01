import React from "react";
import { Fragment } from "react";
import Menu from "./Menu";
import { useLocation } from "react-router-dom";

function Educationlogin(props){

    const location = useLocation();
    const data = location.state;
    const dataCours = data.coursPlan;

    function x(){
        return (
            dataCours.map((element) => {
                return (
                    <tr>
                        <td>{element.cours1}</td>
                    </tr>
                )
            })
        )
    }
    
    return (
         <Fragment>
            <Menu />
            <div className="card2">
                <div className="card2Name">   
                <h2>{data.CoursTitle}</h2>
                <h5>{data.CoursDescription}</h5>
                </div> 
                <div class="cardBig">
        <div class="card2Info">
                <a href="assets/form/index.php">سجل بالدورة</a>
                <hr />
                <h4>الوقت الاجمالي : 3 ساعات</h4>
                <h4>لغة الدورة : عربية انجليزية</h4>
                <h4>امكانية الوصول للمحاضرة في اي وقت</h4>
                <h4>شهادة المشاركة : نعم</h4>
                <h4>عدد الدروس : {dataCours.length}</h4>
                <div class="star">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
        </div>
        <div class="dawra1">
            <h6>محتوى الدورة</h6>
            <table>
                <tr>
                    <th>القسم الاول : 10 دروس</th>
                </tr>
                {x()}
            </table>
        </div>
        </div> 
        </div> 

        <div class="other">
      <div class="otherInfo">
        <h6>عن الدورة</h6> 
        <p>مع التطور التكنولوجي الحاصل في الآونة الأخيرة، أصبح إنشاء المتاجر الإلكترونية والبيع عبر الإنترنت من مصادر الدخل الأساسية والمهمة للكثيرين، مماتوفره هذه المتاجر من بدائل مريحة ومرنة لإدارة الأعمال وتحقيق الأرباح من دون الحاجة إلى التواجد في مقر العمل.</p> 
        <br /><p>ستتعلم في هذه الدورة التدريبية مجموعة شاملة ومهمة من الأسرار والأدوات المهمة لإنشاء موقع إلكتروني خاص بك، متجر إلكتروني، بورتفوليو، وكيفية إنشاء وإدارة أنظمة دفع مناسبة لإدارة أرباحك على المتاجر الإلكترونية.</p>   
      </div>
      <div class="author">
        <h6>المدرب</h6>
        <div class="author-info">
            <h3>خبير في تطوير المواقع والمتاجر الإلكترونية. يطمح إلى نشر الخبرة والمعرفة بطريقة سهلة للراغبين في تعلم إنشاء المواقع الإلكترونية والمتاجر لتحقيق الربح من أي مكان في العالم.</h3>
            <div class="author-info-I">
                <img src="assets/images/Profile-Male-PNG.png" alt="" /> 
                <h2>{data.CoursProf}</h2>
                <h5>مدرب محترف</h5>
            </div>
        </div>
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

export default Educationlogin