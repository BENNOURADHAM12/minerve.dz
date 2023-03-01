import React, {Fragment, useState} from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import Article from '../components/article';
function Articles(){

    const [displayArticle_1, setArticle_1] = useState("flex");
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
    }
  return (
     <Fragment>
      
        <Menu />
             
        <section className="article" id="articles">
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

export default Articles;