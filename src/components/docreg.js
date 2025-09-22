import React, { useState } from 'react'
import Footer from './footer'

const Docreg = () => {

    const[name,setname]=useState()
    const[contact,setcontact]=useState()
    const[spec,setspec]=useState()
    const[expe,setexpe]=useState()
    const[email,setemail]=useState()
    const[password,setpassword]=useState()

    const submit =async()=>{
        const data={name,contact,spec,expe,email,password}


        try{ 
        
            const result = await fetch("http://localhost:9000/docreg",{
                method:"post",
                body:JSON.stringify(data),
                  headers:{
            'Content-type':"application/json; charset=UTF-8"
        }
            })
            
            
            if(result.ok){
               const res=await result.json();
               if(res.statuscode===1){
                alert("Data send")
               }
               else{
                alert("Data not send")
               }
            }
        
        }
        catch(err){
            console.log(err)
        }
        
        }    
    
  return (
    <div>

         <section class="page-title">
		<div class="outer-container">
			<div class="image">
				<img src="images/background/19.jpg" alt="" />
			</div>
		</div>
	</section>



    <section class="page-breadcrumb">
		<div class="image-layer" style={{backgroundImage:"url(images/background/1.png)"}}></div>
		<div class="container">
			<div class="clearfix">
				<div class="pull-left">
					<h2>Doctor Registration form</h2>
				</div>
				
			</div>
		</div>
	</section><br></br><br></br>
    
      <div class="col-lg-5 col-md-5 col-sm-5" style={{marginLeft:"450px"}}>
                        <div class="form-column">
                            <div class="inner-column">
                                <center><h3>Fill up the form</h3></center><br></br><br></br>
                               
                                <div class="calender-form">

                                   
                                 

                                       

                                        <div class="form-group">
                                            <label> Enter your Name</label>
                                            <input type="text"  placeholder="Type your name" required=""  onChange={(e) => setname(e.target.value)}/>
                                        </div>

                                        

                                        
                                <div class="form-group">
                                    <label> Your Contact Number
                                    </label>
                                    <input  type="tel" name="contactNumber" placeholder="Enter your contact number" required=""  onChange={(e) => setcontact(e.target.value)}/>
                                </div>


                                      
                                        <div class="form-group">
                                            <label> Enter specialization </label>
                                            <input type="text"  placeholder="Enter your specialization" required=""  onChange={(e) => setspec(e.target.value)}/>
                                        </div>

                                        <div class="form-group">
                                            <label> Experiance </label>
                                            <input type="tel"  placeholder="Enter your specialty" required=""  onChange={(e) => setexpe(e.target.value)}/>
                                        </div>


                                         <div class="form-group">
                                            <label>  E-Mail Address</label>
                                            <input type="email"  placeholder="abc@gmail.com" required=""  onChange={(e) => setemail(e.target.value)}/>
                                        </div>

                                        
                                        <div class="form-group">
                                                <label> Set Password</label>
                                                <input type="text" name="password" placeholder="Enter your password" required=""  onChange={(e) => setpassword(e.target.value)} />
                                         </div>

                                        <a  class="theme-btn btn-style-three" style={{backgroundColor:"#28b1a8", color:"white" ,fontWeight:"bold",marginLeft:"200px"}} onClick={submit}> Submit</a>
                                    
                                </div>

                            </div>
                        </div>
                    </div><br></br>

    </div>
  )
}

export default Docreg
