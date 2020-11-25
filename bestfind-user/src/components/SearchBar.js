import './searchBar.css';

import { useState , useEffect } from "react";
import { useDispatch } from 'react-redux'


export default function SearchBar() {
    const [searchText , setSearchText] = useState([]);
    const [searchPosition , setPosition] = useState('center');
    const dispatch = useDispatch()


    function changeCardStatus (cardStatus) {
      dispatch({ 
        type: 'changeCardStatus',
        cardStatus: cardStatus
      })
    } 

    

     function searchHandler(event) {
        event.preventDefault();
        setSearchText(event.target.value);

      }
      function  positionHandler(event) {
        event.preventDefault();
        setPosition('top');
        changeCardStatus("enable")

      }




      

    return(
        <div className={searchPosition + " " + "header"}  >

            <form className="searchForm"  onSubmit={positionHandler} action="#">
                   <input  className="searchBar" type="text" name="SearchText" placeholder="Find the best result"  onChange={searchHandler}/>
                   <input  className="searchBtn" type="submit" value="GO" />
            </form>

        </div>
    )



}