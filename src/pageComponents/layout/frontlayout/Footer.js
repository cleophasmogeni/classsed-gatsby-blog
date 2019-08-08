import React from 'react';

const Footer = () =>{
    return(
    <footer className="bg-dark">
        <div className="container space-2">
            <div className="row justify-content-md-between">
                <div className="col-6 col-md-3 col-lg-2 order-lg-3 mb-7 mb-lg-0">
                <h3 className="h6 text-white mb-3">Services</h3>

          {/* <!-- List Group --> */}
          <div className="list-group list-group-flush list-group-transparent">
            <a className="list-group-item list-group-item-action" href="/">Academic Writing Service</a>
            <a className="list-group-item list-group-item-action" href="/">Assignment Help</a>
            <a className="list-group-item list-group-item-action" href="/">Buy Capstone Project</a>
            <a className="list-group-item list-group-item-action" href="/">Case Study Help</a>
            <a className="list-group-item list-group-item-action" href="/">College Paper Writing Service</a>
            <a className="list-group-item list-group-item-action" href="/">Coursework help</a>
            <a className="list-group-item list-group-item-action" href="/">Dissertation Writing Services</a>
            <a className="list-group-item list-group-item-action" href="/">Dissertation Writing Help</a>
           
          </div>
          {/* <!-- End List Group --> */}
        </div>

        <div className="col-6 col-md-3 col-lg-2 order-lg-4 mb-7 mb-lg-0">
          <h3 className="h6 text-white mb-3">Get Instant help</h3>

          {/* <!-- List Group --> */}
          <div className="list-group list-group-flush list-group-transparent">
            <a className="list-group-item list-group-item-action" href="/">Do My Assignment</a>
            <a className="list-group-item list-group-item-action" href="/">Essays For Sale</a>
            <a className="list-group-item list-group-item-action" href="/">Plagiarism Checker</a>
            <a className="list-group-item list-group-item-action" href="/">Write My Thesis</a>
            <a className="list-group-item list-group-item-action" href="/">Research Paper Writing Help</a>
            <a className="list-group-item list-group-item-action" href="/">Lab Report Writing Service</a>
            <a className="list-group-item list-group-item-action" href="/">Scholarship Essay Writing Service</a>          
          </div>
          {/* <!-- End List Group --> */}
        </div>

        <div className="col-6 col-md-3 col-lg-2 order-lg-5 mb-7 mb-lg-0">
          <h3 className="h6 text-white mb-3">Boost your GPA</h3>

          {/* <!-- List Group --> */}
          <div className="list-group list-group-flush list-group-transparent">
            <a className="list-group-item list-group-item-action" href="/">Term Paper Writing Service</a>
            <a className="list-group-item list-group-item-action" href="/">Fast Essay Writing Service</a>
            <a className="list-group-item list-group-item-action" href="/">Order Essay</a>
            <a className="list-group-item list-group-item-action" href="/">Buy Essay Online</a>
            <a className="list-group-item list-group-item-action" href="/">Buy Research Proposal</a>
            <a className="list-group-item list-group-item-action" href="/">Buy Literature Essay</a>
          </div>
          {/* <!-- End List Group --> */}
        </div>

        <div className="col-6 col-md-3 col-lg-2 order-lg-6 mb-7 mb-lg-0">
          <h3 className="h6 text-white mb-3">Social</h3>

          {/* <!-- List --> */}
          <div className="list-group list-group-flush list-group-transparent">
            <a className="list-group-item list-group-item-action" href="https://www.facebook.com/myStudycounter/">
              <span className="fab fa-facebook-f min-width-3 text-center mr-2"></span>
              Facebook
            </a>
            <a className="list-group-item list-group-item-action" href="https://twitter.com/mystudycounter">
              <span className="fab fa-twitter min-width-3 text-center mr-2"></span>
              Twitter
            </a>
            <a className="list-group-item list-group-item-action" href="https://www.instagram.com/mystudycounter/">
              <span className="fab fa-instagram min-width-3 text-center mr-2"></span>
              Instagram
            </a>            
          </div>
          {/* <!-- End List --> */}
        </div>

        
      </div>
    </div>
  </footer>
    )

}

export default Footer;