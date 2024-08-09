import React, { useCallback, useState } from 'react'
import { IoIosSearch, IoMdMic } from 'react-icons/io'
import { useNavigate } from 'react-router';
const SearchInput = () => {
const [query, setQuery] = useState('');
const navigate = useNavigate();
const handleOnEnter= useCallback((e)=>{
 if(e.key==="Enter"){
   navigate(`/search/${query}`)
 }
},[query]);

  return (
    <div className=' flex w-[35%] items-center'>
    <div className='border-[4px] p-[1px] border-[#f0f0f0] w-[100%] flex items-center rounded-l-full'>
         <input type="text" placeholder='search'  className='cursor-pointer outline-none w-full ml-2'   onChange={(e) => setQuery(e.target.value)} onKeyDown={handleOnEnter}/>
    </div>
        <button className='bg-[#f0f0f0] rounded-r-full p-[5px] w-12'><IoIosSearch size={"24px"}/></button>
    
        <IoMdMic size={"30px"} className='p-[2px]  w-12 h-8 rounded-full cursor-pointer bg-[#f8f8f8]  ml-5 hover:bg-[#f0f0f0] duration-200' />
    </div>
  )
}

export default SearchInput;
