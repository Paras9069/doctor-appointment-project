import React, { useEffect, useState } from 'react'

const Showservice = () => {


const[show,setshow]=useState([])
        
    
        useEffect(()=>{
            submit()
        },[])
    
        const submit=async()=>{
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
return (
    <div>
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

export default Showservice
