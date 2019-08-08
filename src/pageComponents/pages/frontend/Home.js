import React from 'react';
import {connect} from 'react-redux';
import {createAssignment} from '../../../store/actions/todoActions';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import Navbar from '../../layout/frontlayout/Navbar';
import Footer from '../../layout/frontlayout/Footer';

//<------- Images --------> ../../styles/frontstyles/assets/img/700x900/img1.jpg
import Background from '../../styles/frontstyles/assets/img/1920x1080/background2.png';
import Bg2 from '../../styles/frontstyles/assets/img/bg/bg2.png';
import img1 from '../../styles/frontstyles/assets/img/100x100/img1.jpg';
import img15 from '../../styles/frontstyles/assets/img/100x100/img15.jpg';
import img12 from '../../styles/frontstyles/assets/img/700x900/img1.jpg';


//<------- STYLES ------>
import '../../styles/frontstyles/assets/vendor/font-awesome/css/all.min.css';
import '../../styles/frontstyles/assets/vendor/hs-megamenu/src/hs.megamenu.css'
import '../../styles/frontstyles/assets/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';
import '../../styles/frontstyles/assets/vendor/custombox/dist/custombox.min.css';
import '../../styles/frontstyles/assets/vendor/animate.css/animate.min.css';
import '../../styles/frontstyles/assets/vendor/slick-carousel/slick/slick.css';
import '../../styles/frontstyles/assets/vendor/fancybox/jquery.fancybox.css';
import '../../styles/frontstyles/assets/css/theme.css';

/* eslint-disable import/first */

{/* <!-- JS Global Compulsory --> */}
  import '../../styles/frontstyles/assets/vendor/jquery/dist/jquery.min.js';
  import '../../styles/frontstyles/assets/vendor/jquery-migrate/dist/jquery-migrate.min.js';
  import '../../styles/frontstyles/assets/vendor/popper.js/dist/umd/popper.min.js';
  import '../../styles/frontstyles/assets/vendor/bootstrap/bootstrap.min.js';

  {/* <!-- JS Implementing Plugins --> */}
  import '../../styles/frontstyles/assets/vendor/hs-megamenu/src/hs.megamenu.js';
  import '../../styles/frontstyles/assets/vendor/jquery-validation/dist/jquery.validate.min.js';
  import '../../styles/frontstyles/assets/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';
  import '../../styles/frontstyles/assets/vendor/custombox/dist/custombox.min.js';
  //import '../../styles/frontstyles/assets/vendor/custombox/dist/custombox.legacy.min.js';
  import '../../styles/frontstyles/assets/vendor/slick-carousel/slick/slick.js';
  //import '../../styles/frontstyles/assets/vendor/fancybox/jquery.fancybox.min.js';

  {/* <-- JS Space --> */}
  import '../../styles/frontstyles/assets/js/hs.core.js';
  import '../../styles/frontstyles/assets/js/components/hs.header.js';
  import '../../styles/frontstyles/assets/js/components/hs.unfold.js';
  import '../../styles/frontstyles/assets/js/components/hs.validation.js';
  import '../../styles/frontstyles/assets/js/helpers/hs.focus-state.js';
  import '../../styles/frontstyles/assets/js/components/hs.malihu-scrollbar.js';
  import '../../styles/frontstyles/assets/js/components/hs.modal-window.js';
  import '../../styles/frontstyles/assets/js/components/hs.show-animation.js';
  import '../../styles/frontstyles/assets/js/components/hs.slick-carousel.js';
  import '../../styles/frontstyles/assets/js/components/hs.fancybox.js';
  import '../../styles/frontstyles/assets/js/components/hs.go-to.js';

class Home extends React.Component{

  state={
    title:'',
    email:'',
    password:'',
    showModal: false
    
  }
  handleChange =(e)=>{
    this.setState({
      [e.target.id] : e.target.value
    })
  }
  handleSubmit=(e)=>{
    e.preventDefault()
    //console.log(this.state)
    this.props.createAssignment(this.state)
  }


    render(){
      
        return(
  
<body> 

  {/* <!-- ========== HEADER ========== --> */}
  <header id="header" className="u-header u-header--modern u-header--bordered u-header--bg-transparent u-header--white-nav-links u-header--sticky-top-lg">
    <div className="u-header__section">
      <div id="logoAndNav" className="container-fluid">
        {/* <!-- Nav --> */}

        <Navbar />

        {/* <!-- End Nav --> */}
      </div>
    </div>
  </header>
  {/* <!-- ========== END HEADER ========== --> */}

  {/* <!-- ========== MAIN CONTENT ========== --> */}
  <main id="content" role="main">
    {/* <!-- Hero Section --> */}
    <div className="gradient-overlay-half-dark-v3 bg-img-hero" style={{backgroundImage: `url(${Background})`}}>
      {/* <!-- Main Content --> */}
      <div className="d-lg-flex align-items-lg-center height-85vh--lg">
        <div className="container space-2 space-0--lg mt-lg-8">
          <div className="row justify-content-lg-between align-items-lg-center">
            <div className="col-lg-5 mb-7 mb-lg-0">
              {/* <!-- Title --> */}
              <span className="d-block text-white text-uppercase mb-2"> Join the study counter</span>
              <h1 className="display-4 font-size-48--md-down text-white mb-0">Post your homework question, get instant help</h1>
              {/* <!-- End Title --> */}
            </div>

            <div className="col-lg-5">
              {/* <!-- Signup Form --> */}
              <div className="bg-white shadow-sm rounded p-6">
                <form className="js-validate">
                  <div className="mb-4">
                    <h2 className="h4">Get started</h2>
                  </div>

                  {/* <!-- Input --> */}
                  <div className="js-form-message mb-3">
                    <div className="js-focus-state input-group input-group form">
                      <input type="text" className="form-control form__input" id="title" name="title" required
                             placeholder="Enter the title"
                             aria-label="Enter the title"
                             onChange={this.handleChange}/>
                    </div>
                  </div>
                  {/* <!-- End Input --> */}

                  {/* <!-- Input --> */}
                  <div className="js-form-message mb-3">
                    <div className="js-focus-state input-group input-group form">
                        <input type="email" className="form-control form__input" id="email" name="email" required
                             placeholder="Enter your email address"
                             aria-label="Enter your email address"
                             onChange={this.handleChange}/>
                    </div>
                  </div>
                  {/* <!-- End Input --> */}

                  {/* <!-- Input --> */}
                  <div className="js-form-message mb-3">
                    <div className="js-focus-state input-group input-group form">
                      <input type="password" className="form-control form__input" id="password" name="password" required
                             placeholder="Enter your password"
                             aria-label="Enter your password"
                             onChange={this.handleChange}/>
                    </div>
                  </div>
                  {/* <!-- End Input --> */}

                  <button type="submit" className="btn btn-block btn-primary" onClick={this.handleSubmit} >Get Started</button>
                </form>
              </div>
              {/* <!-- End Signup Form --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Main Content --> */}
    </div>

    {/* <!-- Features Section --> */}
    <div class="container position-relative z-index-2">
      <div class="bg-gray-100 shadow-lg rounded mt-n9">
        <div class="card-deck d-block d-lg-flex card-lg-gutters-1">
          <div class="card border-0 mb-2">
            {/* <!-- Listing --> */}
            <div class="card-body p-4">
              <div class="media">
                <img class="max-width-9 mb-2" src="https://htmlstream.com/preview/space-v1.3/assets/svg/components/consult-cyan-icon.svg" alt="ImageDescription"/>
                <div class="media-body px-4">
                  <h2 class="h6 text-dark mb-1">6000+</h2>
                  <p class="mb-0">Joint over 6000 professionals and students who have used our service from allover the world</p>
                </div>
              </div>
            </div>
            {/* <!-- End Listing --> */}
          </div>

          <div class="card border-0 mb-2">
            {/* <!-- Listing --> */}
            <div class="card-body p-4">
              <div class="media">
                <img class="max-width-9 mb-2" src="https://htmlstream.com/preview/space-v1.3/assets/svg/components/plan-brown-icon.svg" alt="Image Description"/>
                <div class="media-body px-4">
                  <h3 class="h6 text-dark mb-1">Expert writers</h3>
                  <p class="mb-0">All our writers are native English graduates who are tested and qualified to handle your assignments</p>
                </div>
              </div>
            </div>
            {/* <!-- End Listing --> */}
          </div>

          <div class="card border-0 mb-2">
            {/* <!-- Listing --> */}
            <div class="card-body p-4">
              <div class="media">
                <img class="max-width-9 mb-2" src="https://htmlstream.com/preview/space-v1.3/assets/svg/components/create-blue-icon.svg" alt="Image Description"/>
                <div class="media-body px-4">
                  <h4 class="h6 text-dark mb-1">Original content</h4>
                  <p class="mb-0">We guarantee plagiarism-free and high quality work.</p>
                </div>
              </div>
            </div>
            {/* <!-- End Listing --> */}
          </div>
        </div>

        <div class="card-deck d-block d-lg-flex card-lg-gutters-1">
          <div class="card border-0 mb-2 mb-lg-0">
            {/* <!-- Listing --> */}
            <div class="card-body p-4">
              <div class="media">
                <img class="max-width-9 mb-2" src="https://htmlstream.com/preview/space-v1.3/assets/svg/components/develop-purple-icon.svg" alt="Image Description"/>
                <div class="media-body px-4">
                  <h4 class="h6 text-dark mb-1">Save money and time</h4>
                  <p class="mb-0">We offer fair rates and deliver your work before deadline.</p>
                </div>
              </div>
            </div>
            {/* <!-- End Listing --> */}
          </div>

          <div class="card border-0 mb-2 mb-lg-0">
            {/* <!-- Listing --> */}
            <div class="card-body p-4">
              <div class="media">
                <img class="max-width-9 mb-2" src="https://htmlstream.com/preview/space-v1.3/assets/svg/components/rocket-red-icon.svg" alt="Image Description"/>
                <div class="media-body px-4">
                  <h4 class="h6 text-dark mb-1">Unlimited revisons</h4>
                  <p class="mb-0">Our tutors ensure your paper meets the set standards.</p>
                </div>
              </div>
            </div>
            {/* <!-- End Listing --> */}
          </div>

          <div class="card border-0 mb-0">
            {/* <!-- Listing --> */}
            <div class="card-body p-4">
              <div class="media">
                <img class="max-width-9 mb-2" src="https://htmlstream.com/preview/space-v1.3/assets/svg/components/data-analysis-dark-icon.svg" alt="Image Description"/>
                <div class="media-body px-4">
                  <h4 class="h6 text-dark mb-1">24/7 availability</h4>
                  <p class="mb-0">Our tutors are available round the clock to deliver your assignments even with short deadlines.</p>
                </div>
              </div>
            </div>
            {/* <!-- End Listing --> */}
          </div>
        </div>
      </div>
    </div>
    {/* <!-- End Features Section --> */}

    <hr className="my-0"/>

    {/* <!-- Features Section --> */}
    <div className="container space-2 space-3--lg">
      <div className="row justify-content-lg-between">
        <div className="col-md-4 col-lg-4 mb-7 mb-md-0">
          <div className="tab-vertical tab-vertical-md py-5 mr-lg-7">
            <div className="pr-md-7 mb-5">
              <h3 className="h4">Get your paper delivered in 3 easy steps</h3>
            </div>

            {/* <!-- Tab Nav --> */}
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a className="nav-link active tab-vertical__nav-link" id="v-pills-features-tab" data-toggle="pill" href="#v-pills-features" role="tab" aria-controls="v-pills-features" aria-selected="true">
                1. Submit order details
              </a>
              <a className="nav-link tab-vertical__nav-link" id="v-pills-key-benefits-tab" data-toggle="pill" href="#v-pills-key-benefits" role="tab" aria-controls="v-pills-key-benefits" aria-selected="false">
                2. Receive bids from tutors
              </a>
              <a className="nav-link tab-vertical__nav-link" id="v-pills-company-tab" data-toggle="pill" href="#v-pills-company" role="tab" aria-controls="v-pills-company" aria-selected="false">
                3. Get your paper
              </a>
            </div>
            {/* <!-- End Tab Nav --> */}
          </div>
        </div>

        <div className="col-md-8">
          {/* <!-- Tab Content --> */}
          <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-features" role="tabpanel" aria-labelledby="v-pills-features-tab">
              <div className="row">
                <div className="col-sm-6 mb-7 mb-sm-9">
                  {/* <!-- Icon Block --> */}
                  <div className="pr-lg-4">
                    <img className="maxWidth-9 mb-2" src="https://htmlstream.com/preview/space-v1.3/assets/svg/components/consult-primary-icon.svg" alt="imgDescription"/>
                    <p>If you have files that are part of the assignment, attachment them and submit the order.</p>
                    {/* <a href="/">
                      Learn More
                      <span className="fa fa-angle-right align-middle ml-2"></span>
                    </a> */}
                  </div>
                  {/* <!-- End Icon Block --> */}
                </div>

                <div className="col-sm-6 mb-7 mb-sm-9">
                  {/* <!-- Icon Block --> */}
                  <div className="pr-lg-4">
                    <img className="max-width-9 mb-2" src="https://htmlstream.com/preview/space-v1.3/assets/svg/components/plan-brown-icon.svg" alt="imgDescription"/>
                    <p>Create your order. Fill in the order details giving as much information as possible.
                      Include your aacdemic level and the deadline of the assignment.</p>
                    {/* <a href="/">
                      Learn More
                      <span className="fa fa-angle-right align-middle ml-2"></span>
                    </a> */}
                  </div>
                  {/* <!-- End Icon Block --> */}
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="v-pills-key-benefits" role="tabpanel" aria-labelledby="v-pills-key-benefits-tab">
              <div className="row align-items-lg-center">
                <div className="col-lg-5 mb-7 mb-7 mb-lg-0">
                  <img className="img-fluid" src={img12} alt="imgDescription"/>
                </div>

                <div className="col-lg-7">
                  {/* <!-- Description --> */}
                  <div className="pl-lg-4">
                    <span className="u-label u-label--sm u-label--purple mb-3">Integrations</span>
                    <h2 className="h3 mb-3">Tutors place bids</h2>
                    <p>Our top tutors get the first priority to look at the details of your assignment and send competitive bids. 
                      You can access their profile to check their portifolio. Select a tutor you are comfortable to work.</p>
                    <p>After confirming the tutor you want to work on your assignment, then tutor starts the research
                      immediately to ensure the deadline is met as well we maintaining the highest standards.</p>
                    {/* <a href="/">
                      Learn More
                      <span className="fa fa-angle-right align-middle ml-2"></span>
                    </a> */}
                  </div>
                  {/* <!-- End Description --> */}
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="v-pills-company" role="tabpanel" aria-labelledby="v-pills-company-tab">
              <div className="row">
                <div className="col-sm-6 mb-7 mb-sm-9">
                  {/* <!-- Icon Block --> */}
                  <div className="pr-lg-4">
                    <img className="max-width-9 mb-2" src="https://htmlstream.com/preview/space-v1.3/assets/svg/components/rocket-red-icon.svg" alt="imgDescription"/>
                    <p>Your paper is automatically passed through plagiarism detection software to make sure it 
                      is orginal work before being sent to you.</p>
                    {/* <a href="/">
                      Learn More
                      <span className="fa fa-angle-right align-middle ml-2"></span>
                    </a> */}
                  </div>
                  {/* <!-- End Icon Block --> */}
                </div>

                <div className="col-sm-6 mb-7 mb-sm-9">
                  {/* <!-- Icon Block --> */}
                  <div className="pr-lg-4">
                    <img className="max-width-9 mb-2" src="https://htmlstream.com/preview/space-v1.3/assets/svg/components/data-analysis-blue-icon.svg" alt="imgDescription"/>
                    <p>For any revisons, contact the writer directly until you are satisified with the quality 
                      of work done.</p>
                    {/* <a href="/">
                      Learn More
                      <span className="fa fa-angle-right align-middle ml-2"></span>
                    </a> */}
                  </div>
                  {/* <!-- End Icon Block --> */}
                </div>

                <div className="col-sm-6 mb-7 mb-md-9">
                  {/* <!-- Icon Block --> */}
                  <div className="pr-lg-4">
                    <img className="max-width-9 mb-2" src="https://htmlstream.com/preview/space-v1.3/assets/svg/components/arrow-primary-icon.svg" alt="imgDescription"/>
                    <p>You are assured of high-quality work delivered before the set deadline.</p>
                    {/* <a href="/">
                      Learn More
                      <span className="fa fa-angle-right align-middle ml-2"></span>
                    </a> */}
                  </div>
                  {/* <!-- End Icon Block --> */}
                </div>

                <div className="col-sm-6">
                  {/* <!-- Icon Block --> */}
                  <div className="pr-lg-4">
                    <img className="max-width-9 mb-2" src="https://htmlstream.com/preview/space-v1.3/assets/svg/components/moving-up-brown-icon.svg" alt="imgDescription"/>
                    <p>Satisifed with our quality control system? Join our network of over 6000 professionals and student 
                      alike who have used our academic writing service to improve their GPA.
                    </p>
                    <a href="/order"><button className="btn btn-success active" >
                          Order Now
                        <span className="fa fa-angle-right align-middle ml-2"></span>
                        </button>
                    </a>
                    
                  </div>
                  {/* <!-- End Icon Block --> */}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Tab Content --> */}
        </div>
      </div>
    </div>
    {/* <!-- End Features Section --> */}

    {/* <!-- Features Section --> */}
    <div class="bg-gray-100">
      <div class="container space-2 space-3--lg">
        {/* <!-- Title --> */}
        <div class="w-md-80 w-lg-60 text-center mx-md-auto mb-9">
          <span class="u-label u-label--sm u-label--purple mb-3">Trending categories</span>
          <h2 class="h3">Use Study Counter if you need high-quality custom essays and technical assigment solutions </h2>
          <p>Excellent Essay Writing Service for Cheap</p>
        </div>
        {/* <!-- End Title --> */}

        <div class="row">
          <div class="col-lg-5 mb-7 mb-lg-0">
            <div class="card-deck card-sm-gutters-2">
              {/* <!-- Features --> */}
              <a class="card card-frame mb-3" href="/">
                <div class="card-body p-3">
                  <div class="media">
                    <img class="max-width-6 mr-3" src="https://htmlstream.com/preview/space-v1.3/assets/svg/components/plan-brown-icon.svg" alt="Image Description"/>
                    <div class="media-body">
                      <h4 class="h6 text-dark mb-0">Essay writing service</h4>
                      <p class="small mb-0">Any type</p>
                    </div>
                  </div>
                </div>
              </a>
              {/* <!-- End Features --> */}

              {/* <!-- Features --> */}
              <a class="card card-frame mb-3" href="/">
                <div class="card-body p-3">
                  <div class="media">
                    <img class="max-width-6 mr-3" src="https://htmlstream.com/preview/space-v1.3/assets/svg/components/services-primary-icon.svg" alt="Image Description"/>
                    <div class="media-body">
                      <h4 class="h6 text-dark mb-0">Assignment help</h4>
                      <p class="small mb-0">Both technical and writing</p>
                    </div>
                  </div>
                </div>
              </a>
              {/* <!-- End Features --> */}
            </div>

            <div class="card-deck card-sm-gutters-2">
              {/* <!-- Features --> */}
              <a class="card card-frame mb-3" href="/">
                <div class="card-body p-3">
                  <div class="media">
                    <img class="max-width-6 mr-3" src="https://htmlstream.com/preview/space-v1.3/assets/svg/components/careers-blue-icon.svg" alt="Image Description"/>
                    <div class="media-body">
                      <h4 class="h6 text-dark mb-0">Term Paper</h4>
                      <p class="small mb-0">Various topics explored</p>
                    </div>
                  </div>
                </div>
              </a>
              {/* <!-- End Features --> */}

              {/* <!-- Features --> */}
              <a class="card card-frame mb-3" href="">
                <div class="card-body p-3">
                  <div class="media">
                    <img class="max-width-6 mr-3" src="https://htmlstream.com/preview/space-v1.3/assets/svg/components/hire-us-red-icon.svg" alt="Image Description"/>
                    <div class="media-body">
                      <h4 class="h6 text-dark mb-0">Dissertation writing service</h4>
                      <p class="small mb-0"></p>
                    </div>
                  </div>
                </div>
              </a>
              {/* <!-- End Features --> */}
            </div>

            <div class="card-deck card-sm-gutters-2">
              {/* <!-- Features --> */}
              <a class="card card-frame mb-3 mb-sm-0" href="/">
                <div class="card-body p-3">
                  <div class="media">
                    <img class="max-width-6 mr-3" src="https://htmlstream.com/preview/space-v1.3/assets/svg/components/help-cyan-icon.svg" alt="Image Description"/>
                    <div class="media-body">
                      <h4 class="h6 text-dark mb-0">Research paper writing</h4>
                      <p class="small mb-0"></p>
                    </div>
                  </div>
                </div>
              </a>
              {/* <!-- End Features --> */}

              {/* <!-- Features --> */}
              <a class="card card-frame" href="/">
                <div class="card-body p-3">
                  <div class="media">
                    <img class="max-width-6 mr-3" src="https://htmlstream.com/preview/space-v1.3/assets/svg/components/contacts-dark-icon.svg" alt="Image Description"/>
                    <div class="media-body">
                      <h4 class="h6 text-dark mb-0">Business & Finance</h4>
                      <p class="small mb-0"></p>
                    </div>
                  </div>
                </div>
              </a>
              {/* <!-- End Features --> */}
            </div>
          </div>

          <div class="col-lg-7">

          <div class="card-deck card-sm-gutters-2">
              {/* <!-- Features --> */}
              <a class="card card-frame mb-3 mb-sm-0" href="/">
                <div class="card-body p-3">
                  <div class="media">
                    <img class="max-width-6 mr-3" src="https://htmlstream.com/preview/space-v1.3/assets/svg/components/help-cyan-icon.svg" alt="Image Description"/>
                    <div class="media-body">
                      <h4 class="h6 text-dark mb-0">Psychology</h4>
                      <p class="small mb-0"></p>
                    </div>
                  </div>
                </div>
              </a>
              {/* <!-- End Features --> */}

              {/* <!-- Features --> */}
              <a class="card card-frame" href="/">
                <div class="card-body p-3">
                  <div class="media">
                    <img class="max-width-6 mr-3" src="https://htmlstream.com/preview/space-v1.3/assets/svg/components/contacts-dark-icon.svg" alt="Image Description"/>
                    <div class="media-body">
                      <h4 class="h6 text-dark mb-0">Nursing</h4>
                      <p class="small mb-0"></p>
                    </div>
                  </div>
                </div>
              </a>
              {/* <!-- End Features --> */}
            </div>
            <div class="card-deck card-sm-gutters-2">
              {/* <!-- Features --> */}
              <a class="card card-frame mb-3 mb-sm-0" href="/">
                <div class="card-body p-3">
                  <div class="media">
                    <img class="max-width-6 mr-3" src="https://htmlstream.com/preview/space-v1.3/assets/svg/components/help-cyan-icon.svg" alt="Image Description"/>
                    <div class="media-body">
                      <h4 class="h6 text-dark mb-0">History and governance</h4>
                      <p class="small mb-0"></p>
                    </div>
                  </div>
                </div>
              </a>
              {/* <!-- End Features --> */}

              {/* <!-- Features --> */}
              <a class="card card-frame" href="/">
                <div class="card-body p-3">
                  <div class="media">
                    <img class="max-width-6 mr-3" src="https://htmlstream.com/preview/space-v1.3/assets/svg/components/contacts-dark-icon.svg" alt="Image Description"/>
                    <div class="media-body">
                      <h4 class="h6 text-dark mb-0">Coursework</h4>
                      <p class="small mb-0"></p>
                    </div>
                  </div>
                </div>
              </a>
              {/* <!-- End Features --> */}
            </div>
            <div class="card-deck card-sm-gutters-2">
              {/* <!-- Features --> */}
              <a class="card card-frame mb-3 mb-sm-0" href="/">
                <div class="card-body p-3">
                  <div class="media">
                    <img class="max-width-6 mr-3" src="https://htmlstream.com/preview/space-v1.3/assets/svg/components/help-cyan-icon.svg" alt="Image Description"/>
                    <div class="media-body">
                      <h4 class="h6 text-dark mb-0">Business plan</h4>
                      <p class="small mb-0"></p>
                    </div>
                  </div>
                </div>
              </a>
              {/* <!-- End Features --> */}

              {/* <!-- Features --> */}
              <a class="card card-frame" href="/">
                <div class="card-body p-3">
                  <div class="media">
                    <img class="max-width-6 mr-3" src="https://htmlstream.com/preview/space-v1.3/assets/svg/components/contacts-dark-icon.svg" alt="Image Description"/>
                    <div class="media-body">
                      <h4 class="h6 text-dark mb-0">Annotated Bibliography</h4>
                      <p class="small mb-0"></p>
                    </div>
                  </div>
                </div>
              </a>
              {/* <!-- End Features --> */}
            </div>
            <div class="card-deck card-sm-gutters-2">
              {/* <!-- Features --> */}
              <a class="card card-frame mb-3 mb-sm-0" href="/">
                <div class="card-body p-3">
                  <div class="media">
                    <img class="max-width-6 mr-3" src="https://htmlstream.com/preview/space-v1.3/assets/svg/components/help-cyan-icon.svg" alt="Image Description"/>
                    <div class="media-body">
                      <h4 class="h6 text-dark mb-0">Engineering</h4>
                      <p class="small mb-0"></p>
                    </div>
                  </div>
                </div>
              </a>
              {/* <!-- End Features --> */}

              {/* <!-- Features --> */}
              <a class="card card-frame" href="/">
                <div class="card-body p-3">
                  <div class="media">
                    <img class="max-width-6 mr-3" src="https://htmlstream.com/preview/space-v1.3/assets/svg/components/contacts-dark-icon.svg" alt="Image Description"/>
                    <div class="media-body">
                      <h4 class="h6 text-dark mb-0">Environmental Science</h4>
                      <p class="small mb-0"></p>
                    </div>
                  </div>
                </div>
              </a>
              {/* <!-- End Features --> */}
            </div>

            {/* <!-- End Video Block --> */}
          </div>
        </div>
      </div>
    </div>
    {/* <!-- End Features Section --> */}

    {/* <!-- News Section --> */}
    <div class="bg-gray-100">
      <div class="container space-2 space-3--lg">
        {/* <!-- Title --> */}
        <div class="w-md-80 w-lg-60 text-center mx-md-auto mb-9">
          <span class="u-label u-label--sm u-label--purple mb-3">Articles</span>
          <h2 class="h3">Read our paper samples &amp; writing guides</h2>
          <p>Find out why we are trusted by thousands of students.</p>
        </div>
        {/* <!-- End Title --> */}

        <div class="card-deck d-block d-lg-flex">
          <article class="card border-0 mb-5">
            <div class="card-body row align-items-stretch no-gutters p-0">
              {/* <!-- News Blog Card --> */}
              <div class="col-7 border border-right-0 rounded-left">
                <div class="p-5">
                  <h2 class="h5 mb-3">
                    <a href="/">Academic writing solutions </a>
                  </h2>
                  <p class="mb-0"> Try our Various academic writing solutions including editing, proofreading and writing from scratch</p>
                </div>
              </div>
              <div class="col-5 card-img-right border border-left-0 bg-img-hero" data-bg-img-src="../../assets/img/500x550/img1.jpg"></div>
            </div>
            {/* <!-- End News Blog Card --> */}
          </article>

          <article class="card border-0 mb-5">
            <div class="card-body row align-items-stretch no-gutters p-0">
              {/* <!-- News Blog Card --> */}
              <div class="col-7 border border-right-0 rounded-left">
                <div class="p-5">
                  <h2 class="h5 mb-3">
                    <a href="/">Guides</a>
                  </h2>
                  <p class="mb-0">A great source for self-education with useful and up-to-date digest of writing guides and students’ tips</p>
                </div>
              </div>
              <div class="col-5 card-img-right border border-left-0 bg-img-hero" data-bg-img-src="../../assets/img/500x550/img2.jpg"></div>
            </div>
            {/* <!-- End News Blog Card --> */}
          </article>
        </div>

        <div class="card-deck d-block d-lg-flex">
          <article class="card border-0 mb-5">
            <div class="card-body row align-items-stretch no-gutters p-0">
              {/* <!-- News Blog Card --> */}
              <div class="col-7 border border-right-0 rounded-left">
                <div class="p-5">
                  <h2 class="h5 mb-3">
                    <a href="/">Save your time, money, and efforts</a>
                  </h2>
                  <p class="mb-0">By delegating your struggles to specialists, you bring your life balance back</p>
                </div>
              </div>
              <div class="col-5 card-img-right border border-left-0 bg-img-hero" data-bg-img-src="../../assets/img/500x550/img3.jpg"></div>
            </div>
            {/* <!-- End News Blog Card --> */}
          </article>

          <article class="card border-0 mb-5">
            <div class="card-body row align-items-stretch no-gutters p-0">
              {/* <!-- News Blog Card --> */}
              <div class="col-7 border border-right-0 rounded-left">
                <div class="p-5">
                  <h2 class="h5 mb-3">
                    <a href="/">Improve paper format, style and grammar</a>
                  </h2>
                  <p class="mb-0">Our experts will ensure that everything you wrote is mistake-free and crystal clear</p>
                </div>
              </div>
              <div class="col-5 card-img-right border border-left-0 bg-img-hero" data-bg-img-src="../../assets/img/500x550/img4.jpg"></div>
            </div>
            {/* <!-- End News Blog Card --> */}
          </article>
        </div>
      </div>
    </div>
    {/* <!-- End News Section --> */}

    {/* <!-- Divider --> */}
    <div className="w-50 w-lg-35 mx-auto">
      <hr className="my-0"/>
    </div>
    {/* <!-- End Divider --> */}

    {/* <!-- Testimonials Section --> */}
    <div className="container space-2 space-3--lg">    
      <div className="row justify-content-lg-center">        
        <div className="col-md-6 col-lg-5 mb-7 mb-md-0">          
          {/* <!-- Testimonials --> */}
          <div className="text-center px-lg-4">
            <div className="mb-2">
              <img className="u-avatar rounded-circle mx-auto mb-2" src={img1} alt="imgDescription"/>
              <h4 className="h6">Ayesha A.</h4>
            </div>
            <blockquote className="text-secondary mb-0">"I had a very short deadline to submit my economics online class quiz.
               I was scared that I will miss the deadline but I came accross Study Counter as I was searching 
               for quick answers online and they saved my class. Thank you for the service."</blockquote>
          </div>
          {/* <!-- End Testimonials --> */}
        </div>

        <div className="col-md-6 col-lg-5">
          {/* <!-- Testimonials --> */}
          <div className="text-center px-lg-4">
            <div className="mb-2">
              <img className="u-avatar rounded-circle mx-auto mb-2" src={img15} alt="imgDescription"/>
              <h4 className="h6">Markus B.</h4>
            </div>
            <blockquote className="text-secondary mb-0">"Great paper, excellent work skills and outstanding support. I will use your service again."</blockquote>
          </div>
          {/* <!-- End Testimonials --> */}
        </div>
      </div>
    </div>
    {/* <!-- End Testimonials Section ---> */}

    {/* <!-- CTA ----> */}
    <div className="gradient-overlay-half-primary-v1">
      <div className="bg-img-hero" style={{backgroundImage: `url(${Bg2})`}}>
        <div className="container">
          <div className="row align-items-lg-center text-center text-lg-left space-2">
            <div className="col-lg-7">
              <h2 className="text-white"> Get started with Study Counter</h2>
              <p className="lead text-white mb-0">Entrust your assignment to Study Counter team and access a sure bridge to your graduation.</p>
            </div>

            <div className="col-lg-5 text-lg-right">
              <a className="btn btn-purple mb-2 mb-sm-0 mr-sm-2" href="/order">Place an order</a>
              <a className="btn btn-light mb-2 mb-sm-0" href="/">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- End CTA --> */}
  </main>
 
  <Footer />

  </body>

      );
    }

}

const mapStateToProps = (state)=>{
  console.log(state);
  return {
    assignments:state.assignments.assignments,
    auth:state.firebase.auth
  }

}
const mapDispatchToProps =(dispatch)=>{
  return {
    createAssignment: (assignment)=>dispatch(createAssignment(assignment))
  }

}

export default compose(
  connect(mapStateToProps, mapDispatchToProps ),
  firestoreConnect([
    { collection :'assignments' }
  ])
)(Home);