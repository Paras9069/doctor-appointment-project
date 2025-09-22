import React, { useState } from 'react'
import Footer from './footer'

const Contact = () => {

const[name,setname]=useState()
const[email,setemail]=useState()
const[phno,setphno]=useState()
const[msg,setmsg]=useState()

const submit = async()=>{
	const all ={name,email,phno,msg}
try{
    
        const result = await fetch("http://localhost:9000/contact",{
            method:"post",
            body:JSON.stringify(all),
            headers:{
                'Content-type':"application/json; charset=UTF-8"
            }
        })
        
    
        if(result.ok){
            alert("data send")
			
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
      

    
	<section class="page-title">
		<div class="outer-container">
			<div class="image">
				<img src="images/background/24.jpg" alt="" />
			</div>
		</div>
	</section>
	
	
	
	<section class="page-breadcrumb">
		<div class="image-layer" style={{backgroundImage:"url(images/background/1.png)"}}></div>
		<div class="container">
			<div class="clearfix">
				<div class="pull-left">
					<h2>Contact Us</h2>
				</div>
				<div class="pull-right">
					<ul class="breadcrumbs">
						<li class="left-curves"></li>
						<li class="right-curves"></li>
						<li><a href="">Home -</a></li>
						<li>Contact</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	

    <section class="contact-page-section" style={{backgroundImage:"url(images/background/25.jpg)"}}>
		<div class="pattern-layer" style={{backgroundImage:"url(images/background/pattern-13.png)"}}></div>
		<div class="container">
			<div class="row">
			
				
				<div class="info-column col-lg-7 col-md-12 col-sm-12">
					<div class="inner-column">
					
						<div class="section-title">
							<h2>Get in Touch</h2>
							<p class="text">Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
						</div>
						<div class="row">
							
							<div class="column col-lg-6 col-md-6 col-sm-12">
								<div class="contact-address">
									<div class="inner">
										<div class="icon-box">
											<span class="icon flaticon-map-pin-marked"></span>
										</div>
										<h4>Address</h4>
										<p class="text">29 Union Square West <br></br> New York, NY 10003, USA</p>
									</div>
								</div>
							</div>
							
							<div class="column col-lg-6 col-md-6 col-sm-12">
								<div class="contact-address">
									<div class="inner">
										<div class="icon-box">
											<span class="icon flaticon-phone-call"></span>
										</div>
										<h4>Address</h4>
										<p class="text">+1 (857) 325-4879 <br></br> +1 (685) 218-7845</p>
									</div>
								</div>
							</div>
							
							<div class="column col-lg-6 col-md-6 col-sm-12">
								<div class="contact-address">
									<div class="inner">
										<div class="icon-box">
											<span class="icon flaticon-clock"></span>
										</div>
										<h4>Opening Hours</h4>
										<p class="text">Moday to Friday: 8am to 7pm Saturday: 10am to 5pm Sunday: 10am to 2pm</p>
									</div>
								</div>
							</div>
							
							<div class="column col-lg-6 col-md-6 col-sm-12">
								<div class="contact-address">
									<div class="inner">
										<div class="icon-box">
											<span class="icon flaticon-letter"></span>
										</div>
										<h4>Mail</h4>
										<p class="text"><a href="https://html.xpeedstudio.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="1970777f76596e7c7b6a706d7c377a7674">[email&#160;protected]</a> <br></br> <a href="https://html.xpeedstudio.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="187968687771766c757d766c586f7d7a6b716c7d367b7775">[email&#160;protected]</a></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				
				<div class="form-column col-lg-5 col-md-12 col-sm-12">
					<div class="inner-column">
						<div class="title-box">
							<div class="title">Need emergency?</div>
							<h3>Drop us a Line</h3>
						</div>
						
						
						<div class="contact-form">
							{/* <form method="post" action="https://html.xpeedstudio.com/medizco/sendemail.php" id="contact-form"> */}
								
								<div class="form-group">
									<span class="icon flaticon-user-2"></span>
									<input type="text" name="username" placeholder="Enter your name " required="" onChange={(e)=>setname(e.target.value)}/>
								</div>
								
								<div class="form-group">
									<span class="icon flaticon-send"></span>
									<input type="email" name="email" placeholder="Your mail " required="" onChange={(e)=>setemail(e.target.value)}/>
								</div>
								
								<div class="form-group">
									<span class="icon flaticon-phone"></span>
									<input type="text" name="phone" placeholder="Phone Number " required="" onChange={(e)=>setphno(e.target.value)}/>
								</div>
								
								<div class="form-group comment-group">
									<span class="icon icon-comments"></span>
									<textarea name="message" placeholder="Write your message " required="" onChange={(e)=>setmsg(e.target.value)}> </textarea>
								</div>
								
								<div class="form-group">
									<button class="theme-btn submit-btn" type="submit" name="submit-form" onClick={submit}>Submit Now</button>
								</div>
								
							{/* </form> */}
								
						</div>
						
					</div>
				</div>
				
			</div>
		</div>
	</section>


    </div>
  )
}

export default Contact
