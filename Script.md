1. Make an header, sideBar and Show videos 
2. We have three pages One is home page ,second is Search page whenever we search we go to that page and third we have video play page in which weplay video and also show related video 

3. for searching we do api call and for play video we can do another api call


 useEffect(()=>{ window.addEventListener('resize', handleResize)},[] );
4. When window is resize we use window.innerWidth for checking width 

5. we use navigate to go to some other page when key ==Enter

6. rendering video on the basis of some condition   {Data.map((item,index)=> {
          if(item.type=="video"){
            return (<Video key={index} video={item.video}/>)
          }
        })}


7. we also use the params to take the video name from the search (Define in router )     
8. we also used react player to play the video 
abbrivateNumber   