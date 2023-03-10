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
               <h1>???????????? ????????????????</h1>
               <p>???????????? ?????? ???????? ?????? ?????? ?????? ?????????? ?????? ???????? ???? ?????????? ????????????</p>
               <ul className="list-article">
                   <li><button onClick={handleClick} className="a1">???????????? ??????????????</button></li>
                   <li><button onClick={handleClick} className="a2">??????????</button></li>
                   <li><button onClick={handleClick} className="a3">?????????? ?? ????????</button></li>
                   <li><button onClick={handleClick} className="a4">?????????? ?? ??????????</button></li>
                   <li><button onClick={handleClick} className="a5">????????</button></li>
                   <li><button onClick={handleClick} className="a6">?????????? ?? ??????????</button></li>
                   <li><button onClick={handleClick} className="a7">???????????? ????????????</button></li>
                   <li><button onClick={handleClick} className="a8">???????????? ??????????????</button></li>
                   <li><button onClick={handleClick} className="a9">???????? ??????????</button></li>
               </ul>
               <a className="addArticle"><Link className='addArticle' to="/Addarticle">?????? ????????</Link></a>
                
               <Article 
                    ArticleCategorie="???????????? ??????????????" 
                    display = {displayArticle_1}
                />
               <Article 
                    ArticleCategorie="??????????" 
                    display = {displayArticle_2}
                />
                <Article 
                    ArticleCategorie="?????????? ?? ????????" 
                    display = {displayArticle_3}
                />
                <Article 
                    ArticleCategorie="?????????? ?? ??????????" 
                    display = {displayArticle_4}
                />
               <Article 
                    ArticleCategorie="????????" 
                    display = {displayArticle_5}
                />
                <Article 
                    ArticleCategorie="?????????? ?? ??????????" 
                    display = {displayArticle_6}
                />
                <Article 
                    ArticleCategorie="???????????? ????????????" 
                    display = {displayArticle_7}
                />
                <Article 
                    ArticleCategorie="???????????? ??????????????" 
                    display = {displayArticle_8}
                />
               <Article 
                    ArticleCategorie="???????? ??????????" 
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
                    <li><Link class="test" to="/">????????????????</Link></li>
                    <li><Link class="test" to="/addArticle">?????? ????????</Link></li>
                    <li><Link class="test" to="/">???????? ??????</Link></li>
                    <li><Link class="test" to="/">??????????????</Link></li>
               </ul>
        </section>

     </Fragment>   
)
}

export default Articles;