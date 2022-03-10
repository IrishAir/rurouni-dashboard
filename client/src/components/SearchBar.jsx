import React from 'react';

export default function SearchBar({setResult}) {
  return (
    <div className="exercises-page__block flex cols">
      <div className="exercises-search-area">
        <div>
          <input 
            className='search' 
            type="text"
            onChange={(event) => {setResult(event.target.value)}} />
        </div>
      </div>
    </div>  
  )
}