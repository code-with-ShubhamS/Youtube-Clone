import React from 'react'
import { useSelector } from 'react-redux';
import SideBar from './SideBar';
import Video from './Video'
import ListItems from './ListItems';
import LoadingData from './LoadingData'
const Home = () => {
    const Data = useSelector((store) => store.StoreAllData);
    // console.log(Data)
    const showSideBar= useSelector(store=>store.SideBarHamBurger)
    const Loading=useSelector(store=>store.Loading);
  
  return (
    <div className='flex'>
       {showSideBar&&  <SideBar />}
      <div className=' h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden w-[100%]'  style={{scrollbarWidth:"thin",scrollbarColor:"#fafafa #ffffff"}}>
      <ListItems />

      {Loading.fetchStatus ?<LoadingData/>:<div className='flex gap-2 justify-center flex-wrap'>
        {Data.map((item,index)=> {
          if(item.type=="video"){
            return (<Video key={index} video={item.video}/>)
          }
        })}
        </div>
      }
       
      </div>
    </div>
  )
}

export default Home
