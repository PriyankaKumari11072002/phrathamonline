import React from 'react';

const Footer2 = () => {
  return (
    <footer className="wide-tb-0 bg-sky-blue bg-c ft-p" style={{ bottom: '0px', width: '100%', background: '#808080' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="logo-footer fot-logo">
              <img src="https://prathamonline.com/images/pratham-logo.png" alt="" />
            </div>
            <p className="text-c dis-non">
              PRATHAM is an educational institute that remains adamant in emerging as one of the leading institutes, enhancing the budding youth into successful individuals.
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
            <a href="terms_of_services_and_policies.php" style={{ textDecoration: 'underline' }} className="text-white">
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
                    <i className="icofont-simple-right"></i> <span className="text-white">CUET</span>
                  </a>
                </li>
                <li>
                  <a href="clat.php">
                    <i className="icofont-simple-right"></i> <span className="text-white">CLAT</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 text-c dis-non">
          </div>

          <div className="col-lg-3 col-md-6 text-c">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
