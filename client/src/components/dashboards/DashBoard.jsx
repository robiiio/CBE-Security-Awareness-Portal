import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Progress from './Progress';
import User from './User';
import UserNavBar from '../UserNavBar';
import './style.css';
import Project from './Project';
function DashBoard({percentage}) {
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
 
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
    return (
            <>
            <UserNavBar/>
            <section id="dashboard">
            <User user={user}/>
            <Progress user={user}/>
            <Project/>
            </section>
            </>
          )
        }
    

export default DashBoard
