import Carousels from "./Carousel";
import TestimonialSection from "./TestimonialSection";
import PrepModulesSection from "./PrepModulesSection";
import PopularUniversitiesSection from "./PopularUniversitiesSection";
import StepsArea from "./StepsArea";
import CounsellingForm from "./CounsellingForm";
import CollegesAndSeatsTable from "./CollegesAndSeatsTable";
import ClatDeadlinesTable from "./ClatDeadlinesTable";
import WhyPratham from "./WhyPratham";
import FAQSection from "./FAQSection";
import CommonLawAptitudeTestComponent from "./CommonLawApptitudeTest";
import CLATSectionTable from "./ClatSelectionSheet";
import '../index.css'
export default function HomeSection() {
  return (
    <>
      <Carousels />
      <div  className="homeSection">
        <div>
          <CommonLawAptitudeTestComponent/>
          <CLATSectionTable/>
          <CollegesAndSeatsTable/>
          <ClatDeadlinesTable/>
          <WhyPratham/>
          <FAQSection/>
        </div>
        <CounsellingForm/>
      </div>
     
      <StepsArea/>
      <PopularUniversitiesSection/>
      <PrepModulesSection/>
      <TestimonialSection/>
      <footer className="wide-tb-0 bg-sky-blue bg-c ft-p  mb-2" style={{ bottom: '0px', width: '100%', background:'#808080' }}>
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
                <li>
                  <a href="iim-indore.php">
                    <i className="icofont-simple-right"></i>{" "}
                    <span className="text-white">IIM Indore, IPM</span>
                  </a>
                </li>
                <li>
                  <a href="iim-rohtal.php">
                    <i className="icofont-simple-right"></i>{" "}
                    <span className="text-white">IIM Rohtak, IPM</span>
                  </a>
                </li>
                <li>
                  <a href="nlud.php">
                    <i className="icofont-simple-right"></i>{" "}
                    <span className="text-white">NLU Delhi</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 text-c dis-non">
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
                    <span className="text-white">2 Year Program</span>
                  </a>
                </li>
                <li className="li-left">
                  <a href="one-year-program-wizkid.php">
                    <i className="icofont-simple-right dis-non"></i>{" "}
                    <span className="text-white">1 Year Program</span>
                  </a>
                </li>
                <li className="li-right">
                  <a href="hybrid-programme.php">
                    <i className="icofont-simple-right dis-non"></i>{" "}
                    <span className="text-white">Hybrid Program</span>
                  </a>
                </li>
                <li className="li-left">
                  <a href="crash-course.php">
                    <i className="icofont-simple-right dis-non"></i>{" "}
                    <span className="text-white">Crash Course</span>
                  </a>
                </li>
                <li className="li-left">
                  <a href="http://prathamstudyabroad.com/">
                    <i className="icofont-simple-right dis-non"></i>{" "}
                    <span className="text-white">International Education</span>
                  </a>
                </li>
                <li className="li-right">
                  <a href="online-study-meterial.php">
                    <i className="icofont-simple-right dis-non"></i>{" "}
                    <span className="text-white">Correspondence Course</span>
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
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
      <footer
        className="wide-tb-0  pb-70 dis-non"
        style={{
          padding: "60px 0px 30px ",
          backgroundColor: "#3b3c3e",
          marginBottom: "140px",
        }}
      >
        <div className="container" >
          <h2 className="footer-heading">
            <b>Partners</b>
          </h2>
          <div className="row">
            <div className="col-lg-2 col-md-2">
              <h3 className="footer-heading"></h3>
              <div className="footer-widget-menu">
                <ul className="list-unstyled">
                  <li>
                    <a className="text-white" href="http://iifm.co.in/">
                      {" "}
                      <span>IIFM</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-2">
              <h3 className="footer-heading"></h3>
              <div className="footer-widget-menu">
                <ul className="list-unstyled">
                  <li>
                    <a className="text-white" href="/NCFM">
                      {" "}
                      <span>NCFM Drivatives</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-2">
              <h3 className="footer-heading"></h3>
              <div className="footer-widget-menu">
                <ul className="list-unstyled">
                  <li>
                    <a className="text-white" href="http://firefish.in/">
                      {" "}
                      <span>FIREFISH</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <h3 className="footer-heading"></h3>
              <div className="footer-widget-menu">
                <ul className="list-unstyled">
                  <li>
                    <a className="text-white" href="http://primaryolympiad.in/">
                      {" "}
                      <span>PRIMARY OLYMPIAD</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <h3 className="footer-heading"></h3>
              <div className="footer-widget-menu">
                <ul className="list-unstyled">
                  <li>
                    <a className="text-white" href="http://worldgkolympiad.com/">
                      {" "}
                      <span>WORLD GK OLYMPIAD</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-4">
              <h3 className="footer-heading"></h3>
              <div className="footer-widget-menu">
                <ul className="list-unstyled">
                  <li>
                    <a className="text-white" href="http://www.financeolympiad.in/ifo.php">
                      {" "}
                      <span>INTERNATIONAL FINANCE OLYMPIAD</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-4">
              <h3 className="footer-heading"></h3>
              <div className="footer-widget-menu">
                <ul className="list-unstyled">
                  <li>
                    <a className="text-white" href="http://globaleconomicsolympiad.com/">
                      {" "}
                      <span>GLOBAL ECONOMICS OLYMPIAD</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-4">
              <h3 className="footer-heading"></h3>
              <div className="footer-widget-menu  mb-5">
                <ul className="list-unstyled">
                  <li>
                    <a className="text-white" href="http://www.globalaptitudeolympiad.com/">
                      {" "}
                      <span   >GLOBAL OLYMPIAD ON APTITUDE</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
