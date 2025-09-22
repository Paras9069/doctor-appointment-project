import React, { useEffect, useState } from 'react'
import Doc_show from './doc_show'
import { Link } from 'react-router-dom'

const Doc_add = () => {
   
    const[name,setname]=useState()
    const[quali,setquali]=useState()
    const[file,setfile]=useState()


    const submit=async()=>{

      const formdata=new FormData();
        formdata.append("name",name)
        formdata.append("quali",quali)
        formdata.append("file",file)

        try{ 
        
                const result = await fetch("http://localhost:9000/add_doc",{
                method:"post",
                body:formdata,
                
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
        
     //doctor show
     
     const[show,setshow]=useState([])
             
         
             useEffect(()=>{
                 submits()
             },[])
         
             const submits=async()=>{
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
             
             
    // delete 
      const del=async(id)=>{
        

        try{ 
        
            
                const result = await fetch(`http://localhost:9000/delete/${id}`,{
                method:"delete",
                headers:{
                            'Content-type':"application/json; charset=UTF-8"
                        }
                
            })
            
            
            if(result.ok){
               const res=await result.json();
               if(res.statuscode===1){
                alert("data delete")
                submits()
                
               }
               else{
                alert("Data not delete")
               }
            }
        
        }
            catch(err){
                  console.log(err)
                }
        
        }
        
  return (
    <div>
    <section className="contact-page-section" style={{ backgroundImage: "url('images/background/25.jpg')" }}>
    <div className="pattern-layer" style={{ backgroundImage: "url('images/background/pattern-13.png')" }}></div>
    <div className="container">
        <div className="row">

        <div className="info-column col-lg-3 col-md-12 col-sm-12">
            <div className="inner-column">
            
            </div>
        </div>

      <div className="form-column col-lg-6 col-md-10 col-sm-12" >
        <div className="inner-column"style={{backgroundColor:"rgb(66 156 187)",borderRadius:"10px"}}>
          <div className="title-box">
            <div className="title">HEALTH HUB</div>
            <h3>ADD DOCTOR</h3>
          </div>

          <div className="contact-form">
            <div className="form-group">
              <input style={{color:"white"}}
                type="text"
                name="username"
                placeholder="Enter First Name"
                required
                onChange={(e) => setname(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input style={{color:"white"}}
                type="text"
                name="qualification"
                placeholder="Enter QUALIFICATION"
                required
                onChange={(e) => setquali(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input style={{color:"white"}}
                type="file"
                required
                onChange={(e) => setfile(e.target.files[0])}
              />
            </div>
          
            <div className="form-group">
              <button className="theme-btn submit-btn" onClick={submit}>Submit</button>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

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
<a  class="theme-btn btn-style-three" style={{backgroundColor:"white", color:"Navy" ,fontWeight:"bold"}} onClick={(e)=>del(s._id)}>Delete<span class="arrow icon-chevron-right"></span></a>

            </div> 
              
        </div>
             )}</div>
		
    </div>
    
</section>

    {/* <Doc_show/> */}
    </div>
  )
  
}

export default Doc_add
