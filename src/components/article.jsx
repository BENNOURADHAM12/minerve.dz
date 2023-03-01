import react, { Fragment } from "react";
import ArticleComponents from "./artilcleComponents";
import { useLocation } from "react-router-dom";
import article1 from "../JSON/Articles/article1.json";
import article2 from "../JSON/Articles/article2.json"
import article3 from "../JSON/Articles/article3.json"
import article4 from "../JSON/Articles/article4.json"
import article5 from "../JSON/Articles/article5.json"
import article6 from "../JSON/Articles/article6.json"

function Article(props) {
  const location = useLocation();
  const data = location.state;

  const articlePrincipal = [
    {
      id: 5,
      articleName: "هكذا سيتم استيراد الجرّارات والعتاد الفلاحي أقل من 7 سنوات",
      articleImage: "assets/images/tracte.png",
      articleBody:
        "ينتظر أن تصدر النصوص التنظيمية المؤطرة لعملية استيراد العتاد الفلاحي المستعمل قبل نهاية شهر جانفي الجاري، ليشرع الفلاحون في استيراد الجرارات والماكينات المستعملة، مع العلم أن عددا من المعنيين قدّموا بمجرّد صدور قانون المالية",
      articleDate: "2023/01/08",
    },
    {
      id: 5,
      articleName: "زراعة",
      articleImage: "assets/images/tracte.png",
      articleBody:
        "ينتظر أن تصدر النصوص التنظيمية المؤطرة لعملية استيراد العتاد الفلاحي المستعمل قبل نهاية شهر جانفي الجاري، ليشرع الفلاحون في استيراد الجرارات والماكينات الميين قدّموا بمجرّد صدور قانون المالية",
      articleDate: "202308",
    },
  ];

  function x() {
    if (props.ArticleCategorie == "زراعة") {
      return article2.map((element) => {
        return (
          <ArticleComponents
            articleId={element.articleId}
            articleName={element.articleName}
            articleDate={element.articleDate}
            articleImage={element.articleImage}
          />
        );
      });
    } else if (props.ArticleCategorie == "اقتصاد الجزائر") {
      return article1.map((element) => {
        return (
          <ArticleComponents
            articleId={element.articleId}
            articleName={element.articleName}
            articleDate={element.articleDate}
            articleImage={element.articleImage}
          />
        );
      });
    }else if (props.ArticleCategorie == "تجارة و خدمات") {
      return article3.map((element) => {
        return (
          <ArticleComponents
            articleId={element.articleId}
            articleName={element.articleName}
            articleDate={element.articleDate}
            articleImage={element.articleImage}
          />
        );
      });
    }else if (props.ArticleCategorie == "اقتصاد العالم") {
      return article4.map((element) => {
        return (
          <ArticleComponents
            articleId={element.articleId}
            articleName={element.articleName}
            articleDate={element.articleDate}
            articleImage={element.articleImage}
          />
        );
      });
    }else if (props.ArticleCategorie == "سياحة و ثقافة") {
      return article5.map((element) => {
        return (
          <ArticleComponents
            articleId={element.articleId}
            articleName={element.articleName}
            articleDate={element.articleDate}
            articleImage={element.articleImage}
          />
        );
      });
    }else if (props.ArticleCategorie == "صناعة و طاقة") {
      return article6.map((element) => {
        return (
          <ArticleComponents
            articleId={element.articleId}
            articleName={element.articleName}
            articleDate={element.articleDate}
            articleImage={element.articleImage}
          />
        );
      });
    }
  }

  function z(){
    if(props.ArticleCategorie == "اقتصاد الجزائر"){
        if(data.articleId == 1){
          return <p>{article1[0].articleBody}</p>
        }else if(data.articleId == 2){
          return <p>{article1[1].articleBody}</p>
        }else if(data.articleId == 3){
          return <p>{article1[2].articleBody}</p>
        }else if(data.articleId == 4){
          return <p>{article1[3].articleBody}</p>
        }
      }else if(props.ArticleCategorie == "تجارة و خدمات"){
        if(data.articleId == 1){
        return <p>{article3[0].articleBody}</p>
      }else if(data.articleId == 2){
        return <p>{article3[1].articleBody}</p>
      }else if(data.articleId == 3){
        return <p>{article3[2].articleBody}</p>
      }else if(data.articleId == 4){
        return <p>{article3[3].articleBody}</p>
      }
    }else if(props.ArticleCategorie == "اقتصاد العالم"){
      if(data.articleId == 1){
        return <p>{article4[0].articleBody}</p>
      }else if(data.articleId == 2){
        return <p>{article4[1].articleBody}</p>
      }else if(data.articleId == 3){
        return <p>{article4[2].articleBody}</p>
      }else if(data.articleId == 4){
        return <p>{article4[3].articleBody}</p>
      }
    }else if(props.ArticleCategorie == "سياحة و ثقافة"){
      if(data.articleId == 1){
        return <p>{article5[0].articleBody}</p>
      }else if(data.articleId == 2){
        return <p>{article5[1].articleBody}</p>
      }else if(data.articleId == 3){
        return <p>{article5[2].articleBody}</p>
      }else if(data.articleId == 4){
        return <p>{article5[3].articleBody}</p>
      }
    }else if(props.ArticleCategorie == "صناعة و طاقة"){
      if(data.articleId == 1){
        return <p>{article6[0].articleBody}</p>
      }else if(data.articleId == 2){
        return <p>{article6[1].articleBody}</p>
      }else if(data.articleId == 3){
        return <p>{article6[2].articleBody}</p>
      }else if(data.articleId == 4){
        return <p>{article6[3].articleBody}</p>
      }
    }
  }

  function y() {
    return (
      <Fragment>
        {
            data == null ? console.log("vide") : 
            <div>
              <h2>{data.articleName}</h2>
              <img src={data.articleImage} alt="" />
               {z()}
              <span>{data.articleDate}</span>
              {console.log(data.articleId)}
            </div>
        }
      </Fragment>
    );
  }

  return (
    <Fragment>
      <section className="article-new onee" style={{ display: props.display }}>
        <div className="article-new-one">
          <h2>{props.ArticleCategorie}</h2>
          <ul>{x()}</ul>
        </div>

        <div className="article-new-two">{y()}</div>
      </section>
    </Fragment>
  );
}

export default Article;
