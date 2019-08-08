import React from 'react';
//import {Link} from 'react-router-dom';

import '../../styles/frontstyles/assets/css/signin.css';
import '../../styles/frontstyles/assets/vendor/font-awesome/css/all.min.css';
import '../../styles/frontstyles/assets/vendor/hs-megamenu/src/hs.megamenu.css'
import '../../styles/frontstyles/assets/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';
import '../../styles/frontstyles/assets/vendor/custombox/dist/custombox.min.css';
import '../../styles/frontstyles/assets/vendor/animate.css/animate.min.css';
import '../../styles/frontstyles/assets/vendor/slick-carousel/slick/slick.css';
import '../../styles/frontstyles/assets/vendor/fancybox/jquery.fancybox.css';
import '../../styles/frontstyles/assets/css/theme.css';

// import '../../styles/frontstyles/assets/vendor/font-awesome/css/all.min.css';
// import '../../styles/frontstyles/assets/vendor/animate.css/animate.min.css';

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

class ForgotPassword extends React.Component{

    render(){
        return(

<body>

{/* <!-- ========== MAIN CONTENT ========== --> */}
<form class="js-validate form-signin p-5">
  {/* <!-- Logo --> */}
  <div class="text-center">
    <a href="/" aria-label="Space">
      <img class="mb-3" src="https://htmlstream.com/preview/space-v1.3/assets/svg/logos/logo-short.svg" alt="Logo" width="60" height="60"/>
    </a>
  </div>
  {/* <!-- End Logo --> */}

  {/* -- Title --> */}
  <div class="text-center mb-4">
    <h1 class="h3 mb-0">Recover account</h1>
    <p>Enter your email address and an email with instructions will be sent to you.</p>
  </div>
  {/* <!-- End Title --> */}

  {/* <!-- Input --> */}
  <div class="js-form-message mb-3">
    <div class="js-focus-state input-group form">
      <div class="input-group-prepend form__prepend">
        <span class="input-group-text form__text">
          <span class="fa fa-user form__text-inner"></span>
        </span>
      </div>
      <input type="email" class="form-control form__input" name="email" required
             placeholder="Email"
             aria-label="Email"
             data-msg="Please enter a valid email address."
             data-error-class="u-has-error"
             data-success-class="u-has-success"/>
    </div>
  </div>
  {/* <!-- End Input --> */}

  <div class="mb-3">
    <button type="submit" class="btn btn-block btn-primary">Recover Account</button>
  </div>

  <div class="text-center mb-3">
    <p class="text-muted">Have an account? <a href="/signin">Signin</a></p>
  </div>

  <p class="small text-center text-muted mb-0">All rights reserved. &copy; Study Counter, 2016 -  2019.</p>
</form>
{/* <!-- ========== END MAIN CONTENT ========== --> */}

</body>


    );
}
}

export default ForgotPassword;