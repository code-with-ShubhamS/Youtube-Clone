import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import fetchData from '../Utilities/FetchingData';
import SearchCard from './SearchCard';
import { useSelector } from 'react-redux';
import SideBar from './SideBar';
import LoadingData from './LoadingData';

const Search = () => {
  const {searchElement}= useParams()
  const [result, setResult] = useState();
  const showSideBar= useSelector(store=>store.SideBarHamBurger)
  const Loading=useSelector(store=>store.Loading);
  useEffect(() => {
    fetchSearchResults();
  }, [searchElement]);

  const fetchSearchResults = () => {
    fetchData(`search/?q=${searchElement}`).then(({ contents }) => {
      console.log(contents);
      setResult(contents);
    });
  };
  
  return (
    <>
    
    {Loading.fetchStatus? <LoadingData/> : <div className="">
    <div className="mt-4 flex flex-row h-[calc(100%-56px)]">
    {showSideBar &&  <SideBar/>}
      <div className="grow h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
        <div className=" grid grid-cols-1 gap-2 p-2">
          {result?.map((item, index) => {
            if (item?.type !== "video") return false;
            return <SearchCard key={index} video={item?.video} />;
          })}
        </div>
      </div>
    </div>
  </div>}
    
  </>
  )
}

export default Search
