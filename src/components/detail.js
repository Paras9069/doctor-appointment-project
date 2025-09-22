import React, { useEffect, useState } from 'react'
import Footer from './footer'
import { useSearchParams } from 'react-router-dom'

const Detail = () => {


    const [params] = useSearchParams()
    const id = params.get("id")
    const [name,setname] = useState([])
    const [quali,setquali] = useState([])
    const [pic,setpic] = useState([])
   

    useEffect(()=>{
        submit()
    },[])

    const submit=async()=>{
    
        try{
            const result = await fetch(`http://localhost:9000/detail/${id}`,{
                method:"get",
                headers:{
                    'Content-type':"application/json; charset=UTF-8"
                }
            })
            if(result.ok){

                const res = await result.json();
                if(res.statuscode===1){
                    setname(res.pd.name) 
                    setquali(res.pd.quali) 
                    setpic(res.pd.file)
                      
                }
                
                else{
                    alert("not fetch")
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
				<img src="images/background/20.jpg" alt="" />
			</div>
		</div>
	</section>
      <section class="page-breadcrumb">
		<div class="image-layer" style={{backgroundImage:"url(images/background/1.png)"}}></div>
		<div class="container">
			<div class="clearfix">
				<div class="pull-left">
					<h2>Dr.{name}</h2>
				</div>
				<div class="pull-right">
					<ul class="breadcrumbs">
						<li class="left-curves"></li>
						<li class="right-curves"></li>
						<li><a href="index.html">Home -</a></li>
						<li><a href="doctor.html">Doctors -</a></li>
						<li>{name}</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

    <section class="doctor-detail-section">
		<div class="container">
			<div class="row">
				
				
				<div class="image-column col-lg-5 col-md-12 col-sm-12">
					<div class="inner-column">
						<div class="image">
							<img src={`uploads/${pic}`}  alt="" />
							<div class="number-box">
								<a href="https://www.youtube.com/watch?v=Fvae8nxzVz4" class="play-button" data-fancybox="" data-caption=""><i class="ripple"></i><i class="icon flaticon-video"></i></a>
								212-243-7969
							</div>
						</div>
					</div>
				</div>
				
			
				<div class="content-column col-lg-7 col-md-12 col-sm-12">
					<div class="inner-column">
						<h2>Personal Details</h2>
						<ul class="doctor-info-list">
							<li><span>Doctor Name</span>Dr.{name}</li>
							<li><span>Primary Speciality</span>{quali}</li>
							<li><span>Experience</span>9+ Years</li>
						</ul>
						<h2>Education & Training</h2>
						<ul class="doctor-info-list">
							<li><span>Medical Education</span>University of California, San Francisco</li>
							<li><span>Residency</span>San Francisco</li>
							<li><span>Practice Areas</span>Stereotactic Radiosurgery, Glioma</li>
							<li><span>Certifications</span>American Board of Neurological Surgery </li>
						</ul>
						<h2>Social Media</h2>
						
						<ul class="social-box">
							<li class="facebook"><a href="#"><span class="icon icon icon-facebook"></span></a></li>
							<li class="twitter"><a href="#"><span class="icon icon icon-twitter"></span></a></li>
							<li class="linkedin"><a href="#"><span class="icon icon icon-linkedin"></span></a></li>
							<li class="youtube"><a href="#"><span class="icon icon icon-youtube"></span></a></li>

						</ul>
					</div>
				</div>
				
			</div>
		</div>
	</section>
   
    </div>
  )
}

export default Detail
