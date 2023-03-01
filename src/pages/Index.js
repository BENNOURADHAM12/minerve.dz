import React, { Fragment, useEffect, useState } from 'react';
import Menu from "./Menu";
import { Link } from 'react-router-dom';
import Article from '../components/article';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Inde(){

    useEffect(() => {
        AOS.init();
      }, [])

    /* const [displayArticle_1, setArticle_1] = useState("flex");
    const [displayArticle_2, setArticle_2] = useState("none");
    const [displayArticle_3, setArticle_3] = useState("none");
    const [displayArticle_4, setArticle_4] = useState("none");
    const [displayArticle_5, setArticle_5] = useState("none");
    const [displayArticle_6, setArticle_6] = useState("none");
    const [displayArticle_7, setArticle_7] = useState("none");
    const [displayArticle_8, setArticle_8] = useState("none");
    const [displayArticle_9, setArticle_9] = useState("none");
    

    const handleClick = (event) =>{
        if (event.currentTarget.classList.contains('a1')) {
            setArticle_1('flex');
            setArticle_2('none');
            setArticle_3('none');
            setArticle_4('none');
            setArticle_5('none');
            setArticle_6('none');
            setArticle_7('none');
            setArticle_8('none');
            setArticle_9('none');
         } else if(event.currentTarget.classList.contains('a2')){
             setArticle_1('none');
             setArticle_2('flex');
             setArticle_3('none');
             setArticle_4('none');
             setArticle_5('none');
             setArticle_6('none');
             setArticle_7('none');
             setArticle_8('none');
             setArticle_9('none');
         }else if(event.currentTarget.classList.contains('a3')){
             setArticle_1('none');
             setArticle_2('none');
             setArticle_3('flex');
             setArticle_4('none');
             setArticle_5('none');
             setArticle_6('none');
             setArticle_7('none');
             setArticle_8('none');
             setArticle_9('none');
         }
         else if(event.currentTarget.classList.contains('a4')){
            setArticle_1('none');
            setArticle_2('none');
            setArticle_3('none');
            setArticle_4('flex');
            setArticle_5('none');
            setArticle_6('none');
            setArticle_7('none');
            setArticle_8('none');
            setArticle_9('none');
        }else if(event.currentTarget.classList.contains('a5')){
            setArticle_1('none');
            setArticle_2('none');
            setArticle_3('none');
            setArticle_4('none');
            setArticle_5('flex');
            setArticle_6('none');
            setArticle_7('none');
            setArticle_8('none');
            setArticle_9('none');
        }
        else if(event.currentTarget.classList.contains('a6')){
            setArticle_1('none');
            setArticle_2('none');
            setArticle_3('none');
            setArticle_4('none');
            setArticle_5('none');
            setArticle_6('flex');
            setArticle_7('none');
            setArticle_8('none');
            setArticle_9('none');
        }else if(event.currentTarget.classList.contains('a7')){
            setArticle_1('none');
            setArticle_2('none');
            setArticle_3('none');
            setArticle_4('none');
            setArticle_5('none');
            setArticle_6('none');
            setArticle_7('flex');
            setArticle_8('none');
            setArticle_9('none');
        }
        else if(event.currentTarget.classList.contains('a8')){
            setArticle_1('none');
            setArticle_2('none');
            setArticle_3('none');
            setArticle_4('none');
            setArticle_5('none');
            setArticle_6('none');
            setArticle_7('none');
            setArticle_8('flex');
            setArticle_9('none');
        }else if(event.currentTarget.classList.contains('a9')){
            setArticle_1('none');
            setArticle_2('none');
            setArticle_3('none');
            setArticle_4('none');
            setArticle_5('none');
            setArticle_6('none');
            setArticle_7('none');
            setArticle_8('none');
            setArticle_9('flex');
        }
    } */

  return (
    <Fragment>
        <Menu />
       <section className="section1" data-aos="zoom-in" data-aos-duration="500">
               <h1>لا انتظار بعد اليوم .. <span>نحن المستقبل</span></h1>
               <p><span>مينارف</span>... خيارك الأفضل لمواكبة التطور</p>
               <p>نحن نجعل المشاريع الخاصة بك أكثر تميزاً.</p>
               <div>
                   <img src="assets/images/header_01.png" alt="" />
                   <img src="assets/images/header_02.png" alt="" />
                   <img src="assets/images/header_03.png" alt="" />
                   <img src="assets/images/header_04.png" alt="" />
               </div>
        </section>

        <section className="who" id="who" data-aos="fade-up" data-aos-duration="1000">
               <h1>لماذا تختارنا ؟</h1>
               <p>نحن في مينارف نملك فريق إبداعي يملك خبرة طويلة، كما أن الدعم الفني والصيانة ستكون فيما بعد حتى نضمن سير الأمور على أتم وجه.</p>
               <div className="whos" >
                   <img src="assets/images/minerveX.gif" alt="" className="gif" />
                   <div className="whosInfo">
                       <h2>تصميم وأسلوب يجعلانك تشعر دائما بالتميز</h2>
                       <p>المبدأ الأساسي الذي تقوم عليه أنشطتنا هو فهم حاجات العملا، مما يؤدي في النهاية إلى تلبية متطلبات العملاء واحتياجاتهم، فأكبر قوة لدينا هي سمعتنا وثقة الآخرين فينا ومعنا.</p>
                       <span className="first">يتم إنجاز المهمة بأدق التفاصيل وبأسرع وقت، كما أن الدعم الفني والصيانة ستكون فيما بعد حتى نضمن سير الأمور على أتم وجه.<img src="assets/images/icon7.png" alt="" /></span>
                       <span className="second">فنحن نقدم مجموعة واسعة من الحلول والخدمات التي تخدم جميع الشركات والمؤسسات والأشخاص.<img src="assets/images/icon8.png" alt="" /></span>
                       <span className="third">تحت مظلتنا الخبرات والمعدات الكافية وبها يتم إنجاز المهمة بأدق التفاصيل وبأسرع وقت.<img src="assets/images/icon9.png" alt="" /></span>
                   </div>
               </div>
           </section>

           <section className="whos2big">
               <section className="whos2">
                   <h1>ما الذي نقوم به ؟</h1>
                   <p>نحن في مينارف نملك فريق إبداعي يملك خبرة طويلة، كما أن الدعم الفني والصيانة ستكون فيما بعد حتى نضمن سير الأمور على أتم وجه.</p>
                   <img className="graphic" src="assets/images/3D.png" alt="" data-aos="fade-left" data-aos-duration="1000"/>
                   </section>
               <section className="whos2info">
                   <div>
                       <img src="assets/images/Profile-Male-PNG.png" alt="" />
                           <h3>عبد الرحمان</h3>
                           <h5>المدير العام</h5>
                       </div>
                   <p>نحن في مينارف نملك فريق إبداعي يملك خبرة طويلة، كما أن الدعم الفني والصيانة ستكون فيما بعد حتى نضمن سير الأمور على أتم وجه.</p>
               </section>
           </section>

           <section className="services" id="services">
               <h1>خدماتنا</h1>
               <p>نحن نقدم مجموعة واسعة من الحلول والخدمات التي تخدم جميع الشركات والمؤسسات والأشخاص.</p>
               <div className="row">
                   <div className="row1" >
                       <div className="rowinfo">
                           <h3>تصميم المواقع الالكترونية</h3>
                           <h5>قبل أن يباشر مصممينا في عملية التصميم، يتم صياغة فكرة التصميم بعناية وتطويرها وتحسينها من خلال الأفكار المتنوعة من قبل كافة أعضاء فريق العمل.</h5>
                       </div>
                       <img src="assets/images/icon2.png" alt=""  />
                           <span className="arrow11"></span>
                       </div>
                   <span className="line line1"></span>
                   <div className="row1">
                       <img src="assets/images/icon3.png" alt=""  />
                           <div className="rowinfo rowinfo2">
                               <h3>تطوير وبرمجة المواقع</h3>
                               <h5>نقوم باستخدام تكنولوجيات متعددة ومتنوعة من أجل الوصول الى أفضل النتائج. التكنولوجيات المفضلة لدينا تشتمل على تطبيقات الأجهزة الذكية وتطبيقات الويب.</h5>
                           </div>
                           <span className="arrow2"></span>
                       </div>
               </div>
               <div className="row row2">
                   <div className="row1">
                       <div className="rowinfo">
                           <h3>الوسائط المتعددة</h3>
                           <h5>نقدم مجموعة متكاملة من الوسائط المتعددة كخدمات تصميم العروض التقديمية للأعمال على الأقراص المدمجة، والتي تشتمل على إعلانات ومرسل بريد وعروض تقديمية للشركات.</h5>
                       </div>
                       <img src="assets/images/icon9.png" alt=""  />
                           <span className="arrow11"></span>
                       </div>
                   <span className="line"></span>
                   <div className="row1">
                       <img src="assets/images/icon8.png" alt=""  />
                           <div className="rowinfo rowinfo2">
                               <h3>التسويق الالكتروني</h3>
                               <h5>نضمن لك بأن يندرج الموقع الالكتروني الخاص بك ضمن أعلى نتائج البحث في كل محركات البحث الرئيسية من خلال طرق متعددة أحدها تضمين الكلمات المفتاحية.</h5>
                           </div>
                           <span className="arrow2"></span>
                       </div>
               </div>
           </section>

           {/* <section className="article" id="articles">
               <h1>مقالات اقتصادية</h1>
               <p>تابعنا أول بأول حتى تكن على اطلاع بما يدور في أروقة مينارف</p>
               <ul className="list-article">
                   <li><button onClick={handleClick} className="a1">اقتصاد الجزائر</button></li>
                   <li><button onClick={handleClick} className="a2">زراعة</button></li>
                   <li><button onClick={handleClick} className="a3">صناعة و طاقة</button></li>
                   <li><button onClick={handleClick} className="a4">سياحة و ثقافة</button></li>
                   <li><button onClick={handleClick} className="a5">بيئة</button></li>
                   <li><button onClick={handleClick} className="a6">تجارة و خدمات</button></li>
                   <li><button onClick={handleClick} className="a7">اقتصاد العالم</button></li>
                   <li><button onClick={handleClick} className="a8">اقتصاد المعرفة</button></li>
                   <li><button onClick={handleClick} className="a9">رواد اعمال</button></li>
               </ul>
               <a className="addArticle"><Link className='addArticle' to="/Addarticle">أضف مقال</Link></a>
                
               <Article 
                    ArticleCategorie="اقتصاد الجزائر" 
                    display = {displayArticle_1}
                />
               <Article 
                    ArticleCategorie="زراعة" 
                    display = {displayArticle_2}
                />
                <Article 
                    ArticleCategorie="صناعة و طاقة" 
                    display = {displayArticle_3}
                />
                <Article 
                    ArticleCategorie="سياحة و ثقافة" 
                    display = {displayArticle_4}
                />
               <Article 
                    ArticleCategorie="بيئة" 
                    display = {displayArticle_5}
                />
                <Article 
                    ArticleCategorie="تجارة و خدمات" 
                    display = {displayArticle_6}
                />
                <Article 
                    ArticleCategorie="اقتصاد العالم" 
                    display = {displayArticle_7}
                />
                <Article 
                    ArticleCategorie="اقتصاد المعرفة" 
                    display = {displayArticle_8}
                />
               <Article 
                    ArticleCategorie="رواد اعمال" 
                    display = {displayArticle_9}
                />
           </section> */}

           <section className="footer" id="foot">
                <div className="contact">
                        <div className="form">
                            <h2>للاتصال بنا</h2>
                            <p>سنرد على استفسارتكم بأسرع وقت ممكن،
                                وتأكد بأن رسالتك قيد المعالجة عند أول إشارة لوصولها لنا.</p>
                            <form className="submit">
                                <input type="text" placeholder="الاسم كاملا" name="name" />
                                <input type="email" placeholder="بريدك الاكتروني" name="email" />
                                <input type="number" placeholder="رقم الهاتف" name="phone" />
                                    <textarea placeholder="رسالتك" name="message"></textarea>
                                <button name="btn" type="submit">ارسال</button>
                                </form>
                        </div>
                        <div className="map">
                            <h2>اين يمكنك ايجادنا ؟</h2>
                            <p><i className="fa fa-map-marker" aria-hidden="true"></i>H599+CQ7, Al-Madinah Al-Munawarah Rd, Ar Rawdah, Jeddah 23434, Arabie saoudite</p>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3252.4797172287963!2d8.109282414596201!3d35.393358053314465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f9ed8a5f78ab6d%3A0x9a12b6299946da7f!2z2YXZitmG2KfYsdmBINmE2YTYqtmD2YjZitmGINmI2KfZhNiq2KPZh9mK2YQ!5e0!3m2!1sen!2sdz!4v1677487158566!5m2!1sen!2sdz" style={{height: "250px", border:"0"}}></iframe>
                        </div> 
                </div>
                
                               <div className="footer2">
                                   <div className="useful">
                                       <h1>روابط الموقع</h1>
                                       <p><i className="fa fa-angle-right" aria-hidden="true"></i><Link to="/">الرئيسية</Link></p>
                                       <p><i className="fa fa-angle-right" aria-hidden="true"></i><Link to="/">خدماتنا</Link></p>
                                       <p><i className="fa fa-angle-right" aria-hidden="true"></i><Link to="/">التكوين</Link></p>
                                       <p><i className="fa fa-angle-right" aria-hidden="true"></i><Link to="/">أضف مقال</Link></p>
                                   </div>
                                   <div className="useful">
                                       <h1>للاتصال بنا</h1>
                                       <p><i className="fa fa-phone" aria-hidden="true"></i> 037506928</p>
                                       <p><i className="fa fa-phone" aria-hidden="true"></i> 0542064499</p>
                                       <p><i className="fa fa-phone" aria-hidden="true"></i> 0668625878</p>
                                       <p><i className="fa fa-phone" aria-hidden="true"></i> 0669100213</p>
                                       <p><i className="fa fa-envelope" aria-hidden="true"></i> minerve1200@gmail.com</p>
                                       <p>حي 500 سكن عمارة ج رقم 12 عدل تبسة</p>
                                   </div><div className="useful">
                                       <h1>من نحن</h1>
                                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque a ipsam error sed at obcaecati, nulla labore repudiandae fugiat aspernatur nisi nostrum minima cum, earum consequatur optio consectetur unde minus!</p>
                                   </div>
                    </div>
           </section>
</Fragment>   
    )
}
export default Inde;