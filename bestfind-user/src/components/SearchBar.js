
import { useState , useEffect } from "react";

export default function SearchBar() {
    const [searchText , setSearchText] = useState([]);


    

     function searchHandler(event) {
        event.preventDefault();
        setSearchText(event.target.value);

      }

      

    return(
        <div className="header">

            <form className="searchForm" action="#">
                   <input  className="searchBar" type="text" name="SearchText" placeholder="Find the best result"  onChange={searchHandler}/>
            </form>

        </div>
    )



}