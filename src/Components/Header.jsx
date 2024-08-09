import React, { useCallback, useEffect, useState } from 'react'
import logo from '/YouTube_logo.png'
import mylogo from '/myLogo.jpg'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { SideBarHamBurgerAction } from '../Store/SideBarRender';
import {  useNavigate } from 'react-router-dom';
import { MobileSideBarAction } from '../Store/MobileSIdeBarRendering';
import { IoSearchSharp } from "react-icons/io5";
import SearchInput from './SearchInput';

const Header = () => {
  const [width,setWidth]= useState(window.innerWidth)
  const [showSearch,setShowSearch]= useState(false)
 const dispatch= useDispatch()
 const [query, setQuery] = useState('');
 const navigate = useNavigate();
 const handleOnEnter= useCallback((e)=>{
  if(e.key==="Enter"){
    navigate(`/search/${query}`)
  }
 },[query]);


useEffect(()=>{
  function handleResize(){
    console.log("resize")
    setWidth(window.innerWidth);
    if(window.innerWidth > 500){
      setShowSearch(false)
    }
    if(window.innerWidth<=900){
      dispatch(MobileSideBarAction.isInMobile());
    }
    else if(window.innerWidth>900){
      dispatch(MobileSideBarAction.isInLap());
    }
  }
  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
},[])

function handleOnHamburgerClick(){
  dispatch(SideBarHamBurgerAction.hamburgerClick())
}
function SearchBtnClicked(){
  setShowSearch(true);
}


  return (
    <>
    <div className='border  flex justify-between px-2 py-1 items-center w-[100%]'>
      <div className=' flex items-center gap-4 p-2'>
      <GiHamburgerMenu onClick={handleOnHamburgerClick} className='text-xl cursor-pointer'/>
       {width > 420 && <img src={logo} alt="youtubeLogo" className='w-24 cursor-pointer'/>} 
      </div>

         {width > 500 && <SearchInput />}

    {showSearch?   <div className=' flex w-[70%] items-center'>
    <div className='border-[4px] p-[1px] border-[#f0f0f0] w-[100%] flex items-center rounded-l-full'>
         <input type="text" placeholder='search'  className='cursor-pointer outline-none w-full ml-2'   onChange={(e) => setQuery(e.target.value)} onKeyDown={handleOnEnter}/>
    </div>
        <button className='bg-[#f0f0f0] rounded-r-full p-[5px] w-12'><IoIosSearch size={"24px"} /></button>
    
    </div>     
    
    :

     <div className=' flex gap-4 items-center p-2'>
        {width < 500 && <IoSearchSharp size={"24px"} className='cursor-pointer'  onClick={SearchBtnClicked}/>}
      <AiOutlineVideoCameraAdd className='text-xl'/>
      <FaRegBell className='text-xl'/>
      <img src={mylogo} alt="myProfile" className='w-8 rounded-full'/>
      </div>
}
      
    </div>
 
    </>
  )
}

export default Header
