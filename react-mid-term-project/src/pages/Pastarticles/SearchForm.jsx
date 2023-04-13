import React, { useState } from 'react';


    const SearchForm = ({ handleSearch }) => {
        const [query, setQuery] = useState('');
      
        const handleChange = (e) => {
          setQuery(e.target.value);
          handleSearch(e);
        };

    

  return (
    //まずは検索ワードから完成させる
    <div>
       
        <input type="text" value={query} onChange={handleChange}
          placeholder="Search articles..." />
        
      
    </div>
  );
}



export default SearchForm;
