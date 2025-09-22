import React from 'react'
import Appointment from './appointment'
import { Link } from 'react-router-dom'
import Doc_show from './doc_show'
import Footer from './footer'

const Landingpage = () => {
  return (
    <div>


<div style={{
  backgroundImage: "url(images/main-slider/1.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  
}}>
  <div style={{
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }}>
    <div style={{
      width: "50%",
      color: "#fff"
    }}>
      <div style={{ fontSize: "18px", marginBottom: "15px" ,fontWeight:"bolder" }}>Diagnosis</div>
      <h2 style={{ fontSize: "48px", marginBottom: "20px" ,fontWeight:"bolder"}}>Personal care for your healthy living</h2>
      <p style={{ marginBottom: "30px", color:"white" }}>Small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
      <a href="#" style={{ 
        display: "inline-block",
        padding: "12px 30px",
        backgroundColor: "#fff",
        color: "#000",
        textDecoration: "none",
        borderRadius: "4px"
      }}>
		<Link to="appointment">Book Now</Link></a>
    </div>
    <div style={{ width: "35%" }}>
      <img src="images/main-slider/content-image.png" alt="" style={{ maxWidth: "100%" }} />
    </div>
  </div>
</div>

   


  {/* <!-- Featured Section --> */}
	<section class="featured-section">
		<div class="pattern-layer" style={{backgroundImage:"url(images/background/pattern-1.png)"}}></div>
		<div class="container">
			<div class="row">
				
				
				<div class="featured-block col-lg-4 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div class="image-layer" style={{backgroundImage:"url(images/resource/feature-1.jpg)"}}></div>
						<div class="icon-box">
							<span class="icon flaticon-pill"></span>
						</div>
						<h3><a href="#">Specialised <br></br>
             Support</a></h3>
						<p>The hospital plays a statewide role in rehabilitation services, which includes the Acquired</p>
					</div>
				</div>
				
				<div class="featured-block col-lg-4 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
						<div class="image-layer" style={{backgroundImage:"url(images/resource/feature-1.jpg)"}}></div>
						<div class="icon-box">
							<span class="icon icon-diagnosis"></span>
						</div>
						<h3><a href="#">Diagnosis & <br></br>
             Investigation</a></h3>
						<p>Hospital doctors examine patients so that they can diagnose and treat health conditions</p>
					</div>
				</div>
				
				
				<div class="featured-block col-lg-4 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
						<div class="image-layer" style={{backgroundImage:"url(images/resource/feature-1.jpg)"}}></div>
						<div class="icon-box">
							<span class="icon icon-medical1"></span>
						</div>
						<h3><a href="#">Medical & <br></br> Surgical</a></h3>
						<p>Medicine is a very wide field with many possible specialisms. Some doctors work in general</p>
					</div>
				</div>
				
			</div>
		</div>
	</section>
	{/* <!-- End Featured Section --> */}






  {/* <!-- Fullwidth Section --> */}
	<section class="container-fluid">
		<div class="pattern-layer" style={{backgroundImage:"url(images/background/pattern-2.png)"}}></div>
		<div class="outer-section">
			<div class="clearfix">

				
				<div class="left-column">
					<div class="inner-column">
						<div class="shadow-one paroller" style={{backgroundImage:"url(images/icons/shadow-1.png)"}} data-paroller-factor="0.15" data-paroller-factor-lg="0.15" data-paroller-factor-md="0.15" data-paroller-factor-sm="0.15" data-paroller-type="foreground" data-paroller-direction="horizontal"></div>
						<div class="shadow-two paroller" style={{backgroundIimage:"url(images/icons/shadow-2.png)"}} data-paroller-factor="-0.15" data-paroller-factor-lg="-0.15" data-paroller-factor-md="-0.15" data-paroller-factor-sm="-0.15" data-paroller-type="foreground" data-paroller-direction="vertical"></div>
						<div class="shadow-three paroller" style={{backgroundImage:"url(images/icons/shadow-3.png)"}} data-paroller-factor="0.15" data-paroller-factor-lg="0.15" data-paroller-factor-md="0.15" data-paroller-factor-sm="0.15" data-paroller-type="foreground" data-paroller-direction="horizontal"></div>
						<div class="image">
							<img src="images/resource/image-1.png" alt="" />
						</div>
					</div>
				</div>

				
				<div class="right-column">
					<div class="inner-column">
						<h2>Hospital doctors examine patients so that they can diagnose</h2>
						<ul class="featured-list">
							<li class="wow fadeInUp clearfix" data-wow-delay="0ms" data-wow-duration="1500ms">
								<span class="icon icon-brifecase-hospital2"></span>
								<div class="content">
									<div class="title">Intensive care</div>
									<p>Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
								</div>
							</li>
							<li class="wow fadeInUp clearfix" data-wow-delay="300ms" data-wow-duration="1500ms">
								<span class="icon icon-heart1"></span>
								<div class="content">
									<div class="title">Specialised Support Service</div>
									<p>Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
								</div>
							</li>
							<li class="wow fadeInUp clearfix" data-wow-delay="600ms" data-wow-duration="1500ms">
								<span class="icon icon-doctor"></span>
								<div class="content">
									<div class="title">Medical & Surgical</div>
									<p>Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
								</div>
							</li>
						</ul>
					</div>
				</div>

			</div>
		</div>
	</section>

	{/* <!-- End Fullwidth Section --> */}

  {/* <!-- Team Section --> */}
	



<Doc_show/>
	{/* <!-- End Team Section --> */}





  {/* <!-- Appointment Section --> */}
	<Appointment/>
					
					






  {/* <!-- Emergency Section --> */}
	<section class="emergency-section" style={{backgroundImage:"url(images/background/3.jpg)"}}>
		<div class="container">
			<div class="row">
				<div class="col-lg-6 col-md-12">
					
					<div class="content-box">
						<div class="inner-box">
							<h2><span class="icon-box flaticon-24-hours"></span><strong>Emergency</strong> Health HuB 24/7</h2>
							<p class="text">With access to 24 hour emergency assistance, It’s so important you can continue to help others.</p>
							<p class="phone"><a href="tel:812-243-7969"><span class="icon-box icon-phone_call"></span>812-243-7969</a></p>
						</div>
					</div>
				</div>
			</div>
			
		</div>
	</section>
	{/* <!-- End Emergency Section --> */}




  {/* <!-- Services Section --> */}
	<section class="services-section">
		<div class="container">
			
		
			<div class="section-title text-center">
				<h2>Quick Amenities in Health HuB</h2>
				<p class="text">The hospital plays a statewide role in rehabilitation services, which includes the Acquired</p>
			</div>
			
			<div class="row">
				
				
				<div class="featured-block style-two col-lg-4 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div class="image-layer" style={{backgroundImage:"url(images/resource/feature-2.jpg)"}}></div>
						<div class="icon-box">
							<span class="icon icon-brifecase-hospital2"></span>
						</div>
						<h3><a href="#">Intensive care</a></h3>
						<p>Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
					</div>
				</div>
				
			
				<div class="featured-block style-two col-lg-4 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
						<div class="image-layer" style={{backgroundImage:"url(images/resource/feature-2.jpg)"}}></div>
						<div class="icon-box">
							<span class="icon icon-hospital-symbol"></span>
						</div>
						<h3><a href="#">Online Medicine</a></h3>
						<p>Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
					</div>
				</div>
				
				
				<div class="featured-block style-two col-lg-4 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
						<div class="image-layer" style={{backgroundIimage:"url(images/resource/feature-2.jpg)"}}></div>
						<div class="icon-box">
							<span class="icon icon-heart1"></span>
						</div>
						<h3><a href="#">Lab Tests</a></h3>
						<p>Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
					</div>
				</div>
				
				
				<div class="featured-block style-two col-lg-4 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div class="image-layer" style={{backgroundImage:"url(images/resource/feature-2.jpg)"}}></div>
						<div class="icon-box">
							<span class="icon icon-ambulance"></span>
						</div>
						<h3><a href="#">Ambulance Car</a></h3>
						<p>Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
					</div>
				</div>
				
				
				<div class="featured-block style-two col-lg-4 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
						<div class="image-layer" style={{backgroundImage:"url(images/resource/feature-2.jpg)"}}></div>
						<div class="icon-box">
							<span class="icon icon-capsule"></span>
						</div>
						<h3><a href="#">Tabs and Pills</a></h3>
						<p>Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
					</div>
				</div>
				
			
				<div class="featured-block style-two col-lg-4 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
						<div class="image-layer" style={{backgroundImage:"url(images/resource/feature-2.jpg)"}}></div>
						<div class="icon-box">
							<span class="icon icon-book"></span>
						</div>
						<h3><a href="#">Health Check</a></h3>
						<p>Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
					</div>
				</div>
				
			</div>
			
		</div>
	</section>
	{/* <!-- End Services Section --> */}
	



	{/* <!-- Gallery Section --> */}
    <section class="gallery-section" id="gallery">
        <div class="image-layer" style={{backgroundImage:"url(images/background/4.jpg)"}}></div>
        <div class="container">
            <div class="title-box">
                <h2>Gallery of Health HuB</h2>
            </div>

            <div class="row">

                <div class="project-block col-lg-4 col-md-6 col-sm-12">
                    <div class="inner-box">
                        <div class="image">
                            <img src="images/gallery/1.jpg" alt="" />
                           
                            <div class="overlay-box">
                                <div class="overlay-inner">
                                    <div class="overlay-content">
                                        <div class="icon-box">
                                            <span class="icon icon-heart1"></span>
                                        </div>
                                        <h3><a href="doctor-detail.html">Online Medicine</a></h3>
                                        <a class="plus" href="images/gallery/1.jpg" data-fancybox="gallery-1" data-caption=""><span class="flaticon-plus-symbol"></span></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

             
                <div class="project-block col-lg-4 col-md-6 col-sm-12">
                    <div class="inner-box">
                        <div class="image">
                            <img src="images/gallery/2.jpg" alt="" />
                         
                            <div class="overlay-box">
                                <div class="overlay-inner">
                                    <div class="overlay-content">
                                        <div class="icon-box">
                                            <span class="icon icon-heart1"></span>
                                        </div>
                                        <h3><a href="doctor-detail.html">Online Medicine</a></h3>
                                        <a class="plus" href="images/gallery/2.jpg" data-fancybox="gallery-1" data-caption=""><span class="flaticon-plus-symbol"></span></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="project-block col-lg-4 col-md-6 col-sm-12">
                    <div class="inner-box">
                        <div class="image">
                            <img src="images/gallery/3.jpg" alt="" />
                            
                            <div class="overlay-box">
                                <div class="overlay-inner">
                                    <div class="overlay-content">
                                        <div class="icon-box">
                                            <span class="icon icon-heart1"></span>
                                        </div>
                                        <h3><a href="doctor-detail.html">Online Medicine</a></h3>
                                        <a class="plus" href="images/gallery/3.jpg" data-fancybox="gallery-1" data-caption=""><span class="flaticon-plus-symbol"></span></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="project-block col-lg-4 col-md-6 col-sm-12">
                    <div class="inner-box">
                        <div class="image">
                            <img src="images/gallery/4.jpg" alt="" />
                           
                            <div class="overlay-box">
                                <div class="overlay-inner">
                                    <div class="overlay-content">
                                        <div class="icon-box">
                                            <span class="icon icon-heart1"></span>
                                        </div>
                                        <h3><a href="doctor-detail.html">Online Medicine</a></h3>
                                        <a class="plus" href="images/gallery/4.jpg" data-fancybox="gallery-1" data-caption=""><span class="flaticon-plus-symbol"></span></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

              
                <div class="project-block col-lg-4 col-md-6 col-sm-12">
                    <div class="inner-box">
                        <div class="image">
                            <img src="images/gallery/5.jpg" alt="" />
                           
                            <div class="overlay-box">
                                <div class="overlay-inner">
                                    <div class="overlay-content">
                                        <div class="icon-box">
                                            <span class="icon icon-heart1"></span>
                                        </div>
                                        <h3><a href="doctor-detail.html">Online Medicine</a></h3>
                                        <a class="plus" href="images/gallery/5.jpg" data-fancybox="gallery-1" data-caption=""><span class="flaticon-plus-symbol"></span></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

               
                <div class="project-block col-lg-4 col-md-6 col-sm-12">
                    <div class="inner-box">
                        <div class="image">
                            <img src="images/gallery/6.jpg" alt="" />
                           
                            <div class="overlay-box">
                                <div class="overlay-inner">
                                    <div class="overlay-content">
                                        <div class="icon-box">
                                            <span class="icon icon-heart1"></span>
                                        </div>
                                        <h3><a href="doctor-detail.html">Online Medicine</a></h3>
                                        <a class="plus" href="images/gallery/6.jpg" data-fancybox="gallery-1" data-caption=""><span class="flaticon-plus-symbol"></span></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div class="button-box text-center">
                <a href="gallery.html" class="theme-btn btn-style-three">View All <span class="arrow icon-chevron-right"></span></a>
            </div>

        </div>
    </section>
    {/* <!-- End Gallery Section --> */}




	{/* <!-- Events Section --> */}
    <section class="events-section">
        <div class="pattern-layer-two" style={{backgroundImage:"url(images/background/pattern-5.png)"}}></div>
        <div class="container">
           
            <div class="title-box">
                <div class="clearfix">
                    <div class="pull-left">
                        <h2>Recent Events</h2>
                    </div>
                    <div class="pull-right">
                        <a href="#" class="view-events">View all Events <span class="arrow fa fa-angle-right"></span></a>
                    </div>
                </div>
            </div>

          
            <div class="inner-container">
                <div class="pattern-layer-one" style={{backgroundImage:"url(images/background/pattern-4.png)"}}></div>
                <div class="row">

                   
                    <div class="column col-lg-6 col-md-12 col-sm-12">
                        
                        <div class="event-block">
                            <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div class="upper-box clearfix">
                                  
                                    <div class="event-date">
                                        <strong>25</strong>Dec
                                    </div>
                                    <div class="image">
                                        <img src="images/resource/author-1.jpg" alt="" />
                                    </div>
                                    <ul class="event-list">
                                        <li><span class="icon icon-map-marker2"></span>Destiny Hall, 5th Floor</li>
                                        <li><span class="icon icon-clock3"></span>10am to 3pm</li>
                                    </ul>
                                </div>
                                <h3><a href="appointment.html">National Assessment and Accrediation for Council Peer Team Visited...</a></h3>
                                <a href="event-detail.html" class="theme-btn btn-style-four">join now <span class="arrow fa fa-angle-right"></span></a>
                            </div>
                        </div>
                    </div>

                    <div class="column col-lg-6 col-md-12 col-sm-12">

                     
                        <div class="event-block-two">
                            <div class="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div class="content clearfix">
                                   
                                    <div class="event-date">
                                        <strong>26</strong>Dec
                                    </div>
                                    <ul class="event-list">
                                        <li><span class="icon icon-map-marker2"></span>Charlotte Hall</li>
                                        <li><span class="icon icon-clock3"></span>10am to 3pm</li>
                                    </ul>
                                    <h3><a href="appointment.html">Medicine is a very wide field with many possible specialisms...</a></h3>
                                </div>
                            </div>
                        </div>

                       
                        <div class="event-block-two">
                            <div class="inner-box wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div class="content clearfix">
                                    
                                    <div class="event-date">
                                        <strong>28</strong>Dec
                                    </div>
                                    <ul class="event-list">
                                        <li><span class="icon icon-map-marker2"></span>Royal Lounge</li>
                                        <li><span class="icon icon-clock3"></span>10am to 3pm</li>
                                    </ul>
                                    <h3><a href="appointment.html">Hospital doctors examine patients so that they can diagnose...</a></h3>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    </section>
    {/* <!-- End Events Section --> */}



	{/* <!--Main Footer--> */}
    


{/* <!--End pagewrapper--> */}
{/* <!--Scroll to top--> */}
<div class="scroll-to-top scroll-to-target" data-target="html"><span class="icon icon-chevron-up"></span></div>

    </div>
  )
}

export default Landingpage
