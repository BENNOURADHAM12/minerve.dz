import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SalonCards from '../components/salonCards';
import Menu from "./Menu";
import salon from "../JSON/Salons/salon.json"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Salon(){

    useEffect(() => {
        AOS.init();
      }, [])

    function x(){
        return salon.map((Element) => {
            return (
                <SalonCards 
                    SalonId={Element.SalonId}
                    SalonName={Element.SalonName}
                    SalonImage={Element.SalonImage}
                    SalonDescription={Element.SalonDescription}
                />
            )
        })
    }
    
   return (
    <Fragment>
        <Menu />

        <h2 data-aos="zoom-in" data-aos-duration="1000">الدليل الشامل للتظاهرات التجارية</h2>
        <p data-aos="zoom-in" data-aos-duration="1000">تصفح جميع التظاهرات التجارية المسجّلة على مينارف، وتعرّف على الفرص التي تقدّمها كلّ تظاهرة..
        </p>

        <section data-aos="zoom-in" data-aos-duration="1000">
        <form action="salon.php" method="POST" className="formCatalogue">
            <div>
                <div className="registerSearch"><input type="submit" value="ابحث" /></div>
            </div>
            <div>
                <label for="">مكان التظاهرة</label>
                <input type="text" name="place" />
            </div>
            <div>
                <label for="">اسم التظاهرة</label>
                <input type="text" name="name" />
            </div>
        </form>
        </section>

        <div className="register" data-aos="zoom-in" data-aos-duration="1000">
            <img src="assets/images/signin.jpg" alt="" />
            <form action="salonLogin.php" method="POST">
                <h2>سجل الأن معنا</h2>
                <input type="text" placeholder="الاسم و اللقب" name="name" />
                <input type="text" placeholder="اسم التظاهرة" name="salon_name" />
                <input type="text" placeholder="تاريخ التظاهرة" name="salon_date" />
                <input type="text" placeholder="ولاية التظاهرة" name="salon_wilaya" />
                <input type="text" placeholder="نوع التظاهرة" name="salon_type" />
                <input type="text" placeholder="رقم الهاتف" name="salon_phone" />
                <button>سجل</button>
            </form>
        </div>

        <div className="cards">
            {x()}
        </div>

        <section className="foot2">
            <ul className="listOne">
                <li><a href=""><img src="assets/images/facebook.png" alt="" /></a></li>
                <li><a href=""><img src="assets/images/youtube.png" alt="" /></a></li>
                <li><a href=""><img src="assets/images/instagram.png" alt="" /></a></li>
            </ul>
            <ul className="listTwo">
                <li><Link class="test" to="/">الرئيسية</Link></li>
                <li><Link class="test" to="/addArticle">أضف مقال</Link></li>
                <li><Link class="test" to="/">اتصل بنا</Link></li>
                <li><Link class="test" to="/">خدماتنا</Link></li>
            </ul>
        </section>

    </Fragment>
   )
}

export default Salon;
