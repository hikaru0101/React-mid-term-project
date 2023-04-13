import React, { useState, useEffect } from 'react';
import axios from "axios";
import HeadlineCard from './HeadlineCard';
import Dropdownmenu from './Dropdownmenu';
import 'tachyons';
import { 
  Container,
  ListGroup,
  ListGroupItem
} from "reactstrap"

// const API_KEY = "6a41e033eb3d41a6adc58d517de63386"
const API_KEY = "2d45401a3a8647a39b7510d8ed94b1ca"


const NewsList = () => {
  const [category, setCategory] = useState('');
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&language=en&apiKey=${API_KEY}`);
        setArticles(response.data.articles);
          //カナダ表記の時間に変更
          const canadaTimezone = "Canada/Eastern";
          const canadaTimeArticles = response.data.articles.map(article => {
            const utcTime = new Date(article.publishedAt);
            const canadaTime = new Date(utcTime.toLocaleString("en-US", { timeZone: canadaTimezone }));
            return {
              ...article,
              publishedAt: canadaTime,
            };
          });
          setArticles(canadaTimeArticles);
          console.log(canadaTimeArticles);
        console.log(response.data.articles);
        console.log(response.publishedAt.articles);
      } catch (error) {
        console.log(`Error while fetching api: ${error}`);
      }
    }
    fetchNews();
  }, [category]);


  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  return (

    
    <div>
      <h2 class="baskerville fw1 ph3 ph0-l">Headline News</h2>
      <p>To read more, click the article.You'll jump to the source. </p>
      <Dropdownmenu category={category} handleChangeCategory={handleChangeCategory} />
      
     

      
      {articles.map((article, index) => (
        
        <HeadlineCard
        key={index}
        img={article.urlToImage}
        title={article.title}
        description={article.description}
        url={article.url} 
        author={article.author}
        publishedAt={article.publishedAt.toLocaleString()}/>
      ))}
    </div>
  );
}

export default NewsList;

