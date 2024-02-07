import React from 'react';

const MyFooter = () => {
  return (
    <footer className="wide-tb-0 bg-sky-blue bg-c ft-p" style={{ bottom: '0px', width: '100%', position: 'fixed', zIndex: 999 }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="logo-footer fot-logo">
              <img src="https://prathamonline.com/images/pratham-logo.png" alt="" />
            </div>
            <p className="text-c dis-non">
              PRATHAM is an educational institute that remains adamant in
              emerging as one of the leading institutes, enhancing the budding
              youth into successful individuals.
            </p>

            <h3 className="footer-heading text-c dis-non">We're Social</h3>
            <div className="social-icons text-c fot-icon dis-non">
              <a href="https://www.facebook.com/pratham.leadtheway/" target="_blank">
                <img src="https://prathamonline.com/images/facebook.png" style={{ width: '10px' }} alt="Facebook" />
              </a>
              <a href="https://twitter.com/PRATHAMEdu" target="_blank">
                <img src="https://prathamonline.com/images/twitar.png" style={{ width: '20px' }} alt="Twitter" />
              </a>
              <a href="https://www.linkedin.com/in/pratham-education-403299131/">
                <img src="https://prathamonline.com/images/linkedin.png" style={{ width: '19px' }} alt="LinkedIn" />
              </a>
              <a href="#">
                <img src="https://prathamonline.com/images/google+.png" style={{ width: '25px' }} alt="Google+" />
              </a>
            </div>

            <br />
            <a href="terms_of_services_and_policies.php" style={{ textDecoration: 'underline' }}>
              Terms of Service &amp; Policies
            </a>
          </div>

          <div className="col-lg-3 col-md-6 dis-non ">
            <div className="col-sm-12 wow fadeInDown" data-wow-duration="0" data-wow-delay="0s">
              <h2 className="heading-main font-s" style={{ color: '#fff' }}>
                Top Courses
              </h2>
            </div>

            <div className="footer-widget-menu">
              <ul className="list-unstyled">
                <li>
                  <a href="CUET.php" target="_blank">
                    <i className="icofont-simple-right"></i> <span>CUET</span>
                  </a>
                </li>
                <li>
                  <a href="clat.php">
                    <i className="icofont-simple-right"></i> <span>CLAT</span>
                  </a>
                </li>
                <li>
                  <a href="iim-indore.php">
                    <i className="icofont-simple-right"></i>{" "}
                    <span>IIM Indore, IPM</span>
                  </a>
                </li>
                <li>
                  <a href="iim-rohtal.php">
                    <i className="icofont-simple-right"></i>{" "}
                    <span>IIM Rohtak, IPM</span>
                  </a>
                </li>
                <li>
                  <a href="nlud.php">
                    <i className="icofont-simple-right"></i>{" "}
                    <span>NLU Delhi</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>




          <div className="col-lg-3 col-md-6 text-c dis-non  ">
            <div className="col-sm-12 wow fadeInDown" data-wow-duration="0" data-wow-delay="0s">
              <h2 className="heading-main font-s" style={{ color: '#fff' }}>
                Prep Module
              </h2>
            </div>

            <div className="footer-widget-menu">
              <ul className="list-unstyled">
                <li className="li-right">
                  <a href="two-year-casule-program-endurance.php">
                    <i className="icofont-simple-right dis-non"></i>{" "}
                    <span>2 Year Program</span>
                  </a>
                </li>
                <li className="li-left">
                  <a href="one-year-program-wizkid.php">
                    <i className="icofont-simple-right dis-non"></i>{" "}
                    <span>1 Year Program</span>
                  </a>
                </li>
                <li className="li-right">
                  <a href="hybrid-programme.php">
                    <i className="icofont-simple-right dis-non"></i>{" "}
                    <span>Hybrid Program</span>
                  </a>
                </li>
                <li className="li-left">
                  <a href="crash-course.php">
                    <i className="icofont-simple-right dis-non"></i>{" "}
                    <span>Crash Course</span>
                  </a>
                </li>
                <li className="li-left">
                  <a href="http://prathamstudyabroad.com/">
                    <i className="icofont-simple-right dis-non"></i>{" "}
                    <span>International Education</span>
                  </a>
                </li>
                <li className="li-right">
                  <a href="online-study-meterial.php">
                    <i className="icofont-simple-right dis-non"></i>{" "}
                    <span>Correspondence Course</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 text-c">
            <div className="col-sm-12 wow fadeInDown" data-wow-duration="0" data-wow-delay="0s">
              <h2 className="heading-main font-s" style={{ color: '#fff' }}>
                Get In Touch
              </h2>
            </div>




            <div className="footer-widget-contact">
              <div className="media mb-3">
                <i className="icofont-google-map mr-3 dis-non"></i>
                <div className="media-body">
                  <span style={{ fontSize: '18px' }}>PRATHAM Head Office</span>
                  <br />
                  HS-13, 2nd Floor, Kailash Colony Main Market <br />
                  New Delhi 110048
                </div>
              </div>
              <div className="media mb-3">
                <i className="icofont-smart-phone mr-3 dis-non"></i>
                <div className="media-body">
                  <div>+91- 99999 75392</div>
                  <div>011-42 666 000</div>
                </div>
              </div>
              <div className="media mb-3">
                <i className="icofont-ui-email mr-3 dis-non"></i>
                <div className="media-body">
                  <div>
                    <a href="#">info@prathamonline.com</a>
                  </div>
                  <div className="social-icons text-c fot-icon disp-non-lg">
                    <a href="https://www.facebook.com/pratham.leadtheway/" target="_blank">
                      <img src="images/facebook.png" style={{ width: '10px' }} alt="Facebook" />
                    </a>
                    <a href="https://twitter.com/PRATHAMEdu" target="_blank">
                      <img src="images/twitar.png" style={{ width: '20px' }} alt="Twitter" />
                    </a>
                    <a href="https://www.linkedin.com/in/pratham-education-403299131/">
                      <img src="images/linkedin.png" style={{ width: '19px' }} alt="LinkedIn" />
                    </a>
                    <a href="#">
                      <img src="images/google%2B.png" style={{ width: '25px' }} alt="Google+" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
