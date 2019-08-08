import React from 'react';
import {NavLink} from 'react-router-dom';
import LoginModal from "react-login-modal-sm";
import {connect} from 'react-redux';
import {signUp} from '../store/actions/authActions';
import {signInGoogle} from '../store/actions/authActions';
import {auth} from '../config/fbConfig';
import {signInEmail} from '../store/actions/authActions';

class Signedoutlinks extends React.Component{

  constructor(){
    super();
    this.state={
          username:'',
          email:'',
          password:'',
          showModal: false,
          user:null
          
        }
  } 
  componentDidMount() {
    auth.onAuthStateChanged((user)=>{
      if (user){
        this.setState({user});
      }
    })};

    //<-----------LOGIN MODAL METHODS------->
  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });   
    
  };
  handleLoginWithFacebook = () => {
    // Do something when 'Login with Facebook' is clicked
    console.log("Login with Facebook...");
  };
  handleSignupByEmail = (props) => {
    // Do something when 'Signup by email' is clicked
    this.props.signUp(this.state)
    //console.log("Sign up by email...");
  };
  handleLoginWithGoogle=(props)=>{
    this.props.signInGoogle();    
  }
  handleLoginEmail = (props) =>{
    this.props.signInEmail(this.state);
    console.log('signin with email...')
  }

  //<-----------LOGIN MODAL METHODS END----->    
    
    render(){
      
        {/*---LOGIN MODAL VALIDATION */}

      const customUsernameRegex = /^[a-zA-Z0-9_]{5,}/;
      const emailRegex= /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/;
        

      {/**---LOGIN MODAL VALIDATION END---- */}

        return(
             
              <div id="navBar" className="collapse navbar-collapse u-header__navbar-collapse py-0">
                <ul className="navbar-nav u-header__navbar-nav">
                  {/* <!-- Home --> */}
                  <li className="nav-item hs-has-sub-menu u-header__nav-item"
                      data-event="hover"
                      data-animation-in="fadeInUp"
                      data-animation-out="fadeOut">
                    <NavLink to ="/" id="homeMegaMenu" className="nav-link u-header__nav-link" 
                       aria-haspopup="true"
                       aria-expanded="false"
                       aria-labelledby="homeSubMenu">
                      Home
                      {/* <span className="fa fa-angle-down u-header__nav-link-icon"></span> */}
                    </NavLink>
                  </li>
                  {/* <!-- End Home --> */}
    
                  {/* <!-- samples --> */}
                  <li className="nav-item hs-has-mega-menu u-header__nav-item"
                      data-event="hover"
                      data-animation-in="fadeInUp"
                      data-animation-out="fadeOut"
                      data-position="right">
                    <NavLink to ="/samples" id="PagesMegaMenu" className="nav-link u-header__nav-link" 
                       aria-haspopup="true"
                       aria-expanded="false">
                       Samples
                      {/* <span className="fa fa-angle-down u-header__nav-link-icon"></span> */}
                    </NavLink>              
                  </li>
                  {/* <!-- End samples --> */}
    
                  {/* <!-- services --> */}
                  <li className="nav-item hs-has-sub-menu u-header__nav-item"
                      data-event="hover"
                      data-animation-in="fadeInUp"
                      data-animation-out="fadeOut">
                    <NavLink to ="/services" id="worksMegaMenu" className="nav-link u-header__nav-link"
                       aria-haspopup="true"
                       aria-expanded="false"
                       aria-labelledby="worksSubMenu">
                      Services
                      {/* <span className="fa fa-angle-down u-header__nav-link-icon"></span> */}
                    </NavLink>            
                  </li>
                  {/* <!-- End services --> */}
    
                  {/* <!-- Blog --> */}
                  <li className="nav-item hs-has-sub-menu u-header__nav-item"
                        data-event="hover"
                        data-animation-in="fadeInUp"
                        data-animation-out="fadeOut">
                      <NavLink to="/blog" id="blogMegaMenu" className="nav-link u-header__nav-link" 
                        aria-haspopup="true"
                        aria-expanded="false"
                        aria-labelledby="blogSubMenu">
                        Blog
                        {/* <span className="fa fa-angle-down u-header__nav-link-icon"></span> */}
                      </NavLink>                
                  </li>
                  {/* <!-- End Blog --> */}
    
                  {/* <!-- Help --> */}
                  <li className="nav-item hs-has-sub-menu u-header__nav-item"
                      data-event="hover"
                      data-animation-in="fadeInUp"
                      data-animation-out="fadeOut">
                    <NavLink to ="/help" id="shopMegaMenu" className="nav-link u-header__nav-link"
                       aria-haspopup="true"
                       aria-expanded="false"
                       aria-labelledby="shopSubMenu">
                      Help
                      {/* <span className="fa fa-angle-down u-header__nav-link-icon"></span> */}
                    </NavLink>                
                  </li>
                  {/* <!-- End Help --> */}
    
                  {/* <!-- Order --> */}
                  <li className="nav-item hs-has-sub-menu u-header__nav-item"
                        data-event="hover"
                        data-animation-in="fadeInUp"
                        data-animation-out="fadeOut">
                        <NavLink to ="/order" id="docsMegaMenu" className="nav-link u-header__nav-link"
                        aria-haspopup="true"
                        aria-expanded="false"
                        aria-labelledby="docsSubMenu">
                        Order
                        {/* <span className="fa fa-angle-down u-header__nav-link-icon"></span> */}
                        </NavLink>
                    
                  </li>
                  {/* <!-- End Order --> */}
    
                  {/* <!-- Button --> */}
                  <li className="nav-item u-header__nav-item-btn" onClick={this.toggleModal}>
                    <NavLink to ="#signupModal" className="btn btn-sm btn-primary" role="button"
                       data-modal-target="#signupModal"
                       data-overlay-color="#151b26">
                      <span className="fa fa-user-circle mr-1"></span>
                      Signin
                    </NavLink>
                  </li>
                  {/* <!-- End Button -->
    
                  {/* <!-- Search --> */}
                  <li className="nav-item u-header__navbar-icon u-header__navbar-v-divider">
                    <NavLink to ="/" className="btn btn-xs btn-icon btn-text-dark u-header__search-toggle" role="button"
                       aria-haspopup="true"
                       aria-expanded="false"
                       aria-controls="search"
                       data-unfold-target="#search"
                       data-unfold-hide-on-scroll="false"
                       data-unfold-type="css-animation"
                       data-unfold-duration="300"
                       data-unfold-delay="300"
                       data-unfold-animation-in="slideInUp">
                      <span className="fa fa-search btn-icon__inner"></span>
                    </NavLink>
    
                    {/* <!-- Input --> */}
                    <form id="search" className="js-focus-state input-group form u-header__search u-unfold--css-animation u-unfold--hidden">
                      <input className="form-control form__input" type="search" placeholder="Search Space"/>
                      <div className="input-group-addon u-header__search-addon p-0">
                        <button className="btn btn-primary u-header__search-addon-btn" type="button">
                          <span className="fa fa-search"></span>
                        </button>
                      </div>
                    </form>
                    {/* <!-- End Input --> */}
                  </li>
                  {/* <!-- End Search --> */}
                </ul>

                {/**-------- LOGIN MODAL START ---- */}

        <LoginModal
            showModal={this.state.showModal}
            toggleModal={this.toggleModal}
            onLoginFacebook={this.handleLoginWithFacebook}
            onLoginGoogle={this.handleLoginWithGoogle}
            onSignupEmail={this.handleSignupByEmail}
            onLoginEmail={this.handleLoginEmail}
            usernameRegex={customUsernameRegex}
            emailRegex= {emailRegex}
            />
  {/*------- LOGIN MODAL END------ */}

        </div>
              
      );
    };
}

const mapStateToProps = (state) =>{
  return{
    authError:state.auth.authError,
    auth:state.firebase.auth
  }

}
const mapDispatchToProps = (dispatch) =>{
    return{
      signInGoogle: () => dispatch(signInGoogle()),
      signUp: (newUser) => dispatch(signUp(newUser)),
      signInEmail: (creds) => dispatch(signInEmail(creds))
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Signedoutlinks);