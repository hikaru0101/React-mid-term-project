import React from 'react';


const Dropdownmenu = ({category,handleChangeCategory}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
        
        <h2>Category:  </h2>
    <select value={category} onChange={handleChangeCategory}>
    
    <option value="">All</option>
    <option value="business">business</option>
    <option value="entertainment">entertainment</option>
    <option value="health">health</option>
    <option value="science">science</option>
    <option value="sports">sports</option>
    <option value="technology">technology</option>
  </select> 
  </div>



  
  );
}

export default Dropdownmenu;
