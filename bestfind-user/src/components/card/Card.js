import "./Card.css";

export default function Card(props) {
  return (
    <div>
      <div className="card" >
        <div className="cardTitle">{props.title}</div>
        <div className="cardText">{props.text}</div>
        <img className="cardImg" alt="img about topic " src={props.imgUrl} />
        <div className="cardWebsiteName">{props.websiteName}</div>
        <div className="cardType">
          <span className="leftSide">Type:</span>{" "}
          <span className="rightSide">{props.type} </span>{" "}
        </div>
        <div className="cardCategory">
          <span className="leftSide">Category:</span>{" "}
          <span className="rightSide">{props.category} </span>
        </div>
        <div className="cardTags">
          {props.tags.map(function (tag , index) {
            return <span key={index} className="tag">{tag}</span>;
          })}
        </div>
        <div className="cardReview"> {props.review}</div>
      </div>
    </div>
  );
}
