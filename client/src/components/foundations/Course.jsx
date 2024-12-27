import React, { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Navigate} from "react-router-dom";

import axios from "axios";
import { useProgress } from "../dashboards/useProgress";

function Course({ post, setPercentage, percentage, email, status, username, postCourse, setPostCourse }) {
  const [clicked, setClicked] = useState(false);
  const [iconColor, setIconColor] = useState("gray");
  const [posts, setPosts] = useState([]);
  const {isLoading, users, error} =  useProgress();

  const [id, setId]= useState(0);
  

    console.log(postCourse)
      const handlePoint = () => {
      setClicked(!clicked);
      setIconColor(clicked ? "gray" : "green");
      console.log(percentage)
    };
    const handleId =() => {
      setId(post._id)
    } 
  
    // useEffect(() => {
    //   const fetchPostsContent = async () => {
    //     try {
    //       const { data } = await axios.get("/posts");
    //       setPosts(data);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
    //   fetchPostsContent();
    // }, []);
    useEffect(() => {
      try {
        if(users) {
          // const course = courses.data
          // console.log(course)
          setPosts(users)
        }
      } catch (error) {
        console.error(error);
      }
  }, [users]);

    
  //console.log(currentId)
  
  return (
    <>
      <div
        className="flex items-center justify-between gap-8 pt-5"
        key={post._id}
      >
         {id === 0  ? (
          <>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 w-6 dark:text-gray-500 text-gray-700 group-hover:text-gray-500 dark:group-hover:text-gray-400 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            ></path>
          </svg>
          <button onClick={handleId}>
          <p className="text-lg  text-black">{post.subtitle}</p> 
          </button> 
        </div>  
        <button  onClick={handlePoint}>
          <CheckCircleIcon fontSize="large" sx={{ color: iconColor }} />
        </button>
        </>
        ) : (
          <>
          <Navigate to={"/description/" + id}/>
          </>
       )
       }
      </div>
      </>
  )
}

export default Course;
