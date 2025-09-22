import React from 'react'
import Footer from './footer'
import Showservice from './showservice'

const Services = () => {
  return (
    <div>
     
     <section class="page-title">
		<div class="outer-container">
			<div class="image">
				<img src="images/background/21.jpg" alt="" />
			</div>
		</div>
	</section>


     <section class="page-breadcrumb">
		<div class="image-layer" style={{backgroundImage:"url(images/background/1.png)"}}></div>
		<div class="container">
			<div class="clearfix">
				<div class="pull-left">
					<h2>Our Service</h2>
				</div>
				<div class="pull-right">
					<ul class="breadcrumbs">
						<li class="left-curves"></li>
						<li class="right-curves"></li>
						<li><a href="">Home -</a></li>
						<li>Service</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
<Showservice/>

	{/* <section class="services-page-section">
		<div class="container">
			<div class="row">
				
				
				<div class="services-block-three col-lg-4 col-md-6 col-sm-12">
					<div class="inner-box">
						<div class="image">
							<a href="services-detail.html"><img src="images/resource/service-4.jpg" alt="" /></a>
						</div>
						<div class="lower-content">
							<div class="icon-box">
								<span class="icon icon-heart1"></span>
							</div>
							<h3><a href="services-detail.html">Community Services</a></h3>
							<p class="text">Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
						</div>
					</div>	
				</div>
				
				
				<div class="services-block-three col-lg-4 col-md-6 col-sm-12">
					<div class="inner-box">
						<div class="image">
							<a href="services-detail.html"><img src="images/resource/service-5.jpg" alt="" /></a>
						</div>
						<div class="lower-content">
							<div class="icon-box">
								<span class="icon icon-brifecase-hospital2"></span>
							</div>
							<h3><a href="services-detail.html">Support Service</a></h3>
							<p class="text">Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
						</div>
					</div>	
				</div>
				
				
				<div class="services-block-three col-lg-4 col-md-6 col-sm-12">
					<div class="inner-box">
						<div class="image">
							<a href="services-detail.html"><img src="images/resource/service-6.jpg" alt="" /></a>
						</div>
						<div class="lower-content">
							<div class="icon-box">
								<span class="icon icon-capsule"></span>
							</div>
							<h3><a href="services-detail.html">Trauma & intensive care</a></h3>
							<p class="text">Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
						</div>
					</div>	
				</div>
				
				
				<div class="services-block-three col-lg-4 col-md-6 col-sm-12">
					<div class="inner-box">
						<div class="image">
							<a href="services-detail.html"><img src="images/resource/service-7.jpg" alt="" /></a>
						</div>
						<div class="lower-content">
							<div class="icon-box">
								<span class="icon icon-ambulance"></span>
							</div>
							<h3><a href="services-detail.html">Aged Care Diagnosis</a></h3>
							<p class="text">Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
						</div>
					</div>	
				</div>
				
				
				<div class="services-block-three col-lg-4 col-md-6 col-sm-12">
					<div class="inner-box">
						<div class="image">
							<a href="services-detail.html"><img src="images/resource/service-8.jpg" alt="" /></a>
						</div>
						<div class="lower-content">
							<div class="icon-box">
								<span class="icon icon-doctor"></span>
							</div>
							<h3><a href="services-detail.html">Health Investigation</a></h3>
							<p class="text">Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
						</div>
					</div>	
				</div>
				
				
				<div class="services-block-three col-lg-4 col-md-6 col-sm-12">
					<div class="inner-box">
						<div class="image">
							<a href="services-detail.html"><img src="images/resource/service-9.jpg" alt="" /></a>
						</div>
						<div class="lower-content">
							<div class="icon-box">
								<span class="icon icon-heart-machine"></span>
							</div>
							<h3><a href="services-detail.html">Medical & Surgical</a></h3>
							<p class="text">Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
						</div>
					</div>	
				</div>
				
			</div>
		</div>
	</section> */}



    {/* <!-- Video Section --> */}
	<section class="video-section style-three" style={{backgroundImage:"url(images/background/22.jpg)"}}>
		<div class="container">
			<h2>We are pleased to offer you the chance to have the healthy</h2>
			<a href="https://www.youtube.com/watch?v=Fvae8nxzVz4" class="play-button" data-fancybox="gallery" data-caption=""><i class="icon flaticon-play-button" aria-hidden="true"></i><span class="ripple-2"></span></a>
			<span class="play-now">Play Video</span>
		</div>
	</section>
	{/* <!-- End Video Section --> */}
	


    </div>
  )
}

export default Services
