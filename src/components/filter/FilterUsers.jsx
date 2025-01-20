import React from 'react'
import { useState } from 'react';

const FilterUsers = ({onFilter}) => {

    const [filter, setFilter] = useState("ALL");
    const handleButtonClick = (status) =>{
        if(status == filter){
            onFilter("ALL");
            setFilter("ALL")
        }
        else{
            onFilter(status);
            setFilter(status);
        }
    }

  return (
    <div className='FilterUser'>
        <button className={`status ${filter == "ACTIVE"? 'active':''}`}  onClick={() => handleButtonClick("ACTIVE")}>ACTIVE</button>
        <button className={`status ${filter == "INACTIVE"? 'inactive':''}`} onClick={() => handleButtonClick("INACTIVE")}>INACTIVE</button>
    </div>
  )
}

export default FilterUsers
