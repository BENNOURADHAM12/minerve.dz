import React, {Fragment, useEffect} from "react";
import Menu from "./Menu";
import CatalogueCards from "../components/CatalogueCards";
import catalogue from "../JSON/Catalogues/catalogue.json"
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


function Catalogue(){

    useEffect(() => {
        AOS.init();
      }, [])

    console.log(catalogue)
    function x(){
        return catalogue.map((Element) => {
            return (
                <CatalogueCards 
                    CatalogueId={Element.CatalogueId}
                    CatalogueName={Element.CatalogueName}
                    CatalogueDescription={Element.CatalogueDescription}
                    CatalogueImage={Element.CatalogueImage}
                />
            )
        })
    } 

  return (
     <Fragment>
      <Menu />

        <h2 data-aos="zoom-in" data-aos-duration="1000">الدليل الشامل للمؤسسات الأكاديمية والشركات والمنظّمات</h2>
        <p data-aos="zoom-in" data-aos-duration="1000">تصفح جميع المؤسسات المسجّلة على مينارف، وتعرّف على الفرص التي تقدّمها كلّ مؤسسة. يمكنك أيضًا متابعة المؤسسة المفضلة لديك لرؤية الفرص التي يتم إضافتها أولا بأول، والتقديم إليها قبل مباشرة.
        </p>

        <section>
        <form className="formCatalogue" data-aos="zoom-in" data-aos-duration="1000">
            <div>
                <div className="registerSearch"><input type="submit" value="ابحث" /></div>
            </div>
            <div>
                <label for="">مكان المؤسسة</label>
                <input type="text" name="place" />
            </div>
            <div>
                <label for="">اسم المؤسسة</label>
                <input type="text" name="name" />
            </div>
        </form>
        </section>

        <div class="register" data-aos="zoom-in">
            <img src="assets/images/signin.jpg" alt="" />
            <form method="POST" action="catalogueLogin.php" >
                <h2>سجل الأن معنا</h2>
                <input type="text" placeholder="الاسم و اللقب" name="name" />
                <input type="text" placeholder="رقم الهاتف" id="phone" name="phone"/>
                <input type="text" placeholder="اسم المؤسسة" id="catalogue_name" name="catalogue_name"/>
                <input type="text" placeholder="شعار المؤسسة" id="catalogue_logo" name="catalogue_logo"/>
                <input type="text" placeholder="موقع الاكتروني للمؤسسة" id="catalogue_site" name="catalogue_site"/>
                <textarea placeholder="وصف المؤسسة" id="catalogue_description" name="catalogue_description">
                    
                </textarea>
                <input type="text" placeholder="بريدك الاكتروني" id="catalogue_email" name="catalogue_email"/>
                <button>سجل</button>
            </form>
        </div>

        <div class="cards">
             {x()}
        </div>

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

export default Catalogue;