import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Doc_show = () => {
    
        const[show,setshow]=useState([])
        
    
        useEffect(()=>{
            submit()
        },[])
    
        const submit=async()=>{
         try{ 
        
            
            const result = await fetch("http://localhost:9000/doc_show",{
                method:"get",
                headers:{
                    'Content-type':"application/json; charset=UTF-8"
                }
                
            })
            
            
            if(result.ok){
               const res=await result.json();
               if(res.statuscode===1){
                setshow(res.data)
               }
               else{
                alert("Data not Fetch")
               }
            }
        
        }
        catch(err){
            console.log(err)
        }
        
        }   
  return (


    
    <div>

<section class="team-section" id="doctor">
    <div class="team-pattern-layer" style={{backgroundImage:"url(images/background/pattern-1.png)"}}></div>
    <div class="team-pattern-layer-two" style={{backgroundImage:"url(images/background/pattern-5.png)"}}></div>
    <div class="container">

        <div class="section-title text-center">
            <h2>Meet Our Specialist</h2>
            <p class="text">The hospital plays a statewide role in rehabilitation services, which includes the Acquired</p>
        </div>

       
        <div class="team-grid">
           {
             show.map((s)=>
                        
                <div>

           
            <div class="team-block">
                
                <div class="inner-box">
                    <div class="image">
                       <img src={`uploads/${s.file}`} alt="" />
                        <div class="overlay-box">
                            <div class="overlay-inner">
                                <ul class="team-social-box">
                                    <li class="youtube"><a href="#" class="icon icon-youtube"></a><span class="social-name">youtube</span></li>
                                    <li class="linkedin"><a href="#" class="icon icon-linkedin"></a><span class="social-name">linkedin</span></li>
                                    <li class="facebook"><a href="#" class="icon icon-facebook"></a><span class="social-name">facebook</span></li>
                                    <li class="twitter"><a href="#" class="icon icon-twitter"></a><span class="social-name">twitter</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="lower-content">
                        <div class="icon-box">
                            <span class="icon icon-heart1"></span>
                        </div>
                        <Link to={`/detail?id=${s._id}`}>
                        <h3>Dr.{s.name}</h3>
                        </Link>
                        <p class="designation">{s.quali}</p>
                    </div>
                </div>
{/* <a  class="theme-btn btn-style-three" style={{backgroundColor:"white", color:"Navy" ,fontWeight:"bold"}}><Link to="">Delete</Link><span class="arrow icon-chevron-right"></span></a> */}

            </div> 
              
        </div>
             )}</div>
		
    </div>
    
</section>
    </div>
  )
}

export default Doc_show
