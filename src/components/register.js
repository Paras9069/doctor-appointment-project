import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const Register = () => {  

const[name,setname]=useState('')
const[lname,setlname]=useState('')
const[mail,setmail]=useState('')
const[password,setpassword]=useState('')
const Navigate=useNavigate()

const submit=async()=>{
    const all={name,lname,mail,password}
    
    try{
    
        const result = await fetch("http://localhost:9000/register",{
            method:"post",
            body:JSON.stringify(all),
            headers:{
                'Content-type':"application/json; charset=UTF-8"
            }
        })
        
    
        if(result.ok){
            alert("data send")
			Navigate("/login")
        }else{
            alert("data not send")
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
					<div class="inner-column"style={{backgroundColor:"#3ea0b9"}}>
						<div class="title-box">
							
							<div class="title">HEALTH HUB</div>
							<h3>REGISTER YOURSELF</h3>
						</div>
						
						
						<div class="contact-form" >
							
								
								<div class="form-group">
									
									<input style={{color:"white"}} type="text" name="username" placeholder="Enter First Name " required="" onChange={(e)=>setname(e.target.value)}/>
								</div>

                                <div class="form-group">
									
									<input style={{color:"white"}} type="text" name="username" placeholder="Enter Last Name " required="" onChange={(e)=>setlname(e.target.value)}/>
								</div>
								
								<div class="form-group">
									
									<input style={{color:"white"}} type="email" name="email" placeholder="Your mail " required="" onChange={(e)=>setmail(e.target.value)}/>
								</div>
								
								<div class="form-group">
                          
                               
									
									<input  style={{color:"white"}} type="password" name="phone" placeholder="Enter Password" required="" onChange={(e)=>setpassword(e.target.value)}/>
								</div>
								
								
								
								<div class="form-group">
                                <button class="theme-btn submit-btn"onClick={submit}  style={{width:"200px",height:"60px",marginLeft:"140px"}}>Create Account </button>

                                
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

export default Register
