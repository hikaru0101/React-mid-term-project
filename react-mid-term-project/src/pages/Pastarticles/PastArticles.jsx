
import React, { useState, useEffect } from 'react';
import axios from "axios";
import HeadlineCard from '../Headline/HeadlineCard'
// import SearchForm from './SearchForm';
import styled from "styled-components";
// import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
// import Pagination from './Pagination';
import { IconButton } from '@chakra-ui/react'
import './Pagination.css' 
import Searchbar from './Searchbar';
import { AiOutlineSearch } from 'react-icons/ai';
import 'tachyons';
// import Footer from '../Footer/Footer';

const API_KEY = "6a41e033eb3d41a6adc58d517de63386"
// const API_KEY = "2d45401a3a8647a39b7510d8ed94b1ca"

const Pagination = styled.div`
  button{
  
    cursor: pointer;
    &:hover{
      background-color: #000;
      color: #fff;
    }
  }
`;




const PastArticles = () => {


  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('apple');
  const [searchIn, setSearchIn] = useState('description');
  const [sources, setSources] = useState('');
  const [language, setLanguage] = useState('en');
  const [sortBy, setSortBy] = useState('');
  const [pageInformation,setPageInformation] = useState(1);
  const [pageSize,setPageSize] =useState(10);
  

  const handleSearch = (event) => {
    setQuery(event.target.value)
  }


  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&searchIn=${searchIn}&sources=${sources}&language=${language}&sortBy=${sortBy}&page=${pageInformation}&pageSize=${pageSize}&apiKey=${API_KEY}`);
        setArticles(response.data.articles);
        //カナダ表記の時間に変更
        const canadaTimezone = "Canada/Eastern";
        const canadaTimeArticles = response.data.articles.map(article => {
          const utcTime = new Date(article.publishedAt);
          const canadaTime = new Date(utcTime.toLocaleString("en-US", { timeZone: canadaTimezone }));
          // console.log(response.data.articles.length)

          return {
            ...article,
            publishedAt: canadaTime,

          };
        });

        setArticles(canadaTimeArticles);

      } catch (error) {
        console.log(`Error while fetching api: ${error}`);
      }
    }
    fetchNews();
  }, [query,pageInformation]);

  //ページネーション
  // const [currentPage, setCurrentPage] = useState(1);

//  const settleCurrentPage =()=>{
//   setCurrentPage(pageInformation);
//   console.log(currentPage+ "is showing")
//  };
  
  
  return (
    <div>
      
      
     <Searchbar handleSearch={handleSearch}/>
      
      {/* <input type="text" placeholder="SearchWord" onBlur={handleSearch} />
      <button type="submit" value="submit"><AiOutlineSearch /></button> */}
      
      {articles.map((article, index) => (

        <HeadlineCard
          key={index}
          img={article.urlToImage}
          title={article.title}
          description={article.description}
          url={article.url}
          author={article.author}
          publishedAt={article.publishedAt.toLocaleString()} />

      ))}

<div>
<Pagination style={{ padding: '80px' }}>
<button class="Pagination-num" onClick={() => setPageInformation(prevPage => prevPage > 1 ? prevPage - 1 : prevPage)}>≪</button>


  {/* <button class="Pagination-num" style={{ backgroundColor: (pageInformation === 1 || !pageInformation) ? 'gray' : 'white' }}onClick={()=>setPageInformation(1)} >1</button> */}
  <button class="Pagination-num" style={{ backgroundColor: pageInformation === 1 ? 'gray' : 'white' }} onClick={()=>setPageInformation(1) }>1</button>
  <button class="Pagination-num" style={{ backgroundColor: pageInformation === 2 ? 'gray' : 'white' }} onClick={()=>setPageInformation(2) }>2</button>
  <button  class="Pagination-num" style={{ backgroundColor: pageInformation === 3 ? 'gray' : 'white' }} onClick={()=>setPageInformation(3)}>3</button>
  <button class="Pagination-num" style={{ backgroundColor: pageInformation === 4 ? 'gray' : 'white' }} onClick={()=>setPageInformation(4)}>4</button>
  <button class="Pagination-num" style={{ backgroundColor: pageInformation === 5 ? 'gray' : 'white' }} onClick={()=>setPageInformation(5)}>5</button>
  <button class="Pagination-num"style={{ backgroundColor: pageInformation === 6 ? 'gray' : 'white' }} onClick={()=>setPageInformation(6)}>6</button>
  <button class="Pagination-num"style={{ backgroundColor: pageInformation === 7 ? 'gray' : 'white' }} onClick={()=>setPageInformation(7)}>7</button>
  <button class="Pagination-num" style={{ backgroundColor: pageInformation === 8 ? 'gray' : 'white' }}onClick={()=>setPageInformation(8)}>8</button>
  <button class="Pagination-num" style={{ backgroundColor: pageInformation === 9 ? 'gray' : 'white' }}onClick={()=>setPageInformation(9)}>9</button>
  <button class="Pagination-num" style={{ backgroundColor: pageInformation === 10 ? 'gray' : 'white' }}onClick={()=>setPageInformation(10)}>10</button>
  <button class="Pagination-num" onClick={() => setPageInformation(prevPage => prevPage < createPagination().length ? prevPage + 1 : prevPage)}>≫</button>
  </Pagination>
  </div>

    </div>



  );
}

export default PastArticles;
