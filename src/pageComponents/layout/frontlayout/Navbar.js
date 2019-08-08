import React from 'react';
import {Link} from 'react-router-dom';
import Signedoutlinks from './Signedoutlinks';
import Signedinlinks from './Signedinlinks'
import {connect} from 'react-redux'; 
//<----IMAGES  ----->
import logo4 from '../../styles/frontstyles/assets/img/109x30/studycounter6.png';



const Navbar= (props)=>{
  const {auth} = props;
   const navLinks = auth.uid ? <Signedinlinks /> : <Signedoutlinks />  

    return (
       <nav className="js-mega-menu navbar navbar-expand-lg u-header__navbar">
          {/* <!-- Logo --> */}
          <div className="u-header__navbar-brand-wrapper">
            <Link to="/" className="navbar-brand u-header__navbar-brand"  aria-label="Space">
              <img className="u-header__navbar-brand-default" src={logo4} style={{height:"40px", width:"218px"}} alt="Logo"/>
            </Link>
          </div>
          {/* <!-- End Logo --> */}  

          {navLinks}         
      
        </nav>
    )
  
}

const mapStateToProps = (state) =>{
  console.log(state)
  return{
    auth: state.firebase.auth

  }
}

export default connect(mapStateToProps) (Navbar);

