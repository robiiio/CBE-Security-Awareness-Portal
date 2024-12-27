import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
import Logins from './components/auth/Logins';
import Main from './components/Main/Main';
import DashBoard from './components/dashboards/DashBoard'
import './styles/app.css';
import PageNotFound from './components/PageNotFound';
import MainBody from './components/foundations/MainBody';
import MainAdmin from './components/admin/MainAdmin';
import { useState } from 'react';
import Details from './components/Details/Details';

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 60*1000,
    }
  }
})


function App() {
  //const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [percentage, setPercentage] = useState(0);
    
  // useEffect(()=> {
  //   //const token= user?.token;
  //   //JWT
  //  setUser(JSON.parse(localStorage.getItem('profile')));
  //  });

   
  return (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initalIsOpen={false}/>
   <BrowserRouter>
   <Routes> 
    <Route path="/" element={<Main/>}/>
    <Route path="/auth" element={<Logins />}/>
    <Route path="/dashboard" element={<DashBoard  percentage={percentage}/>}/> 
    {/* user ? <DashBoard percentage={percentage}/>  */}
    <Route path="/foundations" element={ <MainBody percentage={percentage} setPercentage={setPercentage}/> }/>  
    {/* user ? <MainBody percentage={percentage}/> : <Navigate to="/auth" />*/}
    <Route path="/admin" element={<MainAdmin/>}/> 
    {/* user ?  <MainAdmin/>: <Navigate to="/auth" />*/}
    <Route path="/description/:id" element={<Details percentage={percentage} setPercentage={setPercentage}/>}/>
    <Route path="*" element={<PageNotFound/>}/>
    </Routes>
   </BrowserRouter>
   </QueryClientProvider>
  );
}

export default App;
