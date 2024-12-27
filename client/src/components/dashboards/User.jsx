/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import {useQuery} from "@tanstack/react-query"
// import { fetchPostsContent } from "../../api";

function User({user}) {
  

  // const {isLoading, data: users, error} = useQuery({
  //    queryKey: ['users'],
  //   queryFn: fetchPostsContent
  // })
  // console.log(users)

  return (
    <div>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-5xl py-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl  sm:py-4  sm:px-6  lg:px-8">
            <div className="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl rounded-3xl  py-10  gap-x-20  ">
              <div className=" flex mx-auto text-center lg:mx-0 lg:flex-row justify-around  lg:text">
                <span className="aui-avatar aui-avatar-xxlarge">
                  <span className="aui-avatar-inner">
                    <img
                      className="w-[50px] h-[50px]"
                      src="avatar.png"
                      alt="Person McRealface"
                    />
                  </span>
                </span>
                <p className=" text-lg leading-8 text-black text-center">
                  {user.result.name}
                </p>
                <p className=" text-lg leading-8 text-black text-center">
                  {" "}
                  {user.result.email}
                </p>
              </div>
              <p></p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default User;
