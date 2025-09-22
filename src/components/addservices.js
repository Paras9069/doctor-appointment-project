import React, { useEffect, useState } from 'react'
import Showservice from './showservice'

const Addservices = () => {

    const[file,setfile]=useState()
    const[service,setservice]=useState()
    const[disc,setdisc]=useState()

    const submit=async()=>{

      const formdata=new FormData();
        formdata.append("file",file)
        formdata.append("service",service)
        formdata.append("disc",disc)

        try{ 
        
                const result = await fetch("http://localhost:9000/service",{
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



    // show services
    
    
    const[show,setshow]=useState([])
            
        
            useEffect(()=>{
                submits()
            },[])
        
            const submits=async()=>{
             try{ 
            
                
                const result = await fetch("http://localhost:9000/service",{
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



    // delete services
    
    
    const del=async(id)=>{
        

        try{ 
        
            
                const result = await fetch(`http://localhost:9000/dele/${id}`,{
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
    
     <div class="col-lg-5 col-md-5 col-sm-5" style={{marginLeft:"450px"}}>
                        <div class="form-column">
                            <div class="inner-column">
                                <center><h3>ADD SERVICES</h3></center><br></br><br></br>
                               
                                <div class="calender-form">

                                   
                                 

                                       <div class="form-group">
                                            <label>Add image</label><br></br>
                                            <input type="file"  placeholder="" required=""   onChange={(e) => setfile(e.target.files[0])} />
                                        </div>

                                        <div class="form-group">
                                            <label> Enter Name of Services</label>
                                            <input type="text"  placeholder="Enter Name of Services" required="" onChange={(e) => setservice(e.target.value)} />
                                        </div>

                                    
                                        <div class="form-group">
                                            <label>Add Discription </label>
                                            <input type="tel"  placeholder="Add discription" required=""onChange={(e) => setdisc(e.target.value)} />
                                        </div>




                                        <a  class="theme-btn btn-style-three" style={{backgroundColor:"#28b1a8", color:"white" ,fontWeight:"bold",marginLeft:"200px"}} onClick={submit}> Submit</a>
                                    
                                </div>

                            </div>
                        </div>
                    </div><br></br>


 <section className="services-page-section">
            <div className="container">
                <div className="row" style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '20px',  // Adds spacing between cards
                    justifyContent: 'flex-start' 
                }}>
                    {show.map((s) => (
                        <div className="col-lg-4 col-md-6 col-sm-12" style={{ 
                            flex: '1 0 calc(33.333% - 20px)',  // Accounts for gap
                            minWidth: '300px',  // Minimum card width
                            padding: '0',  // Remove default padding if needed
                            boxSizing: 'border-box' 
                        }}>
                            <div className="services-block-three">
                                <div className="inner-box" style={{ 
                                    height: '100%',  // Makes cards equal height
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <div className="image">
                                        <a href=""><img src={`uploads/${s.file}`} alt="" style={{ 
                                            width: '100%', 
                                            height: '200px',  // Fixed image height
                                            objectFit: 'cover'  // Ensures image fills container
                                        }} /></a>
                                    </div>
                                    <div className="lower-content" style={{ 
                                        flex: '1',  // Takes remaining space
                                        padding: '15px'  // Inner spacing
                                    }}>
                                        <div className="icon-box">
                                            <span className="icon icon-capsule"></span>
                                        </div>
                                        <h3><a href="">{s.service}</a></h3>
                                        <p className="text">{s.disc}</p>
                                    </div>
                    <a  class="theme-btn btn-style-three" 
                    style={{backgroundColor:"rgb(40 177 168)", color:"white" ,fontWeight:"bold",width:"120px"}} 
                                onClick={(e)=>del(s._id)}>Delete</a>

                                </div>	
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default Addservices
