import React from 'react';

//<-----NAVBAR------>
import Navbar from '../../layout/frontlayout/Navbar';
import Footer from '../../layout/frontlayout/Footer';

//<------- STYLES ------>
import '../../styles/frontstyles/assets/vendor/font-awesome/css/all.min.css';
import '../../styles/frontstyles/assets/vendor/hs-megamenu/src/hs.megamenu.css'
import '../../styles/frontstyles/assets/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';
import '../../styles/frontstyles/assets/vendor/custombox/dist/custombox.min.css';
import '../../styles/frontstyles/assets/vendor/animate.css/animate.min.css';
import '../../styles/frontstyles/assets/vendor/slick-carousel/slick/slick.css';
import '../../styles/frontstyles/assets/vendor/fancybox/jquery.fancybox.css';
import '../../styles/frontstyles/assets/css/theme.css';
import '../../styles/frontstyles/assets/vendor/cubeportfolio/css/cubeportfolio.min.css';

class Samples extends React.Component{

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
    {/* -- Hero Section --> */}
    <div class="gradient-half-primary-v1">
      <div class="bg-img-hero" style={{"background-image": "url(../../assets/img/bg/bg2.png)"}}>
        <div class="container space-2 space-4-top--lg space-3-bottom--lg">
          <div class="w-md-80 w-lg-60 text-center mx-auto">
            {/* - Title --> */}
            <div class="mb-5">
              <h1 class="display-4 font-size-48--md-down text-white">Sample papers</h1>
              <p class="lead text-white">Browse below for sample papers in different categories written by our expert writters</p>
            </div>
            {/* -- End Title --> */}

            {/* <!-- Buttons --> */}
            <a class="btn btn-light btn-wide mb-2 mb-md-0 mr-sm-2" href="/order">Hire writer</a>
            <a class="btn btn-dark btn-wide mb-2 mb-md-0" href="/">Contact Us</a>
            {/* <!-- End Buttons --> */}
          </div>
        </div>
      </div>
    </div>
    {/* -- End Hero Section --> */}

    {/* -- Cubeportfolio --> */}
    <div class="container u-cubeportfolio space-2 space-3--lg">
      {/* -- Filter --> */}
      <ul id="filterControls" class="list-inline cbp-l-filters-alignCenter mb-5">
        <li class="list-inline-item cbp-filter-item cbp-filter-item-active u-cubeportfolio__item" data-filter="*">All</li>
        <li class="list-inline-item cbp-filter-item u-cubeportfolio__item" data-filter=".branding">Essays</li>
        <li class="list-inline-item cbp-filter-item u-cubeportfolio__item" data-filter=".abstract">Term Paper</li>
        <li class="list-inline-item cbp-filter-item u-cubeportfolio__item" data-filter=".graphic">Case studies</li>
        <li class="list-inline-item cbp-filter-item u-cubeportfolio__item" data-filter=".illustration">Research paper</li>
      </ul>
      {/* <!-- End Filter --> */}

      {/* -- Content --> */}
      <div class="cbp mb-9"
            data-controls="#filterControls"
            data-animation="quicksand"
            data-caption-animation="zoom"
            data-x-gap="30"
            data-y-gap="30"
            data-media-queries='[
              {"width": 1500, "cols": 3},
              {"width": 1100, "cols": 3},
              {"width": 800, "cols": 3},
              {"width": 580, "cols": 2},
              {"width": 300, "cols": 1}
            ]'>
        {/* -- Item --> */}
        <div class="cbp-item graphic">
          <div class="cbp-caption">
            <div class="cbp-caption-defaultWrap">
              <img src="../../assets/img/500x330/img1.jpg" alt="Image Description"/>
            </div>
            <div class="cbp-caption-activeWrap">
              <div class="cbp-l-caption-alignCenter d-flex align-items-end">
                <ul class="list-inline ml-auto p-3 mb-0">
                  <li class="list-inline-item">
                    <a class="u-icon u-icon--primary rounded-circle" href="single-page-simple.html">
                      <span class="fa fa-link u-icon__inner"></span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="cbp-lightbox u-icon u-icon--primary rounded-circle" href="../../assets/img/1920x1080/img7.jpg">
                      <span class="fa fa-images u-icon__inner"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="p-4">
            <h2 class="h5 mb-0">Remind me more</h2>
            <p class="small mb-0">by Tiberiu Neamu</p>
          </div>
        </div>
        {/* <!-- End Item --> */}

        {/* <!-- Item --> */}
        <div class="cbp-item branding">
          <div class="cbp-caption">
            <div class="cbp-caption-defaultWrap">
              <img src="../../assets/img/500x330/img2.jpg" alt="Image Description"/>
            </div>
            <div class="cbp-caption-activeWrap">
              <div class="cbp-l-caption-alignCenter d-flex align-items-end">
                <ul class="list-inline ml-auto p-3 mb-0">
                  <li class="list-inline-item">
                    <a class="u-icon u-icon--primary rounded-circle" href="single-page-simple.html">
                      <span class="fa fa-link u-icon__inner"></span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="cbp-lightbox u-icon u-icon--primary rounded-circle" href="../../assets/img/1920x1080/img8.jpg">
                      <span class="fa fa-images u-icon__inner"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="p-4">
            <h3 class="h5 mb-0">Workout buddy</h3>
            <p class="small mb-0">by Tiberiu Neamu</p>
          </div>
        </div>
        {/* <!-- End Item --> */}

        {/* -- Item --> */}
        <div class="cbp-item abstract">
          <div class="cbp-caption">
            <div class="cbp-caption-defaultWrap">
              <img src="../../assets/img/500x330/img3.jpg" alt="Image Description"/>
            </div>
            <div class="cbp-caption-activeWrap">
              <div class="cbp-l-caption-alignCenter d-flex align-items-end">
                <ul class="list-inline ml-auto p-3 mb-0">
                  <li class="list-inline-item">
                    <a class="u-icon u-icon--primary rounded-circle" href="single-page-simple.html">
                      <span class="fa fa-link u-icon__inner"></span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="cbp-lightbox u-icon u-icon--primary rounded-circle" href="../../assets/img/1920x1080/img9.jpg">
                      <span class="fa fa-images u-icon__inner"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="p-4">
            <h4 class="h5 mb-0">Easy note</h4>
            <p class="small mb-0">by Cosmin Capitanu</p>
          </div>
        </div>
        {/* <!-- End Item --> */}

        {/* <!-- Item --> */}
        <div class="cbp-item graphic illustration">
          <div class="cbp-caption">
            <div class="cbp-caption-defaultWrap">
              <img src="../../assets/img/500x330/img4.jpg" alt="Image Description"/>
            </div>
            <div class="cbp-caption-activeWrap">
              <div class="cbp-l-caption-alignCenter d-flex align-items-end">
                <ul class="list-inline ml-auto p-3 mb-0">
                  <li class="list-inline-item">
                    <a class="u-icon u-icon--primary rounded-circle" href="single-page-simple.html">
                      <span class="fa fa-link u-icon__inner"></span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="cbp-lightbox u-icon u-icon--primary rounded-circle" href="../../assets/img/1920x1080/img10.jpg">
                      <span class="fa fa-images u-icon__inner"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="p-4">
            <h4 class="h5 mb-0">Designing</h4>
            <p class="small mb-0">by Cosmin Capitanu</p>
          </div>
        </div>
        {/*  End Item --> */}

        {/* <!-- Item --> */}
        <div class="cbp-item graphic illustration">
          <div class="cbp-caption">
            <div class="cbp-caption-defaultWrap">
              <img src="../../assets/img/500x330/img5.jpg" alt="Image Description"/>
            </div>
            <div class="cbp-caption-activeWrap">
              <div class="cbp-l-caption-alignCenter d-flex align-items-end">
                <ul class="list-inline ml-auto p-3 mb-0">
                  <li class="list-inline-item">
                    <a class="u-icon u-icon--primary rounded-circle" href="single-page-simple.html">
                      <span class="fa fa-link u-icon__inner"></span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="cbp-lightbox u-icon u-icon--primary rounded-circle" href="../../assets/img/1920x1080/img11.jpg">
                      <span class="fa fa-images u-icon__inner"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="p-4">
            <h4 class="h5 mb-0">Creative work</h4>
            <p class="small mb-0">by Cosmin Capitanu</p>
          </div>
        </div>
        {/* -- End Item --> */}

        {/* -- Item --> */}
        <div class="cbp-item graphic illustration">
          <div class="cbp-caption">
            <div class="cbp-caption-defaultWrap">
              <img src="../../assets/img/500x330/img6.jpg" alt="Image Description"/>
            </div>
            <div class="cbp-caption-activeWrap">
              <div class="cbp-l-caption-alignCenter d-flex align-items-end">
                <ul class="list-inline ml-auto p-3 mb-0">
                  <li class="list-inline-item">
                    <a class="u-icon u-icon--primary rounded-circle" href="single-page-simple.html">
                      <span class="fa fa-link u-icon__inner"></span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="cbp-lightbox u-icon u-icon--primary rounded-circle" href="../../assets/img/1920x1080/img12.jpg">
                      <span class="fa fa-images u-icon__inner"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="p-4">
            <h4 class="h5 mb-0">Development process</h4>
            <p class="small mb-0">by Cosmin Capitanu</p>
          </div>
        </div>
        {/*  End Item --> */}

        {/* <-- Item --> */}
        <div class="cbp-item graphic">
          <div class="cbp-caption">
            <div class="cbp-caption-defaultWrap">
              <img src="../../assets/img/500x330/img9.jpg" alt="Image Description"/>
            </div>
            <div class="cbp-caption-activeWrap">
              <div class="cbp-l-caption-alignCenter d-flex align-items-end">
                <ul class="list-inline ml-auto p-3 mb-0">
                  <li class="list-inline-item">
                    <a class="u-icon u-icon--primary rounded-circle" href="single-page-simple.html">
                      <span class="fa fa-link u-icon__inner"></span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="cbp-lightbox u-icon u-icon--primary rounded-circle" href="../../assets/img/1920x1080/img20.jpg">
                      <span class="fa fa-images u-icon__inner"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="p-4">
            <h4 class="h5 mb-0">Remind me more</h4>
            <p class="small mb-0">by Tiberiu Neamu</p>
          </div>
        </div>
        {/* -- End Item --> */}

        {/* <!-- Item --> */}
        <div class="cbp-item branding">
          <div class="cbp-caption">
            <div class="cbp-caption-defaultWrap">
              <img src="../../assets/img/500x330/img10.jpg" alt="Image Description"/>
            </div>
            <div class="cbp-caption-activeWrap">
              <div class="cbp-l-caption-alignCenter d-flex align-items-end">
                <ul class="list-inline ml-auto p-3 mb-0">
                  <li class="list-inline-item">
                    <a class="u-icon u-icon--primary rounded-circle" href="single-page-simple.html">
                      <span class="fa fa-link u-icon__inner"></span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="cbp-lightbox u-icon u-icon--primary rounded-circle" href="../../assets/img/1920x1080/img21.jpg">
                      <span class="fa fa-images u-icon__inner"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="p-4">
            <h4 class="h5 mb-0">Workout buddy</h4>
            <p class="small mb-0">by Tiberiu Neamu</p>
          </div>
        </div>
        {/* <!-- End Item --> */}

        {/* <!-- Item --> */}
        <div class="cbp-item abstract">
          <div class="cbp-caption">
            <div class="cbp-caption-defaultWrap">
              <img src="../../assets/img/500x330/img11.jpg" alt="Image Description"/>
            </div>
            <div class="cbp-caption-activeWrap">
              <div class="cbp-l-caption-alignCenter d-flex align-items-end">
                <ul class="list-inline ml-auto p-3 mb-0">
                  <li class="list-inline-item">
                    <a class="u-icon u-icon--primary rounded-circle" href="single-page-simple.html">
                      <span class="fa fa-link u-icon__inner"></span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="cbp-lightbox u-icon u-icon--primary rounded-circle" href="../../assets/img/1920x1080/img22.jpg">
                      <span class="fa fa-images u-icon__inner"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="p-4">
            <h4 class="h5 mb-0">Easy note</h4>
            <p class="small mb-0">by Cosmin Capitanu</p>
          </div>
        </div>
         {/* End Item --> */}

        {/* <!-- Item --> */}
        <div class="cbp-item graphic illustration">
          <div class="cbp-caption">
            <div class="cbp-caption-defaultWrap">
              <img src="../../assets/img/500x330/img12.jpg" alt="Image Description"/>
            </div>
            <div class="cbp-caption-activeWrap">
              <div class="cbp-l-caption-alignCenter d-flex align-items-end">
                <ul class="list-inline ml-auto p-3 mb-0">
                  <li class="list-inline-item">
                    <a class="u-icon u-icon--primary rounded-circle" href="single-page-simple.html">
                      <span class="fa fa-link u-icon__inner"></span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="cbp-lightbox u-icon u-icon--primary rounded-circle" href="../../assets/img/1920x1080/img23.jpg">
                      <span class="fa fa-images u-icon__inner"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="p-4">
            <h4 class="h5 mb-0">Designing</h4>
            <p class="small mb-0">by Cosmin Capitanu</p>
          </div>
        </div>
        {/* - End Item --> */}

        {/* -- Item --> */}
        <div class="cbp-item graphic illustration">
          <div class="cbp-caption">
            <div class="cbp-caption-defaultWrap">
              <img src="../../assets/img/500x330/img13.jpg" alt="Image Description"/>
            </div>
            <div class="cbp-caption-activeWrap">
              <div class="cbp-l-caption-alignCenter d-flex align-items-end">
                <ul class="list-inline ml-auto p-3 mb-0">
                  <li class="list-inline-item">
                    <a class="u-icon u-icon--primary rounded-circle" href="single-page-simple.html">
                      <span class="fa fa-link u-icon__inner"></span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="cbp-lightbox u-icon u-icon--primary rounded-circle" href="../../assets/img/1920x1080/img24.jpg">
                      <span class="fa fa-images u-icon__inner"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="p-4">
            <h4 class="h5 mb-0">Creative work</h4>
            <p class="small mb-0">by Cosmin Capitanu</p>
          </div>
        </div>
        {/* - End Item --> */}

        {/* -- Item --> */}
        <div class="cbp-item graphic illustration">
          <div class="cbp-caption">
            <div class="cbp-caption-defaultWrap">
              <img src="../../assets/img/500x330/img14.jpg" alt="Image Description"/>
            </div>
            <div class="cbp-caption-activeWrap">
              <div class="cbp-l-caption-alignCenter d-flex align-items-end">
                <ul class="list-inline ml-auto p-3 mb-0">
                  <li class="list-inline-item">
                    <a class="u-icon u-icon--primary rounded-circle" href="single-page-simple.html">
                      <span class="fa fa-link u-icon__inner"></span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="cbp-lightbox u-icon u-icon--primary rounded-circle" href="../../assets/img/1920x1080/img25.jpg">
                      <span class="fa fa-images u-icon__inner"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="p-4">
            <h4 class="h5 mb-0">Development process</h4>
            <p class="small mb-0">by Cosmin Capitanu</p>
          </div>
        </div>
         {/* End Item --> */}
      </div>
       {/* End Content --> */}

       {/* Pagination --> */}
      <nav aria-label="Page navigation">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item disabled"><a class="page-link" href="#">...</a></li>
          <li class="page-item"><a class="page-link" href="#">12</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
       {/* End Pagination --> */}
    </div>
     {/* End Cubeportfolio --> */}
  </main>
  {/* -- ========== END MAIN CONTENT ========== --> */}

  <Footer />

    
</body>
        );
    }
}

export default Samples;