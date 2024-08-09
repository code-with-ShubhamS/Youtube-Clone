import { abbreviateNumber } from "js-abbreviation-number";
import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Timer from "./Timer";
import { Link } from "react-router-dom";


const Video = ({ video }) => {
  
  return <>
    <Link to={`/VideoPlay/${video?.videoId}`} >
      <div className="VideoContainer ">
      <div className="videos w-[20rem] " >
      <div className="relative  rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img
              className="h-full w-full"
              src={video?.thumbnails[0]?.url}
        
              alt=""
            />
            {video?.lengthSeconds && <Timer time={video?.lengthSeconds} />}
          </div>

           {/* channerl logo & title */}
           <div className="flex mt-3 space-x-2 items-center">
            <div className="flex items-start">
              <div className="flex h-9 w-9 rounded-full overflow-hidden border">
                <img
                  className="h-full w-full rounded-full overflow-hidden"
                  src={video?.author?.avatar[0].url}
                  alt=""
                />
              </div>
            </div>
            <span className="text-sm font-bold line-clamp-2">
                {video?.title}
              </span>
            </div>

            <div className="ml-10">
              <span className="flex items-center font-semibold  text-[15px] text-gray-600">
                 {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
                )} 
              </span>

              <div className="flex text-gray-500 text-[12px]">
                <span>{`${abbreviateNumber(
                  video?.stats?.views,
                  2
                )} views`}</span>
                <span className="flex text-[24px] leading-none font-bold relative top-[-10px] mx-1">
                  .
                </span>
                <span>{video?.publishedTimeText}</span>
                </div>
              </div>
      </div>
     </div>
     </Link>
  </>
}

export default Video;
