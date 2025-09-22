import React from 'react'
import Doc_show from './doc_show'
import Footer from './footer'

const Doctor = () => {
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
					<h2>Meet Our Specialists</h2>
				</div>
				<div class="pull-right">
					<ul class="breadcrumbs">
						<li class="left-curves"></li>
						<li class="right-curves"></li>
						<li><a href="index.html">Home -</a></li>
						<li>Our Team</li>
					</ul>
				</div>
			</div>
		</div>
		
	</section>

<Doc_show/>

    {/* <section class="doctors-page-section">
		<div class="container">
			
            <div class="mixitup-gallery">
                
               
                <div class="filters text-center clearfix">
                	
                	<ul class="filter-tabs filter-btns clearfix">
                        <li class="active filter" data-role="button" data-filter="all">All Departments</li>
						<li class="filter" data-role="button" data-filter=".xray">X-ray</li>
						<li class="filter" data-role="button" data-filter=".cardiology">Cardiology</li>
						<li class="filter" data-role="button" data-filter=".dental">Dental</li>
						<li class="filter" data-role="button" data-filter=".deurology">Neurology</li>
						<li class="filter" data-role="button" data-filter=".traumatology">Traumatology</li>
						<li class="filter" data-role="button" data-filter=".polmonary">Polmonary</li>
						<li class="filter" data-role="button" data-filter=".pediatric">Pediatric</li>
                    </ul>
                    
                </div>
                
                <div class="filter-list row">
					
					
					<div class="team-block all mix traumatology dental pediatric col-lg-3 col-md-6 col-sm-12">
						<div class="inner-box">
							<div class="image">
								<img src="images/resource/team-1.jpg" alt=""/>
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
								<h3><a href="#">Andrew Sebastian</a></h3>
								<p class="designation">Dermatologist</p>
							</div>
						</div>
					</div>
					
					
					<div class="team-block all mix xray polmonary col-lg-3 col-md-6 col-sm-12">
						<div class="inner-box">
							<div class="image">
								<img src="images/resource/team-2.jpg" alt=""/>
								<div class="overlay-box">
									<div class="overlay-inner">
										<ul class="team-social-box">
											<li 
											class="youtube"><a href="#" class="icon icon-youtube"></a><span class="social-name">youtube</span></li>
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
								<h3><a href="#">Thomas Henry</a></h3>
								<p class="designation">Cardiology</p>
							</div>
						</div>
					</div>
					
					
					<div class="team-block all mix xray cardiology col-lg-3 col-md-6 col-sm-12">
						<div class="inner-box">
							<div class="image">
								<img src="images/resource/team-3.jpg" alt=""/>
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
								<h3><a href="">James Alexander</a></h3>
								<p class="designation">Radiology</p>
							</div>
						</div>
					</div>
					
					<div class="team-block all mix deurology cardiology col-lg-3 col-md-6 col-sm-12">
						<div class="inner-box">
							<div class="image">
								<img src="images/resource/team-4.jpg" alt=""/>
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
								<h3><a href="">Harrison Samuel</a></h3>
								<p class="designation">Anaesthetics</p>
							</div>
						</div>
					</div>
					
					<div class="team-block all mix xray traumatology dental pediatric col-lg-3 col-md-6 col-sm-12">
						<div class="inner-box">
							<div class="image">
								<img src="images/resource/team-1.jpg" alt=""/>
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
								<h3><a href="">Andrew Sebastian</a></h3>
								<p class="designation">Dermatologist</p>
							</div>
						</div>
					</div>
					
					<div class="team-block all mix xray cardiology deurology col-lg-3 col-md-6 col-sm-12">
						<div class="inner-box">
							<div class="image">
								<img src="images/resource/team-2.jpg" alt=""/>
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
								<h3><a href="">Thomas Henry</a></h3>
								<p class="designation">Cardiology</p>
							</div>
						</div>
					</div>
					
					<div class="team-block all mix deurology col-lg-3 col-md-6 col-sm-12">
						<div class="inner-box">
							<div class="image">
								<img src="images/resource/team-3.jpg" alt=""/>
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
								<h3><a href="">James Alexander</a></h3>
								<p class="designation">Radiology</p>
							</div>
						</div>
					</div>
					
					<div class="team-block all mix deurology cardiology col-lg-3 col-md-6 col-sm-12">
						<div class="inner-box">
							<div class="image">
								<img src="images/resource/team-4.jpg" alt=""/>
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
								<h3><a href="">Harrison Samuel</a></h3>
								<p class="designation">Anaesthetics</p>
							</div>
						</div>
					</div>
					
					
					<div class="team-block all mix traumatology polmonary dental pediatric col-lg-3 col-md-6 col-sm-12">
						<div class="inner-box">
							<div class="image">
								<img src="images/resource/team-1.jpg" alt=""/>
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
								<h3><a href="">Andrew Sebastian</a></h3>
								<p class="designation">Dermatologist</p>
							</div>
						</div>
					</div>
					
					
					<div class="team-block all mix col-lg-3 col-md-6 col-sm-12">
						<div class="inner-box">
							<div class="image">
								<img src="images/resource/team-2.jpg" alt=""/>
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
								<h3><a href="">Thomas Henry</a></h3>
								<p class="designation">Cardiology</p>
							</div>
						</div>
					</div>
					
					
					<div class="team-block all mix col-lg-3 col-md-6 col-sm-12">
						<div class="inner-box">
							<div class="image">
								<img src="images/resource/team-3.jpg" alt=""/>
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
								<h3><a href="">James Alexander</a></h3>
								<p class="designation">Radiology</p>
							</div>
						</div>
					</div>
					
					
					<div class="team-block all mix cardiology col-lg-3 col-md-6 col-sm-12">
						<div class="inner-box">
							<div class="image">
								<img src="images/resource/team-4.jpg" alt=""/>
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
								<h3><a href="">Harrison Samuel</a></h3>
								<p class="designation">Anaesthetics</p>
							</div>
						</div>
					</div>
					
				</div>
				
			</div>
			
		</div>
	</section> */}


    </div>
  )
}

export default Doctor
