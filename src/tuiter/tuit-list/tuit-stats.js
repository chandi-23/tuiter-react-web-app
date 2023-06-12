import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoMdRepeat } from "react-icons/io";
import  { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { FaThumbsDown } from 'react-icons/fa';

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
         "dislikes":0,
         "handle": "@spacex",
         "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
       }
      }
) => {
    const [isLiked, setIsLiked] = useState(tuit.liked);
    const [likeCount, setLikeCount] = useState(tuit.likes);
    const [dislikeCount, setdisLikeCount] = useState(tuit.dislikes);

    //console.log(isLiked, likeCount)
    const dispatch = useDispatch();
    return(

      <div className="col-10"> 
        <div className="d-flex justify-content-between">
          <div ><FaRegComment size={25}/> {tuit.replies}</div>
          <div><IoMdRepeat size={25} /> {tuit.retuits}</div>
          <div>
          <FaHeart
            className="text-danger"
            onClick={() =>
              dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))
            }
            />
            <span className="ms-2">{tuit.likes}</span></div>
          <div>
          <FaThumbsDown
            color="blue"
            onClick={() =>
              dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1 }))
            }
            />
            <span className="ms-2">{tuit.dislikes}</span>
          </div>
            

          <div><FiUpload size={25}/></div>
      </div>
      </div>

 );
};
export default TuitStats;