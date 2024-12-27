/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CircularProgressBar from "../CircularProgressBar";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";
import { useProgress } from "./useProgress";
const initialstate = {
  username: "",
  email: "",
  percentage: 0,
  status: "",
};

function Progress({ user }) {
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [postCourse, setPostCourse] = useState(initialstate);
  const [percentage, setPercentage] = useState(0);
  const dispatch = useDispatch();
  const { users } = useProgress();
  const filterUser = users?.data.filter(
    (post) => post.email === user.result.email
  );
  const username = user.result.name;
  const status = percentage === 100 ? "Completed" : "OnProgress";
  const email = user.result.email;
  console.log(filterUser);
  console.log()

  // useEffect(() => {
  //   try {
  //     setUser(JSON.parse(localStorage.getItem("profile")));
  //     if (email) {
  //       setPostCourse({
  //         ...postCourse,
  //         email: email,
  //         username: username,
  //         percentage: percentage,
  //         status: status,
  //       });
  //       dispatch(createPost(postCourse));
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, [users]);

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-thin text-center tracking-tight text-gray-900">
          Skill Progress
        </h1>
      </div>
      <div className="px-6 flex justify-between py-6">
        <CircularProgressBar percentage={percentage} />
        <div>
          <h1 className="text-3xl">Foundations</h1>
          <p>12 lessons</p>
        </div>
        <div className="bg-gray-100 m-6 p-3 rounded-2xl">
          {percentage === 0 ? (
            <a href="/foundations">
              <button>Start</button>
            </a>
          ) : (
            <a href="/foundations">
              <button>Resume</button>
            </a>
          )}
        </div>
      </div>
      <hr className="m-6" />
    </div>
  );
}

export default Progress;
