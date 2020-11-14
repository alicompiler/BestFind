import React, { useState , useEffect } from "react";
import Repository from "../Repository"


export default function Card() {
const [items, setItems] = useState([]);





function getData() {
    var repo = new Repository();
    let items = repo.fake ;
    setItems(items) ;

}

function fillData() {

    return (
        
       items.map(function(item,index) {

        return(
        <div className="card" key={index} id={index}>
        <div className="cardTitle">{ item.title}</div>
        <div className="cardText">{item.text}</div>
        <img className="cardImg" alt="img about topic " src={item.imgUrl}/>
        <div className="cardWebsiteName">{item.websiteName}</div>
        <div className="cardType">{item.type}</div>
        <div className="cardCategory" >{item.category}</div>
        <div className="cardTags" >{item.tags}</div>
        <div className="cardReview" >{item.review}</div>


        </div>

          )

    }) 

     )}

    



   
useEffect(() => { getData();} ,[] );

return(fillData())


}