import { useState, useEffect } from "react";
import Repository from "../Repository"
import './Card.css';
import {useSelector , useDispatch} from 'react-redux';


export default function Card() {
    const [items, setItems] = useState(['loading']);
    const status = useSelector(state => state.cardStatus)

    const dispatch = useDispatch()


  /*  function changeCardStatus(cardStatus) {
      dispatch({
        type: 'changeCardStatus',
        cardStatus: cardStatus
      })
    } */


   let getData = async () => {
        var repo = new Repository();
        console.log(repo.fake)
        try {
            let items = await repo.fake();
            
            setItems(items);
        }catch{
            setItems(["error"]);            

        }
    }

    function fillData() {

        if(status=== "disable"){
            return <div> </div>
            } 
            
            if(status==="enable"){
                if (items[0]==="loading" ||items[0]==="error"  ){
                    return <div><h1>{items[0]}</h1></div>
                }else return (
                    <div> 
                        <div className="topText">Search results<hr className="hrL" />
                        </div>
                        { items.map(function (item, index) {
                            return (
                                <div>
                                    <div className="card" key={index} id={index}>
                                        <div className="cardTitle">{item.title}</div>
                                        <div className="cardText">{item.text}</div>
                                        <img className="cardImg" alt="img about topic " src={item.imgUrl} />
                                        <div className="cardWebsiteName">{item.websiteName}</div>
                                        <div className="cardType"><span className="leftSide">Type:</span> <span className="rightSide">{item.type} </span> </div>
                                        <div className="cardCategory" ><span className="leftSide">Category:</span> <span className="rightSide">{item.category} </span></div>
                                        <div className="cardTags" >{item.tags.map(function(tag) {
                                            return(<span className="tag">{tag}</span>)
                                        })}</div>
                                        <div className="cardReview">  {item.review}</div>
                                    </div>
                                    <hr className="hrS" />
        
                                </div>
                            )
        
                        })
                        }
                    </div>
        
                )
            }
    
            
            
            
         
        
    }






    useEffect(() => { getData(); }, []);

    return (fillData())


}