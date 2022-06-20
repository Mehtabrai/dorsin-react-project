import React from "react";
import  "react-dom";
import "../assest/header.css"; 
import "../assest/sections.css"
import "bootstrap";
// import "../assest/bootstrap.min.css"; 
//  import App from "./App"; const rootElement = document.
import "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import img from '../images/bg-home.jpg'
import im_g_1 from '../images/img-1 (2).jpg'
import im_g_2 from '../images/img-2.jpg'
import im_g_3 from '../images/img-3.jpg'
import ftimg from '../images/online-world.svg'
import im_g_4 from '../images/img-4.jpg'
import user_2 from '../images/user-2.jpg'
import user_1 from '../images/user-1.jpg'
import user_3 from '../images/user-3.jpg'
import img_11 from '../images/img-11.jpg'
import img_12 from '../images/img-12.jpg'
import img_13 from '../images/img-13.jpg'
import fb from '../images/facebook-app-symbol.png'
import tr from '../images/twitter (1).png'
import ln from '../images/linkedin (1).png'
import gool from '../images/google-plus (1).png'
import inter from '../images/internet.png'
import tlph from '../images/telephone (1).png'
import eml from '../images/email (1).png'
import payment from '../images/payment.png'





function Home(){
    return(
      <div>    
       {/* <nav className="navbar">
        <div className="navbar-container container">
         <div className="_drsn"><h1 className="logo">DORSIN</h1></div>   
        <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        
        <ul className="menu-items">
            <li className="._dsn">  DORSIN
             </li>
             <li></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Blog</a></li> 
          <li><a href="#">Contact</a></li>
          {/* <button><a href="#">Contact</a></button>  
          </ul>
        <ul className="menu-items">
            <button><a href="#">Try it Free</a></button>
            </ul>
     
      </div>
    </nav>    */}
    
    {/* section 1 */}
            
          <div className="_div-1" >
            <div className="bg-home">
            <div className="bgclr">
                <h1 className="home-title">We help startups launch their <br/> products</h1>
                <p className="pt-3 home-desc">Etiam sed.Interdum consequat proin vestibulum class at.</p>
                {/* <p class="play-shadow mt-4"><a class="play-btn video-play-icon" href="/">
                  <i class="mdi mdi-play text-center"></i></a></p> */}
</div>
                  
          </div>
          </div>
<div className="section pt-5" id="services">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <h1 className="section-title text-center">Our Services</h1>
        <div className="section-title-border mt-3"></div>
        <p classNmae="section-subtitle text-muted text-center pt-4 font-secondary">We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.</p></div></div><div class="mt-4 row"><div class="mt-3 col-lg-4"><div class="services-box text-center hover-effect"><i class="pe-7s-diamond text-primary"></i><h4 class="pt-3">Digital Design</h4><p class="pt-3 text-muted">Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p></div></div><div class="mt-3 col-lg-4"><div class="services-box text-center hover-effect"><i class="pe-7s-display2 text-primary"></i><h4 class="pt-3">Unlimited Colors</h4><p class="pt-3 text-muted">Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet.</p></div></div><div class="mt-3 col-lg-4"><div class="services-box text-center hover-effect"><i class="pe-7s-piggy text-primary"></i><h4 class="pt-3">Strategy Solutions</h4><p class="pt-3 text-muted">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia.</p></div></div></div><div class="mt-4 row"><div class="mt-3 col-lg-4"><div class="services-box text-center hover-effect"><i class="pe-7s-science text-primary"></i><h4 class="pt-3">Awesome Support</h4><p class="pt-3 text-muted">It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World.</p></div></div><div class="mt-3 col-lg-4"><div class="services-box text-center hover-effect"><i class="pe-7s-news-paper text-primary"></i><h4 class="pt-3">Truly Multipurpose</h4><p class="pt-3 text-muted">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p></div></div><div class="mt-3 col-lg-4"><div class="services-box text-center hover-effect"><i class="pe-7s-plane text-primary"></i><h4 class="pt-3">Easy to customize</h4><p class="pt-3 text-muted">Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia.</p>
</div></div></div></div>
</div>
     

     <div className="section bg-light" id="features" >
       <div className="container">
         <div className="vertical-content row justify-content-around">
           <div className="col-lg-5">
             <div class="features-box ">
               <h3>A digital web design studio creating modern &amp; engaging online experiences</h3><br></br>
               <p className="text-muted web-desc">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
               <ul className="text-muted list-unstyled mt-4 features-item-list">
                 <li className="">We put a lot of effort in design.</li><br></br>
                 <li className="">The most important ingredient of successful website.</li><br></br>
                 <li className="">Sed ut perspiciatis unde omnis iste natus error sit.</li><br></br>
                 <li className="">Submit Your Orgnization.</li></ul>
                 <a className="btn btn-danger mt-4 " href="/">Learn More</a>
                 </div></div>

                 <div className="col-lg-7">
                   <div className="features-img features-right text-right">
       <img src={ftimg} alt="macbook" class="img-fluid" /></div></div></div></div></div>
           {/* <div class="features-img features-right text-right"> */}
           {/* <img src={ftimg} alt="macbook" class="img-fluid" /> */}
           

          
           
           {/* <div > */}
           <div className="section _pd section-lg bgimg">
           <div className="bg-overlay"></div>
          <div classNmae="container ">
               <div className="row" >
                 <div className="text-center col-lg-12 pt-5 ">
                   <h2 className="text-white">Build your dream website today</h2>
                   <p className="pt-3 home-desc">But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her.</p><a class="btn btn-white mt-4 waves-effect waves-light mb-5" href="/">View Plan &amp; Pricing</a></div></div></div><div class="bg-pattern-effect">
                   <div className="_efct ">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB9AAAAAoCAYAAACmXmGDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyRkNGNTgzOUQ0MDhFOTExODI3N0RBNUZFNzA2MzlDMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0RDk2MEE2NTA5OTMxMUU5QTJBQTk3Q0I3QkJENkQwOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0RDk2MEE2NDA5OTMxMUU5QTJBQTk3Q0I3QkJENkQwOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozM0NGNTgzOUQ0MDhFOTExODI3N0RBNUZFNzA2MzlDMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyRkNGNTgzOUQ0MDhFOTExODI3N0RBNUZFNzA2MzlDMiIvPiA8L3JkZjpEZXNjcmlwdGlv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" class="cruve_line" height="100" /></div>
                  </div>
             </div>
                  {/* </div> */}

                  <div id="_prcg">
                    <div className="section pt-5" id="pricing">
                      <div className="container">
                        <div className="row">
                         
                          <div classNmae="col-lg-8 offset-lg-2">
                            <h1 className="section-title text-center">Our Pricing</h1>
                            <div className="section-title-border mt-3"></div>
                            <p className="section-subtitle text-muted text-center pt-4 font-secondary">Call to action pricing table is really crucial to your for your business website. Make your bids stand-out with amazing options.</p></div></div>
                            <div className="mt-5 row">
                           
                              <div className="col-lg-4">
                              <div class="text-center pricing-box hover-effect">
                                <h4 className="text-uppercase ">Economy</h4><h1>$9.90</h1>
                                <h6 class="text-uppercase text-muted">Billing Per MONTH</h6>
                                <div class="pricing-border"></div>
                                <div class="plan-features mt-4"><p>Bandwidth: <b class="text-danger">1GB</b></p><p>Onlinespace : <b class="text-danger">50MB</b></p><p>Support: <b class="text-danger">No</b></p><p>Domain: <b class="text-danger">1</b></p><p>Hidden Fees: <b class="text-danger">No</b></p></div>
                                <a class="btn btn-danger waves-effect waves-light mt-4" href="/">Join Now</a>
                                </div></div>
                                <div class="col-lg-4">
                              <div class="text-center pricing-box hover-effect">
                                <h4 class="text-uppercase">DELUXE</h4><h1>$19.90</h1>
                                <h6 class="text-uppercase text-muted">Billing Per MONTH</h6>
                                <div class="pricing-border"></div>
                                <div class="plan-features mt-4"><p>Bandwidth: <b class="text-danger">10GB</b></p><p>Onlinespace : <b class="text-danger">500MB</b></p><p>Support: <b class="text-danger">No</b></p><p>Domain: <b class="text-danger">10</b></p><p>Hidden Fees: <b class="text-danger">No</b></p></div>
                                <a class="btn btn-danger waves-effect waves-light mt-4" href="/">Join Now</a>
                                </div></div>
                                <div class="col-lg-4">
                              <div class="text-center pricing-box hover-effect">
                                <h4 class="text-uppercase">ULTIMATE</h4><h1>$29.90</h1>
                                <h6 class="text-uppercase text-muted">Billing Per MONTH</h6>
                                <div class="pricing-border"></div>
                                <div class="plan-features mt-4"><p>Bandwidth: <b class="text-danger">100GB</b></p><p>Onlinespace : <b class="text-danger">2GB</b></p><p>Support: <b class="text-danger">Yes</b></p><p>Domain: <b class="text-danger">Unlimited</b></p><p>Hidden Fees: <b class="text-danger">No</b></p></div>
                                <a class="btn btn-danger waves-effect waves-light mt-4" href="/">Join Now</a>
                                </div></div>

                    </div></div>
                    </div>
                  </div>
                  <div>
                  
                  <div class="section pt-4" id="team">
                    <div class="container">
                      <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                          <h1 class="section-title text-center">BEHIND THE PEOPLE</h1>
                          <div class="section-title-border mt-3"></div>
                          <p class="section-subtitle text-muted text-center pt-4 font-secondary">It is a long established fact that create category leading brand experiences a reader will be distracted by the readable content of a page when looking at its layout.</p></div></div>
                          <div class="mt-5 row">
                            <div class="col-sm-6 col-lg-3">
                              <div class="team-box text-center hover-effect">
                            <div class="team-wrapper"><div class="team-member">
                              <img alt="team" src={im_g_1} class="img-fluid rounded"/>
                              </div></div>
                              <h4 class="team-name">Frank Johnson</h4><p class="text-uppercase team-designation">CEO</p></div></div>
                              <div class="col-sm-6 col-lg-3">
                                <div class="team-box text-center hover-effect">
                                  <div class="team-wrapper">
                                    <div class="team-member">
                                      <img alt="team" src={im_g_2} class="img-fluid rounded"/></div></div>
                                      <h4 class="team-name">Elaine Stclair</h4>
                                      <p class="text-uppercase team-designation">DESIGNER</p></div></div>
                                      <div class="col-sm-6 col-lg-3">
                                        <div class="team-box text-center hover-effect">
                                          <div class="team-wrapper">      
                                          <div class="team-member">
                                            <img alt="team" src={im_g_3} class="img-fluid rounded"/></div></div>
                                            <h4 class="team-name">Wanda Arthur</h4><p class="text-uppercase team-designation">DEVELOPER</p></div></div>
                                            <div class="col-sm-6 col-lg-3">
                                              <div class="team-box text-center hover-effect">
                                                <div class="team-wrapper"><div class="team-member">
                                                  <img alt="team" src={im_g_4} class="img-fluid rounded"/></div></div>
                                                  <h4 class="team-name">Joshua Stemple</h4><p class="text-uppercase team-designation">MANAGER</p></div></div></div></div>
                                                  </div>
                                 </div>

                                                  <div class="section bg-light">
                                                    <div class="container">
                                                      <div class="row">
                                          <div class="col-lg-8 offset-lg-2">
                                              <h1 class="section-title text-center">WORK PROCESS</h1>
                                                          <div class="section-title-border mt-3"></div>
                                                          <p class="section-subtitle text-muted text-center pt-4 font-secondary">In an ideal world this website wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts.</p>
                                                          </div></div>

                                                          <div class="row">
                                                            <div class="text-center process-left-icon-1 col-lg-6"><i class="pe-7s-angle-right"></i></div>
                                                            <div class="text-center process-left-icon-2 col-lg-6"><i class="pe-7s-angle-right"></i></div>
                                                            </div>
                                                            
                                                            <div class="mt-5 row">
                                                              <div class="plan-line col-lg-4">
                                                                <div class="text-center process-box">
                                                                  <i class="pe-7s-pen text-primary"></i>
                                                                  <h4 class="pt-3">Tell us what you need</h4>
                                                                  <p class="text-muted">The Big Oxmox advised her not to do so.</p>
                                                                  </div></div>
                                                                  <div class="plan-line col-lg-4">
                                                                    <div class="text-center process-box">
                                                                      <i class="pe-7s-id text-primary"></i>
                                                                      <h4 class="pt-3">Get free quotes</h4>
                                                                      <p class="text-muted">Little Blind Text didn’t listen.</p>
                                                                      </div></div>
                                                                      <div class="col-lg-4">
                                                                        <div class="text-center process-box">
                                                                          <i class="pe-7s-target text-primary"></i>
                                                                          <h4 class="pt-3">Deliver high quality product</h4>
                                                                          <p class="text-muted">When she reached the first hills.</p>
                                                                          </div></div>
                                                                          <div class="text-center mx-auto">
                                                                            <a class="btn btn-danger waves-light waves-effect mt-5" href="/">Get Started <i class="mdi mdi-arrow-right"></i></a>
                                                                            </div></div></div>
                                                                            
                                                                            </div>


                                                  <div>
                                                    <div class="section" id="testi">
                                                      <div class="container">
                                                        <div class="row ">
                                                          <div class="col-lg-8 offset-lg-2">
                                                            <h1 class="section-title text-center">WHAT THEY'VE SAID</h1>
                                                            <div class="section-title-border mt-3"></div>
                                                            <p class="section-subtitle text-muted text-center pt-4 font-secondary">The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.</p></div></div>
                                                            <div class="mt-5 row justify-content-center">
                                                              {/* Box-1 */}
                                                            <div class="col-lg-4">
                                                            <div class="testimonial-box mt-4">
                                                            <img src={user_2} alt="client" class="img-fluid d-block img-thumbnail rounded-circle" />
                                                            <div class="testimonial-decs">
                                                            <p class="text-muted text-center mb-0">“I feel confident imposing change on myself. It's a lot more fun progressing than looking back. That's why I need to throw curve balls.” </p></div>
                                                            <h5 class="text-center text-uppercase pt-3">RUBEN REED  - <span class="text-muted text-capitalize">Charleston</span>
                                                            </h5></div></div>
                                                     <div class="col-lg-4"><div class="testimonial-box hover-effect mt-4">
                                                       <img src={user_1} alt="client" class="img-fluid d-block img-thumbnail rounded-circle" />
                                                              <div class="testimonial-decs"><p class="text-muted text-center mb-0">“Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty.” </p></div>
                                                              <h5 class="text-center text-uppercase pt-3">MICHAEL P. HOWLETT  - <span class="text-muted text-capitalize">Worcester</span></h5>
                                                              </div></div>
                                                  
                                                   <div class="col-lg-4">
                                                        <div class="testimonial-box hover-effect mt-4">
                                                            <img src={user_3} alt="client" class="img-fluid d-block img-thumbnail rounded-circle" />
                                                              <div class="testimonial-decs"><p class="text-muted text-center mb-0">“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” </p></div>
                                                              <h5 class="text-center text-uppercase pt-3">THERESA D. SINCLAIR - <span class="text-muted text-capitalize">Lynchburg</span></h5></div>
                                                         </div></div></div></div>  
                                        
                                                  </div>

                       <div class="section section-lg bg-get-start">
                           <div class="bg-overlay"></div>
                           <div class="container">
                             <div class="row">
                               <div class="text-center col-lg-8 offset-lg-2">
                                 <h1 class="get-started-title text-white">Let's Get Started</h1>
                                 <div class="section-title-border mt-4 bg-white"></div>
                                 <p class="section-subtitle font-secondary text-white text-center pt-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                                 <a class="btn btn-white waves-effect mt-3 mb-4" href="/">Get Started <i class="mdi mdi-arrow-right"></i> </a>
                                 </div></div></div>
                                 <div class="bg-pattern-effect ">
                                   <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB9AAAAAoCAYAAACmXmGDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyRkNGNTgzOUQ0MDhFOTExODI3N0RBNUZFNzA2MzlDMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0RDk2MEE2NTA5OTMxMUU5QTJBQTk3Q0I3QkJENkQwOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0RDk2MEE2NDA5OTMxMUU5QTJBQTk3Q0I3QkJENkQwOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozM0NGNTgzOUQ0MDhFOTExODI3N0RBNUZFNzA2MzlDMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyRkNGNTgzOUQ0MDhFOTExODI3N0RBNUZFNzA2MzlDMiIvPiA8L3JkZjpEZXNjcmlwdGlv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" class="cruve_line" height="100" />
                                   
                                   </div>
                                  
                                  </div>


                                  <div className="section bg-light pt-5" id="blog">
                                    <div className="container">
                                      <div class="row">
                                        <div class="col-lg-8 offset-lg-2">
                                          <h1 class="section-title text-center">BLOG</h1>
                                          <div class="section-title-border mt-3"></div>
                                          <p class="section-subtitle text-muted text-center pt-4 font-secondary">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean class at a euismod mus luctus quam.</p>
                                          </div></div>
                                          <div class="mt-4 row">
                                            <div class="col-lg-4">
                                              <div class="blog-box mt-4 hover-effect">
                                                <img src={img_11} class="img-fluid" alt="blog" />
                                                <div className="_pr-snl">
                                                  <h5 class="mt-4 text-muted">UI &amp; UX Design</h5>
                                                  <h4 class="mt-3 "><a class="blog-title text-black" href="/"> Doing a cross country road trip </a></h4>
                                                  <p class="text-muted">She packed her seven versalia, put her initial into the belt and made herself on the way..</p>
                                                  <div class="mt-3"><a class="read-btn" href="/">Read More <i class="mdi mdi-arrow-right"></i></a></div>
                                                  </div></div></div>
                                                  <div class="col-lg-4">
                                                    <div class="blog-box mt-4 hover-effect">
                                                      <img src={img_12} class="img-fluid" alt="blog" />
                                                      <div className="_pr-snl"><h5 class="mt-4 text-muted">Digital Marketing</h5>
                                                      <h4 class="mt-3"><a class="blog-title text-black" href="/"> New exhibition at our Museum </a></h4>
                                                      <p class="text-muted">Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                                                      <div class="mt-3"><a class="read-btn" href="/">Read More <i class="mdi mdi-arrow-right"></i></a></div>
                                                      </div></div></div>
                                                      <div class="col-lg-4">
                                                        <div class="blog-box mt-4 hover-effect">
                                                          <img src={img_13} class="img-fluid" alt="blog" />
                                                          <div className="_pr-snl"><h5 class="mt-4 text-muted">Travelling</h5>
                                                          <h4 class="mt-3"><a class="blog-title text-black " href="/"> Why are so many people.. </a></h4><p class="text-muted">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p><div class="mt-3"><a class="read-btn" href="/">Read More <i class="mdi mdi-arrow-right"></i></a></div></div></div></div></div></div>
                                  
                                                      </div>




                                        <div class="section " id="contact">
                                          <div class="container">
                                            <div class="row">
                                              <div class="col-lg-8 offset-lg-2">
                                                <h1 class="section-title text-center">GET IN TOUCH</h1>
                                                <div class="section-title-border mt-3"></div>
                                                <p class="section-subtitle text-muted text-center pt-4 font-secondary">We thrive when coming up with innovative ideas but also understand that a smart concept should be supported with measurable results.</p>
                                                </div></div>

                                                <div class="row">
                                                  <div class="col-lg-4">
                                                    <div class="mt-4 pt-4 ">
                                                      <p class="mt-4 text-lg-start"><span class="h5">Office Address 1:</span><br/> <span class="text-muted d-block mt-2">4461 Cedar Street Moro, AR 72368</span></p>
                                                      <p class="mt-4 text-lg-start"><span class="h5">Office Address 2:</span><br/> <span class="text-muted d-block mt-2">2467 Swick Hill Street <br/>New Orleans, LA 70171</span></p>
                                                      <p class="mt-4 text-lg-start"><span class="h5">Working Hours:</span><br/> <span class="text-muted d-block mt-2">9:00AM To 6:00PM</span></p>
                                                      </div></div>
                                                      
                                                      <div class="col-lg-8">
                                                        <div class="custom-form mt-4 pt-4">
                                                          <div id="message">
                                                            </div>
                                                            <form novalidate="" action="#" name="contact-form" id="contact-form" method="get" class="av-invalid">
                                                              <div class="row">
                                                                <div class="col-lg-6">
                                                                  <div class="mt-2 form-group">
                                                                    <div class="form-group">
                                                                      <input required="" name="name" placeholder="Your name*" id="name" type="text" class="form-control is-untouched is-pristine av-invalid form-control" value=""/>
                                                                      </div></div></div>
                                                                      <div class="col-lg-6">
                                                                        <div class="mt-2 form-group">
                                                                          <div class="form-group">
                                                                            <input required="" name="email" placeholder="Your email*" id="email" type="email" class="form-control is-untouched is-pristine av-invalid form-control" value=""/>
                                                                            </div></div></div></div>
                                                                            
                                                                            <div class="row">
                                                                              <div class="col-lg-12">
                                                                                <div class="mt-2 form-group">
                                                                                  <div class="form-group">
                                                                                    <input required="" name="subject" placeholder="Your Subject.." id="subject" type="text" class="form-control is-untouched is-pristine av-invalid form-control" value=""/>
                                                                                    </div></div></div></div>
                                                                                    
                                                                                    <div class="row">
                                                                                      <div class="col-lg-12">
                                                                                        <div class="mt-2 form-group">
                                                                                          <textarea name="comments" id="comments" rows="4 " class="_text_area" placeholder="Your message..."></textarea>
                                                                                          </div></div></div>
                                                                                          
                                                                                          <div class="row">
                                                                                            <div class="text-end col-lg-12 mt-3">
                                                                                              <input type="submit" id="submit" name="send" class="submitBnt btn btn-danger" value="Send Message"/>
                                                                                              <div id="simple-msg"></div>
                                                                                              </div></div></form></div></div></div></div>
                                                                                              
                                                                                              </div>
                                                                                              <div class="contact-social bg-light"></div>
                                                             <div class="container">
                                                                <div class="align-items-center row">
                                                                  <div class="col-lg-6">
                                                                    <ul class="list-inline social mt-4">
                                                                      <li class="list-inline-item"><a class="social-icon" href="/"><img src={fb} className="fb" /></a></li>
                                                                      <li class="list-inline-item"><a class="social-icon" href="/"><img src={tr} className="fb" /></a></li>
                                                                      <li class="list-inline-item"><a class="social-icon" href="/"><img src={ln} className="fb" /></a></li>
                                                                      <li class="list-inline-item"><a class="social-icon" href="/"><img src={gool} className="fb" /></a></li>
                                                                      <li class="list-inline-item"><a class="social-icon" href="/"><img src={inter} className="fb" /></a></li>
                                                                      </ul></div>
                                                                      <div class="mt-4 col-lg-3">
                                                                        <p class="contact-title"><img src={tlph}  /> &nbsp;+91 123 4556 789</p></div>
                                                                   <div class="mt-4 text-right col-lg-3">
                                                                      <p class="contact-title"><img src={eml}  /> &nbsp; Support@info.com</p>
                                                                   </div>
                                                     </div>
                                                     </div>
                             
                                                    
                                                        

                                          {/* footer  */}
                        <footer class="footer">
                         <div class="container">
                           <div class="row justify-content-around">
                             <div class="mt-4 col-lg-1 ">
                               <h4>DORSIN</h4>
                               <div class="text-muted mt-4">
                                 <ul class="list-unstyled footer-list">
                                   <li><a href="/">Home</a></li>
                                   <li><a href="/">About us</a></li>
                                   <li><a href="/">Careers</a></li>
                                   <li><a href="/">Contact us</a></li>
                                  </ul>
                                </div></div>
                              <div class="mt-4 col-lg-1">
                                <h4>Information</h4>
                                <div class="text-muted mt-4">
                                  <ul class="list-unstyled footer-list">
                                    <li><a href="/">Terms &amp; Condition</a></li>
                                    <li><a href="/">About us</a></li>
                                    <li><a href="/">Jobs</a></li>
                                    <li><a href="/">Bookmarks</a></li>
                                    </ul>
                                </div></div>
                                <div class="mt-4 col-lg-1">
                                  <h4>Support</h4>
                                  <div class="text-muted mt-4">
                                    <ul class="list-unstyled footer-list">
                                      <li><a href="/">FAQ</a></li>
                                      <li><a href="/">Contact</a></li>
                                      <li><a href="/">Disscusion</a></li>
                                    </ul>
                                    </div></div>
                                    <div class="mt-4 col-lg-3">
                                      <h4>Subscribe</h4>
                                    <div class="text-muted mt-4 ">
                                      <p >In an ideal world this text wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts.</p>
                                    </div>
                                    <form class="subscribe">
                                      <input placeholder="Email" class="form-control" required="" />
                                      <a class="submit" href="/"></a>
                                    </form>
                               </div></div></div>
                       </footer>     

                       <div class="footer-alt">
                         <div class="container">
                           <div class="row">
                             <div class="col-lg-12">
                               <div class="float-start pull-none">
                                 <p class="copy-rights text-muted">2019 - 2020 © Dorsin - Themesbrand</p></div>
                                 <div class="float-end pull-none">
                                   <img src={payment} alt="payment" height="36" />
                                   </div>
                       <div class="clearfix"></div></div></div></div>
                       
                       </div>   
                       
                       
             

                                 </div>

     
     
     
     
     
     
     
     
     

  
    
    )
  
    
   
    
    
}

export default Home;