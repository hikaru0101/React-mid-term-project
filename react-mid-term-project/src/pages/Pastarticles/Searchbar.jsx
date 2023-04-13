import React from 'react';
import './Searchbar.css';
import styled from "styled-components";
import { AiOutlineSearch } from 'react-icons/ai';


// const SearchBox = styled.div`



const Searchbar = ({handleSearch}) => {
  return (
    <div style={{padding: "40px"}}>
   <div  class="search-form-002">
    <label>
        <input type="text" placeholder="Search Words" onBlur={handleSearch}/>
    </label>
    {/* <button type="submit" aria-label="検索"></button> */}
    <button  aria-label="検索"></button>
</div>
    </div>
  );
}

export default Searchbar;
//formをdivに変更したら一応動くようになった