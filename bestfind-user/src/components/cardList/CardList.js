import React from "react";
import Card from "./../card/Card";
import "./CardList.css";

export default class cardList extends React.Component {
  render() {

    if (this.props.status == "loading") {
      return <div> LOADING -- THERE IS NO DATA</div>;
    }
    if (this.props.status == "error") {
      return <div> ERROR -- THERE IS NO DATA</div>;
    }
   
    return this.props.data.map(function (item, index) {
      return (
        <div key={index}>
          <Card
            title={item.title}
            text={item.text}
            imgUrl={item.imgUrl}
            webSiteName={item.webSiteName}
            type={item.type}
            category={item.category}
            review={item.review}
            tags={item.tags}
          />
          <hr className="hrS" />
        </div>
      );
    });
  }
}
