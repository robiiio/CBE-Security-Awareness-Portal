import {GoogleLogin} from "@leecheuk/react-google-login";
import Icon from './icon';
import Input from "./Input";
import {signin, signup} from '../../actions/auth'
import './style.css';
import {gapi} from 'gapi-script';
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import { createPost } from "../../actions/posts";
import {useDispatch, useSelector} from 'react-redux';
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Header from "../Header";


const initialstate={
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  role: '',
}
const initialdata={
  username: "",
  email: "",
  percentage: 0,
  status: "",
}

function Logins() {
  
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialstate);
  const [postCourse, setPostCourse] = useState(initialdata);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const percentage = 0;
  const navigate = useNavigate();
  const authError = useSelector((state) => state.Auth.error);
  
  const username = user?.result?.name;
  const email = user?.result?.email;
  const status = percentage === 100 ? "Completed" : "OnProgress";

  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId: "164349303431-baknj25ut3na4gtkjcglupc0ib01i75p.apps.googleusercontent.com",
        scope: 'email',
      });
    }
    
    gapi.load('client:auth2', start);
  }, []);
  
  useEffect(() => {
    try {
      setUser(JSON.parse(localStorage.getItem("profile")));
    } catch (error) {
      console.error(error);
    }
  }, [navigate]);

  const handleChange = (e) =>  {
    setFormData({...formData, [e.target.name]: e.target.value});
  };
 

  const handleSubmit = (e) => {
    e.preventDefault();

    if(isSignup){
      dispatch(signup(formData, navigate))
      setPostCourse({
        ...postCourse,
        email: email,
        username: username,
        percentage: percentage,
        status: status,
      });
      console.log(postCourse);
      dispatch(createPost(postCourse));
    } else{
      dispatch(signin(formData, navigate))
      setPostCourse({
        ...postCourse,
        email: email,
        username: username,
        percentage: percentage,
        status: status,
      });
      console.log(postCourse);
      dispatch(createPost(postCourse));
    }
    console.log(formData);
  };
  
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);
  
  const googleSuccess =  async(res) => {
    const result =  res?.profileObj;
    const token = res?.tokenId;
    console.log(token)
    console.log(result)
    try{
      dispatch({type:'AUTH', data: {result, token}});
      navigate('/dashboard');
    }catch(err){
      console.log(err)
    }
  }

  const googleFailure = (error) => {
    console.log(error);
    console.log('Google Sign In was unsuccessful. Try Again Later');
  }

    return (
      <>
      <Header/>
      <div className="bg-gray-200 h-[45rem] flex justify-center items-center">
      <div className="space"></div>
      <Container  className="cont " component="main" maxWidth="xs">
        <Paper className="paper mt-12" elevation={3}>
        <Avatar className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="role"
                  label="role"
                  handleChange={handleChange}
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {authError && <div className="mx-auto text-red-500 py-3"><p>{authError}</p></div>}
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <div className="submit-button">
          <Button
            className="submit"
            type="submit"
            variant="contained"
            color="primary"
            
          >
            {isSignup ? "SignUp" : "Sign In"}
          </Button>
          </div>
          <div className="google">
            <GoogleLogin
            clientId="164349303431-baknj25ut3na4gtkjcglupc0ib01i75p.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
              className="googleButton w-half"
              color="primary"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              startIcon={<Icon />}
              variant="contained"
              >Google Sign In</Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          </div>
          <Grid item>
            <Button onClick={switchMode}>
              {isSignup
                ? "Already have an account? Sign In"
                : "Dont't have an account? Sign Up"}
            </Button>
          </Grid>
        </form>
      </Paper> 
    </Container> </div>
    </>
    )
}

export default Logins
