import { useEffect, useState } from "react";
import { CircularProgress, Grid } from "@mui/material";
import Course from "./Course";
import { useCourses } from "./useCourses";

function Courses({percentage, setPercentage}) {
  const [postsContent, setPostsContent] = useState([]);
  const {isLoading, courses, error} = useCourses();

  useEffect(() => {
      try {
        if(courses) {
          const course = courses.data
          setPostsContent(course)
        }
      } catch (error) {
        console.error(error);
      }
  }, [courses]);

  const filteredPosts = postsContent.filter(
    (post) => post.topic === "Introduction"
  );
  const filteredPre = postsContent.filter(
    (post) => post.topic === "Prerequisites"
  );
  const filteredSecur = postsContent.filter(
    (post) => post.topic === "CBE Security Foundations"
  );
  const filteredCon = postsContent.filter(
    (post) => post.topic === "Conclusion"
  );
 
  

  return !postsContent.length ? (
    <CircularProgress />
  ) : (
    <>
      <div className="m-7">
        <Grid className="mx-auto max-w-6xl" item xs={12} sm={6}>
          <div className="relative isolate overflow-hidden bg-white rounded-2xl ">
            <div className="mx-auto  flex-auto p-5">
              <h2 className="text-2xl font-bold tracking-tight text-purple-400 ">
                Introduction
              </h2>
              <hr className="m-2" />
              {filteredPosts.map((post) => (
                <Course post={post} percentage={percentage} setPercentage={setPercentage}/>
              ))}
            </div>
          </div>
        </Grid>
      </div>

      <div className="m-7">
        <Grid className="mx-auto max-w-6xl" item xs={12} sm={6}>
          <div className="relative isolate overflow-hidden bg-white rounded-2xl ">
            <div className="mx-auto  flex-auto p-5">
              <h2 className="text-2xl font-bold tracking-tight text-purple-400 ">
                Prerequisites
              </h2>
              <hr className="m-2" />
              {filteredPre.map((post) => (
                <Course post={post} />
              ))}
            </div>
          </div>
        </Grid>
      </div>

      <div className="m-7">
        <Grid className="mx-auto max-w-6xl" item xs={12} sm={6}>
          <div className="relative isolate overflow-hidden bg-white rounded-2xl ">
            <div className="mx-auto  flex-auto p-5">
              <h2 className="text-2xl font-bold tracking-tight text-purple-400 ">
                CBE Service Cartography and System Architecture
              </h2>
              <hr className="m-2" />
              {filteredSecur.map((post) => (
                <Course post={post} />
              ))}
            </div>
          </div>
        </Grid>
      </div>

      <div className="m-7">
        <Grid className="mx-auto max-w-6xl" item xs={12} sm={6}>
          <div className="relative isolate overflow-hidden bg-white rounded-2xl ">
            <div className="mx-auto  flex-auto p-5">
              <h2 className="text-2xl font-bold tracking-tight text-purple-400 ">
                Conclusion
              </h2>
              <hr className="m-2" />
              {filteredCon.map((post) => (
                <Course post={post} />
              ))}
            </div>
          </div>
        </Grid>
      </div>
    </>
  );
}

export default Courses;
