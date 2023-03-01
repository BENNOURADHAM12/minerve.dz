import react from 'react';
import { Link } from 'react-router-dom';

function ArticleComponents(props){

    const myData = {
        articleId: props.articleId, 
        articleName: props.articleName,
        articleDate: props.articleDate,
        articleImage: props.articleImage,
      }

    return (
            <li>
                <div className="one" articleId={props.articleId}>
                    <Link to="/Articles" state={myData} ><h3>{props.articleName}</h3></Link>
                    <span>{props.articleDate}</span>
                    </div>
                <div className="two">
                    <img src={props.articleImage} alt="" />
                </div>
            </li>  
    )

}

export default ArticleComponents