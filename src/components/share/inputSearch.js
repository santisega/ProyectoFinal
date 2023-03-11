import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function InputSearch({refSearch, byItems}){

return(     
        <div className="input-container">
            <button className="searchButton flex">
            <SearchIcon/>
            </button>
            <input  ref={refSearch} 
                    className="input roboto flex"
                    type="text"  
                    defaultValue="" 
                    placeholder='Buscar producto ...' 
                    onChange={byItems} 
            />
        </div>
  
    )
};
export default InputSearch;