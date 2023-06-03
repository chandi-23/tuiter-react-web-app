import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoMdRepeat } from "react-icons/io";
import  { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";


const TuitStats = (
    {
        tuit =   {
         "_id": 234,
         "topic": "Space",
         "userName": "SpaceX",
         "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
         "time": "2h",
         "image": "spacex.jpg",
         "liked": true,
         "replies": 0,
         "retuits": 0,
         "likes": 0,
         "handle": "@spacex",
         "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
       }
      }
) => {
    const [isLiked, setIsLiked] = useState(tuit.liked);
    const [likeCount, setLikeCount] = useState(tuit.likes);
    //console.log(isLiked, likeCount)

    const handleLike = () => {
        //console.log("inside the handle like")
        if (isLiked) {
        setLikeCount(likeCount - 1);
        } else {
        setLikeCount(likeCount + 1);
        }
        setIsLiked(!isLiked);
    };

    return(

      <div className="col-10"> 
        <div className="d-flex justify-content-between">
          <div ><FaRegComment size={25}/> {tuit.replies}</div>
          <div><IoMdRepeat size={25} /> {tuit.retuits}</div>
          <div onClick={handleLike}>
             {isLiked ? (
            <AiFillHeart size={25} style={{ color: "red" }} />
            ) : (
            <AiOutlineHeart size={25} />
            )}
            {likeCount}
         </div>
          <div><FiUpload size={25}/></div>
      </div>
      </div>

 );
};
export default TuitStats;