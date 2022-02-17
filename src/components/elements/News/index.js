import React from "react";
import { Element, useNode ,useEditor} from "@craftjs/core";

import { Col } from "../Col";


export const News = ({children}) => {
    const { connectors: { connect, drag }, isActive, actions: { setProp } } = useNode((node) => ({
        isActive: node.events.selected
    }));
    const { actions , query,currentJson } = useEditor((state) =>  ({
        currentJson: state.nodes
    }))
    console.log("---------currentJson----------")
    console.log(currentJson)

    const addCol = () =>{
        console.log("calling addCol");
       
        
        // Create a new valid Node object from the fresh Node
        const nodeTree = query.parseReactElement(  <div style={{background: '#262a34'}}>
		<header className="_header_darefit_wrapper" id="header">
			<nav className="navbar navbar-expand-lg navbar-dark _header_darefit_navbar">
				<div className="container">
					<div className="_header_logo">
						<a className="navbar-brand _logo" href="#0">
							<img src="/assets/img/header-logo.png" alt="image" className="_logo_img"/>
						</a>
					</div>
					<button className="navbar-toggler _toggler _nav_bg_color" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse _header_darefit_nav" id="navbarNav">
						<ul className="navbar-nav _header_darefit_nav_ul ms-auto">
							<li className="nav-item dropdown _header_darefit_nav_li">
								{/* <a href="#0" className="_header_darefit_nav_item _active_item">Home</a>	 */}
                                <h1>Hello</h1>
							</li>
							<li className="nav-item dropdown _header_darefit_nav_li">
								<a href="#0" className="_header_darefit_nav_item">Trainer</a>	
							</li>
							<li className="nav-item dropdown _header_darefit_nav_li">
								<a href="#0" className="_header_darefit_nav_item">Class</a>	
							</li>
							<li className="nav-item dropdown _header_darefit_nav_li">
								<a href="#0" className="_header_darefit_nav_item">About Us</a>	
							</li>
							<li className="nav-item dropdown _header_darefit_nav_li">
								<a href="#0" className="_header_darefit_nav_item">Blog</a>	
							</li>
						</ul>
						<ul className="navbar-nav _header_darefit_nav_r8_ul">
							<li className="nav-item _header_darefit_nav_r8_li">
								<a className="_header_darefit_nav_r8_item _login" href="#0">Log In</a>
							</li>
							<li className="nav-item _header_darefit_nav_r8_li">
								<a className="_header_darefit_nav_r8_item _signup" href="#0">Sign Up</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="_header_darefit_cont_wrap">
				<div className="container">
					<div className="row">
						<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
							<div className="_header_darefit_cont">
								<h1 className="_header_darefit_cont_t">Trendy Gym,  Trendy Exercise</h1>
								<div className="_header_darefit_cont_p_wrapper">
									<div className="_header_darefit_cont_ic1">
										<img src="/assets/img/header-treadmill.svg" alt="icon" className="_header_darefit_cont_ic"/>
									</div>
									<div className="_header_darefit_cont_ic2">
										<img src="/assets/img/header-dumbbell.svg" alt="icon" className="_header_darefit_cont_ic"/>
									</div>
									<div className="_header_darefit_cont_p_wrap">
										<p className="_header_darefit_cont_p">Welcome to our gym & fitness training centre. Sore today, strong tomorrow. Improve your fitness today</p>
									</div>
									<div className="_header_darefit_cont_ic3">
										<img src="/assets/img/header-dumbbell1.svg" alt="icon" className="_header_darefit_cont_ic"/>
									</div>
									<div className="_header_darefit_cont_ic4">
										<img src="/assets/img/header-stretching-exercises.svg" alt="icon" className="_header_darefit_cont_ic"/>
									</div>
								</div>
								<div className="_header_darefit_cont_btn">
									<a href="#0" className="_header_darefit_cont_btn1">Get Started</a>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-8 col-lg-10 col-md-12 col-sm-12 mx-auto">
							<div className="_header_darefit_bottom_wrap">
								<div className="_header_darefit_bottom_left_cont">
									<h2 className="_header_darefit_bottom_left_cont_t">16</h2>
									<p className="_header_darefit_bottom_left_cont_p">Fitness Trainer</p>
								</div>
								<div className="_header_darefit_bottom_img">
									<img src="/assets/img/header-bottom-img1.png" alt="image" className="_header_darefit_bottom_img_t"/>
									<button className="_header_darefit_bottom_play_ic">
										<svg xmlns="http://www.w3.org/2000/svg" width="33" height="40" fill="none" viewBox="0 0 33 40">
											<path fill="#DF2020" d="M33 20L0 39.053V.947L33 20z"/>
										</svg>								  
									</button>
								</div>
								<div className="_header_darefit_bottom_r8_cont1">
									<h2 className="_header_darefit_bottom_r8_cont1_t">100</h2>
									<p className="_header_darefit_bottom_r8_cont1_p">Online Class</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
		<section className="_about_us_darefit_wrapper">
			<div className="_about_us_darefit_wrap">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
							<div className="_about_us_darefit_left_img">
								<div className="_about_us_darefit_left_img1">
									<img src="/assets/img/about-left-img1.png" alt="image" className="_about_us_darefit_left_img1_t"/>
									<button type="button" className="_about_us_darefit_left_btn">
										<svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" fill="none" viewBox="0 0 12 14">
											<path fill="#fff" d="M12 7L0 13.928V.072L12 7z"/>
										</svg>											  								
									</button>
								</div>
								<div className="_about_us_darefit_left_img2">
									<img src="/assets/img/about-left-img2.png" alt="image" className="_about_us_darefit_left_img2_t"/>
									<button className="_about_us_darefit_left_btn1">
										<svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" fill="none" viewBox="0 0 12 14">
											<path fill="#fff" d="M12 7L0 13.928V.072L12 7z"/>
										</svg>																							
									</button>
								</div>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
							<div className="_about_us_darefit_r8">
								<h6 className="_about_us_darefit_r8_t">About Us</h6>
								<h3 className="_about_us_darefit_r8_t1">The Leading Gym & Fitness Training Centre.</h3>
								<p className="_about_us_darefit_r8_p">Welcome to our gym & fitness training centre. Sore today, strong tomorrow. Improve your fitness today. We are providing the best gym and fitness facilities.</p>
								<div className="_about_us_darefit_r8_btn">
									<a href="#0" className="_about_us_darefit_r8_btn1">Learn More</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="_feature_darefit_wrapper">
			<div className="_feature_darefit_wrap">
				<div className="container">
					<div className="row">
						<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
							<div className="_feature_darefit_cont">
								<h3 className="_feature_darefit_cont_t">Featured Training</h3>
								<p className="_feature_darefit_cont_p">Welcome to our gym & fitness training centre. Sore today, strong tomorrow. Improve your fitness today.</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
							<div className="_feature_darefit_card">
								<div className="_feature_darefit_card_img">
									<img src="/assets/img/feature-img1.png" alt="image" className="_feature_darefit_card_img1"/>
								</div>
							
								<div className="_feature_darefit_card_cont">
									<h6 className="_feature_darefit_card_cont_t">Grit Strenth</h6>
									<p className="_feature_darefit_card_cont_p">500 Member</p>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
							<div className="_feature_darefit_card">
								<div className="_feature_darefit_card_img">
									<img src="/assets/img/feature-img2.png" alt="image" className="_feature_darefit_card_img1"/>
								</div>
							
								<div className="_feature_darefit_card_cont">
									<h6 className="_feature_darefit_card_cont_t">Weight Lifting</h6>
									<p className="_feature_darefit_card_cont_p">500 Member</p>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
							<div className="_feature_darefit_card">
								<div className="_feature_darefit_card_img">
									<img src="/assets/img/feature-img3.png" alt="image" className="_feature_darefit_card_img1"/>
								</div>
								<div className="_feature_darefit_card_cont">
									<h6 className="_feature_darefit_card_cont_t">Stretching</h6>
									<p className="_feature_darefit_card_cont_p">500 Member</p>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
							<div className="_feature_darefit_card">
								<div className="_feature_darefit_card_img">
									<img src="/assets/img/feature-img4.png" alt="image" className="_feature_darefit_card_img1"/>
								</div>
							
								<div className="_feature_darefit_card_cont">
									<h6 className="_feature_darefit_card_cont_t">Back Strenth</h6>
									<p className="_feature_darefit_card_cont_p">500 Member</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
							<div className="_feature_darefit_btn">
								<a href="#0" className="_feature_darefit_btn1">See More</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        <section className="_pricing_darefit_wrapper">
			<div className="_pricing_darefit_wrap">
				<div className="container">
					<div className="row">
						<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
							<div className="_pricing_darefit_cont">
								<h3 className="_pricing_darefit_cont_t">Join Our Membership</h3>
								<p className="_pricing_darefit_cont_p">Welcome to our gym & fitness training centre. Sore today, strong tomorrow. Improve your fitness today.</p>
							</div>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
							<div className="_pricing_darefit_card">
								<div className="_pricing_darefit_card_price">
									<h6 className="_pricing_darefit_card_price_t">Weekly Plan</h6>
									<h2 className="_pricing_darefit_card_price_t1">
										<svg xmlns="http://www.w3.org/2000/svg" width="12" height="17" fill="none" viewBox="0 0 12 17">
											<path fill="#fff" d="M5.34 16.636h1.354l.007-1.463c2.742-.199 4.314-1.707 4.32-3.848-.006-2.27-1.879-3.305-3.847-3.772l-.422-.108.025-3.65c1.023.179 1.682.792 1.784 1.713h2.282c-.039-2.033-1.637-3.516-4.053-3.746l.007-1.49H5.44l-.006 1.49c-2.397.243-4.123 1.713-4.116 3.829 0 1.88 1.336 2.96 3.49 3.516l.575.147-.026 3.867c-1.144-.18-1.968-.831-2.051-1.988H.973c.09 2.397 1.74 3.822 4.373 4.04l-.007 1.463zm1.374-3.515l.025-3.51c1.163.34 1.905.787 1.911 1.694-.006.946-.767 1.624-1.936 1.816zM5.397 7.099c-.882-.28-1.688-.747-1.675-1.655.006-.825.626-1.464 1.7-1.65L5.397 7.1z"/>
										</svg>50
									</h2>
								</div>
								<div className="_pricing_darefit_card_feature">
									<ul className="_pricing_darefit_card_feature_ul">
										<li className="_pricing_darefit_card_feature_li">3 hour personal training</li>
										<li className="_pricing_darefit_card_feature_li">Free consulting</li>
										<li className="_pricing_darefit_card_feature_li">Exercise program</li>
										<li className="_pricing_darefit_card_feature_li">Normal workout</li>
									</ul>
								</div>
								<div className="_pricing_darefit_card_btn">
									<a href="#0" className="_pricing_darefit_card_btn1">Join Now</a>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
							<div className="_pricing_darefit_card">
								<div className="_pricing_darefit_card_price">
									<h6 className="_pricing_darefit_card_price_t">Monthly Plan</h6>
									<h2 className="_pricing_darefit_card_price_t1">
										<svg xmlns="http://www.w3.org/2000/svg" width="12" height="17" fill="none" viewBox="0 0 12 17">
											<path fill="#fff" d="M5.34 16.636h1.354l.007-1.463c2.742-.199 4.314-1.707 4.32-3.848-.006-2.27-1.879-3.305-3.847-3.772l-.422-.108.025-3.65c1.023.179 1.682.792 1.784 1.713h2.282c-.039-2.033-1.637-3.516-4.053-3.746l.007-1.49H5.44l-.006 1.49c-2.397.243-4.123 1.713-4.116 3.829 0 1.88 1.336 2.96 3.49 3.516l.575.147-.026 3.867c-1.144-.18-1.968-.831-2.051-1.988H.973c.09 2.397 1.74 3.822 4.373 4.04l-.007 1.463zm1.374-3.515l.025-3.51c1.163.34 1.905.787 1.911 1.694-.006.946-.767 1.624-1.936 1.816zM5.397 7.099c-.882-.28-1.688-.747-1.675-1.655.006-.825.626-1.464 1.7-1.65L5.397 7.1z"/>
										</svg>150
									</h2>
								</div>
								<div className="_pricing_darefit_card_feature">
									<ul className="_pricing_darefit_card_feature_ul">
										<li className="_pricing_darefit_card_feature_li">3 hour personal training</li>
										<li className="_pricing_darefit_card_feature_li">Free consulting</li>
										<li className="_pricing_darefit_card_feature_li">Exercise program</li>
										<li className="_pricing_darefit_card_feature_li">Normal workout</li>
										<li className="_pricing_darefit_card_feature_li">Hard workout</li>
									</ul>
								</div>
								<div className="_pricing_darefit_card_btn">
									<a href="#0" className="_pricing_darefit_card_btn1">Join Now</a>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
							<div className="_pricing_darefit_card">
								<div className="_pricing_darefit_card_price">
									<h6 className="_pricing_darefit_card_price_t">Yearly Plan</h6>
									<h2 className="_pricing_darefit_card_price_t1">
										<svg xmlns="http://www.w3.org/2000/svg" width="12" height="17" fill="none" viewBox="0 0 12 17">
											<path fill="#fff" d="M5.34 16.636h1.354l.007-1.463c2.742-.199 4.314-1.707 4.32-3.848-.006-2.27-1.879-3.305-3.847-3.772l-.422-.108.025-3.65c1.023.179 1.682.792 1.784 1.713h2.282c-.039-2.033-1.637-3.516-4.053-3.746l.007-1.49H5.44l-.006 1.49c-2.397.243-4.123 1.713-4.116 3.829 0 1.88 1.336 2.96 3.49 3.516l.575.147-.026 3.867c-1.144-.18-1.968-.831-2.051-1.988H.973c.09 2.397 1.74 3.822 4.373 4.04l-.007 1.463zm1.374-3.515l.025-3.51c1.163.34 1.905.787 1.911 1.694-.006.946-.767 1.624-1.936 1.816zM5.397 7.099c-.882-.28-1.688-.747-1.675-1.655.006-.825.626-1.464 1.7-1.65L5.397 7.1z"/>
										</svg>500
									</h2>
								</div>
								<div className="_pricing_darefit_card_feature">
									<ul className="_pricing_darefit_card_feature_ul">
										<li className="_pricing_darefit_card_feature_li">3 hour personal training</li>
										<li className="_pricing_darefit_card_feature_li">Free consulting</li>
										<li className="_pricing_darefit_card_feature_li">Exercise program</li>
										<li className="_pricing_darefit_card_feature_li">Normal workout</li>
										<li className="_pricing_darefit_card_feature_li">Hard workout</li>
										<li className="_pricing_darefit_card_feature_li">Nutrition workout</li>
									</ul>
								</div>
								<div className="_pricing_darefit_card_btn">
									<a href="#0" className="_pricing_darefit_card_btn1">Join Now</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="_testimonial_darefit_wrapper">
			<div className="_testimonial_darefit_wrap">
				<div className="container">
					<div className="row">
						<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
							<div className="_testimonial_darefit_cont">
								<h3 className="_testimonial_darefit_cont_t">Our Happy Clients</h3>
								<p className="_testimonial_darefit_cont_p">Welcome to our gym & fitness training centre. Sore today, strong tomorrow. Improve your fitness today.</p>
							</div>
						</div>
					</div>
					<div className="_testimonial_slider">
						<div className="glide__track" data-glide-el="track">
							<div className="row glide__slides">
								<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
									<div className="_testimonial_darefit_card glide__slide">
										<div className="_testimonial_darefit_card_p_wrap">
											<span className="_testimonial_darefit_card_p_span1">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
												<path fill="#F79F1A" d="M6.889.706v2.872c0 .39-.294.706-.656.706-1.291 0-1.994 1.425-2.092 4.24h2.092c.362 0 .656.315.656.705v6.065c0 .39-.294.705-.656.705H.656C.294 16 0 15.683 0 15.294V9.23c0-1.35.127-2.587.375-3.68.255-1.12.647-2.1 1.164-2.912.532-.835 1.198-1.49 1.978-1.945C4.303.232 5.217 0 6.234 0c.361 0 .655.316.655.706zm8.455 3.578c.363 0 .656-.316.656-.705V.706c0-.39-.293-.705-.655-.705-1.017 0-1.93.232-2.716.691-.781.456-1.447 1.11-1.979 1.945-.517.812-.909 1.792-1.164 2.913-.249 1.093-.375 2.331-.375 3.68v6.065c0 .39.294.705.656.705h5.578c.361 0 .655-.316.655-.705V9.229c0-.39-.293-.705-.655-.705h-2.063c.096-2.814.789-4.24 2.063-4.24z"/>
											  </svg>
											</span>
											<p className="_testimonial_darefit_card_p">I have been taking gym and fitness training here since a long time and I found here so much easy, comfort and flexibility. The mentors are so good and they train me very well.</p>
											<span className="_testimonial_darefit_card_p_span2">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
													<path fill="#F79F1A" d="M9.111 15.294v-2.872c0-.39.294-.706.656-.706 1.291 0 1.994-1.425 2.092-4.24H9.767c-.362 0-.656-.315-.656-.705V.706c0-.39.294-.705.656-.705h5.577c.362 0 .656.316.656.705V6.77c0 1.35-.127 2.587-.375 3.68-.255 1.12-.647 2.1-1.164 2.912-.532.835-1.198 1.49-1.978 1.945-.786.46-1.7.692-2.717.692-.361 0-.655-.316-.655-.706zM.655 11.716c-.361 0-.655.316-.655.705v2.873c0 .39.294.705.655.705 1.016 0 1.93-.232 2.716-.691.781-.456 1.447-1.11 1.979-1.945.517-.812.909-1.792 1.164-2.913.249-1.093.375-2.33.375-3.68V.706c0-.39-.294-.705-.656-.705H.655C.294 0 0 .316 0 .705v6.066c0 .39.294.705.655.705h2.063c-.096 2.814-.789 4.24-2.063 4.24z"/>
												</svg>
											</span>									
										</div>
										<div className="_testimonial_darefit_card_info">
											<div className="_testimonial_darefit_card_img">
												<img src="assets/img/testimonial-img1.png" alt="image" className="_testimonial_darefit_card_img1"/>
											</div>
											<div className="_testimonial_darefit_card_img_cont">
												<h6 className="_testimonial_darefit_card_img_cont_t">Ben Stokes</h6>
												<p className="_testimonial_darefit_card_img_cont_p">Member</p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
									<div className="_testimonial_darefit_card glide__slide">
										<div className="_testimonial_darefit_card_p_wrap">
											<span className="_testimonial_darefit_card_p_span1">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
												<path fill="#F79F1A" d="M6.889.706v2.872c0 .39-.294.706-.656.706-1.291 0-1.994 1.425-2.092 4.24h2.092c.362 0 .656.315.656.705v6.065c0 .39-.294.705-.656.705H.656C.294 16 0 15.683 0 15.294V9.23c0-1.35.127-2.587.375-3.68.255-1.12.647-2.1 1.164-2.912.532-.835 1.198-1.49 1.978-1.945C4.303.232 5.217 0 6.234 0c.361 0 .655.316.655.706zm8.455 3.578c.363 0 .656-.316.656-.705V.706c0-.39-.293-.705-.655-.705-1.017 0-1.93.232-2.716.691-.781.456-1.447 1.11-1.979 1.945-.517.812-.909 1.792-1.164 2.913-.249 1.093-.375 2.331-.375 3.68v6.065c0 .39.294.705.656.705h5.578c.361 0 .655-.316.655-.705V9.229c0-.39-.293-.705-.655-.705h-2.063c.096-2.814.789-4.24 2.063-4.24z"/>
											  </svg>
											</span>
											<p className="_testimonial_darefit_card_p">I have been taking gym and fitness training here since a long time and I found here so much easy, comfort and flexibility. The mentors are so good and they train me very well.</p>
											<span className="_testimonial_darefit_card_p_span2">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
													<path fill="#F79F1A" d="M9.111 15.294v-2.872c0-.39.294-.706.656-.706 1.291 0 1.994-1.425 2.092-4.24H9.767c-.362 0-.656-.315-.656-.705V.706c0-.39.294-.705.656-.705h5.577c.362 0 .656.316.656.705V6.77c0 1.35-.127 2.587-.375 3.68-.255 1.12-.647 2.1-1.164 2.912-.532.835-1.198 1.49-1.978 1.945-.786.46-1.7.692-2.717.692-.361 0-.655-.316-.655-.706zM.655 11.716c-.361 0-.655.316-.655.705v2.873c0 .39.294.705.655.705 1.016 0 1.93-.232 2.716-.691.781-.456 1.447-1.11 1.979-1.945.517-.812.909-1.792 1.164-2.913.249-1.093.375-2.33.375-3.68V.706c0-.39-.294-.705-.656-.705H.655C.294 0 0 .316 0 .705v6.066c0 .39.294.705.655.705h2.063c-.096 2.814-.789 4.24-2.063 4.24z"/>
												</svg>
											</span>									
										</div>
										<div className="_testimonial_darefit_card_info">
											<div className="_testimonial_darefit_card_img">
												<img src="assets/img/testimonial-img2.png" alt="image" className="_testimonial_darefit_card_img1"/>
											</div>
											<div className="_testimonial_darefit_card_img_cont">
												<h6 className="_testimonial_darefit_card_img_cont_t">Ben Stokes</h6>
												<p className="_testimonial_darefit_card_img_cont_p">Member</p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
									<div className="_testimonial_darefit_card glide__slide">
										<div className="_testimonial_darefit_card_p_wrap">
											<span className="_testimonial_darefit_card_p_span1">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
												<path fill="#F79F1A" d="M6.889.706v2.872c0 .39-.294.706-.656.706-1.291 0-1.994 1.425-2.092 4.24h2.092c.362 0 .656.315.656.705v6.065c0 .39-.294.705-.656.705H.656C.294 16 0 15.683 0 15.294V9.23c0-1.35.127-2.587.375-3.68.255-1.12.647-2.1 1.164-2.912.532-.835 1.198-1.49 1.978-1.945C4.303.232 5.217 0 6.234 0c.361 0 .655.316.655.706zm8.455 3.578c.363 0 .656-.316.656-.705V.706c0-.39-.293-.705-.655-.705-1.017 0-1.93.232-2.716.691-.781.456-1.447 1.11-1.979 1.945-.517.812-.909 1.792-1.164 2.913-.249 1.093-.375 2.331-.375 3.68v6.065c0 .39.294.705.656.705h5.578c.361 0 .655-.316.655-.705V9.229c0-.39-.293-.705-.655-.705h-2.063c.096-2.814.789-4.24 2.063-4.24z"/>
											  </svg>
											</span>
											<p className="_testimonial_darefit_card_p">I have been taking gym and fitness training here since a long time and I found here so much easy, comfort and flexibility. The mentors are so good and they train me very well.</p>
											<span className="_testimonial_darefit_card_p_span2">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
													<path fill="#F79F1A" d="M9.111 15.294v-2.872c0-.39.294-.706.656-.706 1.291 0 1.994-1.425 2.092-4.24H9.767c-.362 0-.656-.315-.656-.705V.706c0-.39.294-.705.656-.705h5.577c.362 0 .656.316.656.705V6.77c0 1.35-.127 2.587-.375 3.68-.255 1.12-.647 2.1-1.164 2.912-.532.835-1.198 1.49-1.978 1.945-.786.46-1.7.692-2.717.692-.361 0-.655-.316-.655-.706zM.655 11.716c-.361 0-.655.316-.655.705v2.873c0 .39.294.705.655.705 1.016 0 1.93-.232 2.716-.691.781-.456 1.447-1.11 1.979-1.945.517-.812.909-1.792 1.164-2.913.249-1.093.375-2.33.375-3.68V.706c0-.39-.294-.705-.656-.705H.655C.294 0 0 .316 0 .705v6.066c0 .39.294.705.655.705h2.063c-.096 2.814-.789 4.24-2.063 4.24z"/>
												</svg>
											</span>									
										</div>
										<div className="_testimonial_darefit_card_info">
											<div className="_testimonial_darefit_card_img">
												<img src="assets/img/testimonial-img1.png" alt="image" className="_testimonial_darefit_card_img1"/>
											</div>
											<div className="_testimonial_darefit_card_img_cont">
												<h6 className="_testimonial_darefit_card_img_cont_t">Ben Stokes</h6>
												<p className="_testimonial_darefit_card_img_cont_p">Member</p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
									<div className="_testimonial_darefit_card glide__slide">
										<div className="_testimonial_darefit_card_p_wrap">
											<span className="_testimonial_darefit_card_p_span1">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
												<path fill="#F79F1A" d="M6.889.706v2.872c0 .39-.294.706-.656.706-1.291 0-1.994 1.425-2.092 4.24h2.092c.362 0 .656.315.656.705v6.065c0 .39-.294.705-.656.705H.656C.294 16 0 15.683 0 15.294V9.23c0-1.35.127-2.587.375-3.68.255-1.12.647-2.1 1.164-2.912.532-.835 1.198-1.49 1.978-1.945C4.303.232 5.217 0 6.234 0c.361 0 .655.316.655.706zm8.455 3.578c.363 0 .656-.316.656-.705V.706c0-.39-.293-.705-.655-.705-1.017 0-1.93.232-2.716.691-.781.456-1.447 1.11-1.979 1.945-.517.812-.909 1.792-1.164 2.913-.249 1.093-.375 2.331-.375 3.68v6.065c0 .39.294.705.656.705h5.578c.361 0 .655-.316.655-.705V9.229c0-.39-.293-.705-.655-.705h-2.063c.096-2.814.789-4.24 2.063-4.24z"/>
											  </svg>
											</span>
											<p className="_testimonial_darefit_card_p">I have been taking gym and fitness training here since a long time and I found here so much easy, comfort and flexibility. The mentors are so good and they train me very well.</p>
											<span className="_testimonial_darefit_card_p_span2">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
													<path fill="#F79F1A" d="M9.111 15.294v-2.872c0-.39.294-.706.656-.706 1.291 0 1.994-1.425 2.092-4.24H9.767c-.362 0-.656-.315-.656-.705V.706c0-.39.294-.705.656-.705h5.577c.362 0 .656.316.656.705V6.77c0 1.35-.127 2.587-.375 3.68-.255 1.12-.647 2.1-1.164 2.912-.532.835-1.198 1.49-1.978 1.945-.786.46-1.7.692-2.717.692-.361 0-.655-.316-.655-.706zM.655 11.716c-.361 0-.655.316-.655.705v2.873c0 .39.294.705.655.705 1.016 0 1.93-.232 2.716-.691.781-.456 1.447-1.11 1.979-1.945.517-.812.909-1.792 1.164-2.913.249-1.093.375-2.33.375-3.68V.706c0-.39-.294-.705-.656-.705H.655C.294 0 0 .316 0 .705v6.066c0 .39.294.705.655.705h2.063c-.096 2.814-.789 4.24-2.063 4.24z"/>
												</svg>
											</span>									
										</div>
										<div className="_testimonial_darefit_card_info">
											<div className="_testimonial_darefit_card_img">
												<img src="assets/img/testimonial-img2.png" alt="image" className="_testimonial_darefit_card_img1"/>
											</div>
											<div className="_testimonial_darefit_card_img_cont">
												<h6 className="_testimonial_darefit_card_img_cont_t">Ben Fokes</h6>
												<p className="_testimonial_darefit_card_img_cont_p">Member</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">		
								<div className="_testimonial_darefit_bullet">
									<div className="glide__bullets" data-glide-el="controls[nav]">
										<button className="glide__bullet _bullet_btn" data-glide-dir="=0">
											<span className="_bullet_btn_dot"></span>
										</button>
										<button className="glide__bullet _bullet_btn" data-glide-dir="=1">
											<span className="_bullet_btn_dot"></span>
										</button>
										<button className="glide__bullet _bullet_btn" data-glide-dir="=2">
											<span className="_bullet_btn_dot"></span>
										</button>
									  </div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="_blog_darefit_wrapper">
			<div className="_blog_darefit_wrap">
				<div className="container">
					<div className="row">
						<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
							<div className="_blog_darefit_cont">
								<h3 className="_blog_darefit_cont_t">Our Blog</h3>
								<p className="_blog_darefit_cont_p">Welcome to our gym & fitness training centre. Sore today, strong tomorrow. Improve your fitness today.</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
							<div className="_blog_darefit_card">
								<div className="_blog_darefit_card_img">
									<img src="assets/img/blog-img1.png" alt="image" className="_blog_darefit_card_img1"/>
									<div className="_blog_darefit_card_date">
										<div className="_blog_darefit_card_date_inner">
											<h6 className="_blog_darefit_card_date_t">09</h6>
											<p className="_blog_darefit_card_date_p">MAY</p>
										</div>
									</div>
								</div>
								<div className="_blog_darefit_card_cont">
									<p className="_blog_darefit_card_cont_p">How to get fit at home like gym by doing exercise alone without taking help of anyone...</p>
									<a href="#0" className="_blog_darefit_card_cont_b">Learn more 
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" fill="none" viewBox="0 0 18 11">
											<path stroke="#DF2020" strokeLinecap="round" strokeLinejoin="round" d="M1 5.5h16m0 0L11.857 1M17 5.5L11.857 10"/>
										</svg>										  
									</a>
								</div>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
							<div className="_blog_darefit_card">
								<div className="_blog_darefit_card_img">
									<img src="assets/img/blog-img2.png" alt="image" className="_blog_darefit_card_img1"/>
									<div className="_blog_darefit_card_date">
										<div className="_blog_darefit_card_date_inner">
											<h6 className="_blog_darefit_card_date_t">09</h6>
										<p className="_blog_darefit_card_date_p">MAY</p>
										</div>
									</div>
								</div>
								<div className="_blog_darefit_card_cont">
									<p className="_blog_darefit_card_cont_p">The bad effects of too much exercise without taking any or proper rest and food...</p>
									<a href="#0" className="_blog_darefit_card_cont_b">Learn more 
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" fill="none" viewBox="0 0 18 11">
											<path stroke="#DF2020" strokeLinecap="round" strokeLinejoin="round" d="M1 5.5h16m0 0L11.857 1M17 5.5L11.857 10"/>
										</svg>										  
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
							<div className="_blog_darefit_btn">
								<a href="#0" className="_blog_darefit_btn1">Read All Blog</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="_cta_darefit_wrapper">
			<div className="_cta_darefit_wrap">
				<div className="container">
					<div className="row">
						<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
							<div className="_cta_darefit_cont">
								<h6 className="_cta_darefit_cont_t1">DAREFIT FOR A BETTER FUTURE</h6>
								<h3 className="_cta_darefit_cont_t2">Request More Information</h3>
								<p className="_cta_darefit_cont_p">Welcome to our gym & fitness training centre. Sore today, strong tomorrow. Improve your fitness today.</p>
								<div className="_cta_darefit_cont_btn">
									<a href="#0" className="_cta_darefit_cont_btn1">Contact Us</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<footer className="_footer_darefit_wrapper">
			<div className="_footer_darefit_wrap">
				<div className="container">
					<div className="row">
						<div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
							<div className="_footer_darefit_logo">
								<img src="assets/img/footer-logo.png" alt="image" className="_footer_darefit_logo1"/>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6">
							<div className="_footer_darefit_adr">
								<p className="_footer_darefit_adr_p">123 Market St. #22A 
									Charlottesville, California 1234567</p>
								<div className="_footer_darefit_info">
									<ul className="_footer_darefit_info_ul">
										<li className="_footer_darefit_info_li _underline">
											(000) 111-2222
										</li> 
										<li className="_footer_darefit_info_li _underline1">
											email@gmail.com
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-5 col-sm-5 col-6">
							<div className="_footer_darefit_menu">
								<ul className="_footer_darefit_menu_ul">
									<li className="_footer_darefit_menu_li">
										<a href="#0" className="_footer_darefit_menu_item">About</a>
									</li>
									<li className="_footer_darefit_menu_li">
										<a href="#0" className="_footer_darefit_menu_item">Growers</a>
									</li>
									<li className="_footer_darefit_menu_li">
										<a href="#0" className="_footer_darefit_menu_item">Merchants</a>
									</li>
									<li className="_footer_darefit_menu_li">
										<a href="#0" className="_footer_darefit_menu_item">Partners</a>
									</li>
									<li className="_footer_darefit_menu_li">
										<a href="#0" className="_footer_darefit_menu_item">Contact</a>
									</li>
								</ul>
							</div>
							<div className="_footer_darefit_copy_r8">
								<p className="_footer_darefit_copy_r8_t">© 2021 Besnik. All rights reserved.</p>
							</div>
						</div>
						<div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
							<div className="_footer_darefit_menu">
								<ul className="_footer_darefit_menu_ul">
									<li className="_footer_darefit_menu_li">
										<a href="#0" className="_footer_darefit_menu_item">Facebook</a>
									</li>
									<li className="_footer_darefit_menu_li">
										<a href="#0" className="_footer_darefit_menu_item">Twitter</a>
									</li>
									<li className="_footer_darefit_menu_li">
										<a href="#0" className="_footer_darefit_menu_item">Linkedin</a>
									</li>
									<li className="_footer_darefit_menu_li">
										<a href="#0" className="_footer_darefit_menu_item">Instagram</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-1 col-lg-1 col-md-3 col-sm-3 col-12">
							<div className="_footer_darefit_scroll">
								<a href="#header" className="_footer_darefit_scroll1">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
										<path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v16M18 11l-5.59-6.802a.55.55 0 00-.185-.146.516.516 0 00-.633.146L6 11"/>
									</svg>									  
								</a>
							</div>		
						</div>
					</div>
				</div>
			</div>
		</footer>
        </div>).toNodeTree();
        // actions.addNodeTree(nodeTree);
        actions.addNodeTree(nodeTree, 'ROOT');
        // actions.setOptions((options) => {
        //     // console.log('options--------------------')
        //     // console.log(options)
        // });
        // actions.add({nodes: newNode});
    }

    return (
        // <div ref={ref => connect(drag(ref))} className="_container_active">
        //     {children}
        // </div>
        <div>

        <div className="_panel_header" onClick={addCol} style={{background: 'red'}}>
            <div className="_panel_header_title">
                <h4 className="_panel_header_title_txt" >Add</h4>
            </div>  
            <div className="_panel_header_icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.7" strokeLinejoin="round" className="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
            </div>
        </div>

      
        </div>
    )
}
