import React from "react";
import CircularProgressBar from "../CircularProgressBar";
import Courses from "./Courses";
function MainIntro({ percentage, setPercentage }) {
  return (
    <div className="mx-15 ">
      <div className="flex justify-center ">
        <CircularProgressBar percentage={percentage} />
      </div>
      <div className="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8">
        <h1 className="text-3xl font-medium text-center tracking-tight text-gray-900">
          IS SECURITY DEPARTMENT
        </h1>
      </div>
      <div className="max-w-3xl mx-auto flex-row justify-around font-normal">
      <h1 className="text-2xl">OverView</h1>
      <p className="text-gray-500">
        This is where it all begins! A hands-on introduction to all of the
        essential tools you'll need to build real, working websites. You'll
        learn what web developers actually do – the foundations you'll need for
        later courses.
      </p>
      <Courses percentage={percentage} setPercentage={setPercentage}/>
      </div>
    </div>
  );
}

export default MainIntro;
