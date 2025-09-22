import logo from './logo.svg';
import './App.css';
import Siterouter from './components/siterouter';
import Header from './components/header';
import { useEffect, useState } from 'react';
import Adminheader from './components/adminheader';
import Context from './components/context';
import Footer from './components/footer';



function App() {

  const[flag,setflag]=useState(null)
  const[utype,setutype]=useState(null)

    useEffect(()=>{
    if(flag==="admin"){
      setutype("admin")
    }
    else{
      setutype("user")
    }
  },[flag])
  return (
   <div>
<Context.Provider value={{flag,setflag}}>

  {
       
        utype && utype=="admin"?<Adminheader/>:<Header/>

      }

  

    <Siterouter/>
<Footer/>
    </Context.Provider>
   </div>
  );
}

export default App;
