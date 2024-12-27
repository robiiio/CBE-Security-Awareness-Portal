import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";
import UserNavBar from "../UserNavBar";
import Footer from "../foundations/Footer";
import CircularProgressBar from "../CircularProgressBar";
import { CircularProgress } from "@mui/material";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { useDispatch } from "react-redux";
import { updatedPost } from "../../actions/posts";
import { useCourses } from "../foundations/useCourses";
import { useProgress } from "../dashboards/useProgress";

function Details({ percentage, setPercentage}, props) {
  const [postsContent, setPostsContent] = useState([]);
  const [posts, setPosts] = useState([]);
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const [plus, setPlus] = useState(5);
  const { id } = useParams();
  const [currentId, setCurrentId] = useState(id);
  const [postId, setPostId] =useState(null)
  const [count, setCount] = useState(0);
  const location = useLocation();
  const {isLoading, courses, error} = useCourses();
  const {isLoading: isProgressing, users, error: progressError} =  useProgress();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
 
  // useEffect(() => {
  //   setUser(JSON.parse(localStorage.getItem("profile")));
  // }, [location]);

  // useEffect(() => { 
  //   const fetchPostsContent = async () => {
  //     try {
  //       const { data } = await axios.get("/courses/foundations");
  //       setPostsContent(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchPostsContent();
  // }, []);

  // useEffect(() => { 
  //   const fetchPosts = async () => {
  //     try {
  //       const { data } = await axios.get("/posts");
  //       setPosts(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchPosts();
  // }, []);
  useEffect(() => {
    try {
      setUser(JSON.parse(localStorage.getItem("profile")));
      if(courses) {
        const course = courses.data
        setPostsContent(course)
      }
      if(users) {
           const user = users.data
        setPosts(user)
      }
    } catch (error) {
      console.error(error);
    }
}, [courses,users, location]);


  const filteredPosts = postsContent.filter((post) => post._id === id);
  const filteredPost = postsContent.filter((post) => post._id !== id);
  const filtered = posts.filter((post) => post.username === user.result.name )
  

  const handleMark = () => {
    setClicked(!clicked);
    setPostId(filtered[0]._id)
    if(percentage < 5){
    setPercentage(filteredPosts[0].points )
    }else{
      setPlus( plus + 5 )
      setPercentage(filteredPosts[0].points + plus )
    }
  } 

  const handleNext = (e) => {
    e.preventDefault();
    console.log(percentage)
   dispatch(updatedPost(postId ,percentage));
    setClicked(!clicked);
   // setPercentage(0);
    if(count < filteredPost.length){
      setCount(count + 1);
    setCurrentId(filteredPost[count]._id);
    }
  }
  const handleViewCourse = () => {
   
  }

  return !postsContent.length ? (
    <CircularProgress />
  ) : (
    <div className="bg-gray-200">
      <div className="bg-gray-50">
        <UserNavBar />
        <div className="mx-15 ">
          <div className="flex justify-center ">
            <CircularProgressBar percentage={percentage} />
          </div>
          <div className="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8">
            <h1 className="text-3xl font-medium text-center tracking-tight text-gray-900">
              IS SECURITY DEPARTMENT
            </h1>
          </div>
          {currentId === id ? 
          <div className="mx-auto flex-auto p-5">
            <h2 className="text-4xl text-center font-normal tracking-tight text-purple-400 ">
              {filteredPosts.at(0).topic}
            </h2>
            <hr className="m-2" />
            <h3 className="font-bold ">{filteredPosts.at(0).subtitle}</h3>
            {filteredPosts.at(0).url &&(
            <div>
             <img src={filteredPosts.at(0).url} alt="images"/>
             </div>
            )}
            <p className="my-5 mx-auto indent-12 whitespace-pre-line tracking-wide font-sans text-base">
              {filteredPosts.at(0).description}
            </p>
            {/* {filteredPosts.at(1).url &&(
            <div>
             <img src={filteredPosts.at(0).url} alt="images"/>
             </div>
            )} */}
          </div>
          :
          <Navigate to={"/description/" + currentId}/>
           }
        </div>
      </div>
      <div className="flex justify-around bg-white p-6 m-10">
        <button onClick={handleViewCourse} className="border-2 p-6 rounded-2xl hover:bg-gray-50">
          <SchoolRoundedIcon />
          View Course
        </button>
        <button onClick={handleMark} className={clicked ? "border-2 p-6 rounded-2xl bg-green-300" : "border-2 bg-purple-400 p-6 rounded-2xl hover:bg-purple-500"}>Mark Complete</button>
        <button onClick={handleNext} className="border-2 p-6 rounded-2xl hover:bg-gray-50">
          <ArrowCircleRightOutlinedIcon />
          Next Lesson
        </button>
      </div>
      <Footer />
      
    </div>
  );
}

export default Details;
