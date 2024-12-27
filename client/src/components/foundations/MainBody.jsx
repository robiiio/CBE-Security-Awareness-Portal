import React from "react"

import UserNavBar from "../UserNavBar"
import Footer from "./Footer"
import MainIntro from "./MainIntro"


function MainBody({percentage, setPercentage }) {
    return (
        <div className="bg-gray-50">
           <UserNavBar/>
            <MainIntro percentage ={percentage} setPercentage={setPercentage}/>
            <Footer/>
        </div>
    )
}

export default MainBody
