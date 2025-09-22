import React, { useContext, useState } from 'react'
import Footer from './footer'
import Context from './context'
import { useNavigate } from 'react-router-dom'

const Login = () => {
const[mail,setmail]=useState()
const[password,setpassword]=useState()
 const{ setflag }=useContext(Context)
 const navigate = useNavigate();


const submit=async()=>{
   const all={mail,password}
   
   try{
   
	   const result = await fetch("http://localhost:9000/login",{
		   method:"post",
		   body:JSON.stringify(all),
		   headers:{
			   'Content-type':"application/json; charset=UTF-8"
		   }
	   })
	   

   
	   if(result.ok){
		  const res=await result.json();
		  if(res.statuscode===1){
		   alert("Data Match")
           setflag(res.utype)
		   navigate('/accept')

		   
		  }
		  else{
		   alert("Data Mismatch")
		  }
	   }
   
   }
   catch(err){
	   console.log(err)
   }
   
   }
  return (
    <div>
      
      <section class="contact-page-section" style={{backgroundImage:"url(images/background/25.jpg)"}}>
		<div class="pattern-layer" style={{backgroundImage:"url(images/background/pattern-13.png)"}}></div>
		<div class="container">
			<div class="row">
			
				
				<div class="info-column col-lg-3 col-md-12 col-sm-12">
					<div class="inner-column">
					
					</div>
				</div>
				
				
				<div class="form-column col-lg-6 col-md-10 col-sm-12" >
					<div class="inner-column" style={{backgroundColor:"#3ea0b9"}}>
						<div class="title-box">
							<div class="title">HEALTH HUB</div>
							<h3>LOGIN YOURSELF</h3>
						</div>
						
						
						<div class="contact-form" >
							{/* <form method="post" action="https://html.xpeedstudio.com/medizco/sendemail.php" id="contact-form"> */}
								
								
								
								<div class="form-group">
									{/* <span class="icon flaticon-send"></span> */}
                                    
									<input type="email" name="email"style={{color:"white"}} placeholder="Enter your email" required="" onChange={(e)=>setmail(e.target.value)}/>
								</div>
								
								<div class="form-group">
                                {/* <span class="fa-light fa-lock"></span> */}
                                <span icon="fa-solid fa-lock" ></span>
									{/* <span class="icon flaticon-phone"></span> */}
									<input type="password" name="text" style={{color:"white"}}placeholder="Enter Password" required="" onChange={(e)=>setpassword(e.target.value)}/>
								</div>
								
								
								
								<div class="form-group">
                                

                                <button class="theme-btn submit-btn" style={{height:"60px",width:"200px"}} onClick={submit}>Login</button>
								</div>
								
							
								
						</div>
						
					</div>
				</div>
				
			</div>
		</div>
	</section>
	

    </div>
  )
}

export default Login
