import React from "react";
import { Fragment } from "react";
import Menu from "./Menu";

function Addarticle(){
  return (
    <Fragment>
        <Menu />
        <div class="register">
            <img src="assets/images/signin.jpg" alt="" />
            <form method="POST" action="article.php" >
                <h2>سجل الأن معنا</h2>
                <input type="text" placeholder="الاسم و اللقب" name="name" />
                <input type="text" placeholder="رقم الهاتف" id="phone" name="phone"/>
                <input type="email" placeholder="بريدك الاكتروني" id="" name="email"/>
                <input type="text" placeholder="اسم المقال" id="catalogue_name" name="article_name"/>
                <textarea placeholder="وصف المؤسسة" id="catalogue_description" name="article">
                    اكتب مقالك ...
                </textarea>
                <input type="submit" class="form-submit" value="Register"/>
            </form>
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

export default Addarticle;