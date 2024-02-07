import React from "react";

export default function Header() {
  return (
    <header
      className="fixed-top header-fullpage bordered-nav wow fadeInDown"
      style={{ boxShadow: 'rgb(204, 204, 204) 2px 2px 3px 1px' }}
    >
      <div className="top-bar-right d-flex align-items-center text-md-left" style={{ padding: '5px 36px', color: '#ffffff', background: '#081054' }}>
        <div className="container px-0">
          <div className="row align-items-center">
            <div className="col d-flex">
              <marquee
                behavior="scroll"
                direction="left"
                style={{ marginTop: '0px', marginBottom: '-19px', fontWeight: 600 }}
              >
                <p style={{color:"white"}}>
                  <span style={{marginLeft: "60px",fontSize: "20px"}}>
                    Registrations Open for CUET | CLAT | IPMAT 2024 and 2025
                  </span>
                </p>
              </marquee>
            </div>
            <div className="col-md-auto" style={{
      WebkitBoxFlex: 0,
      msFlex: '0 0 auto',
      flex: '0 0 auto',
      width: 'auto',
      maxWidth: 'none',
    }}>
              <div className="d-inline-flex request-btn ml-2 " style={{ marginRight: '0.5rem !important' }}>
                <a
                  className="btn-theme icon-left bg-white no-shadow d-none d-lg-inline-block align-self-center"
                  href="/payonline.php"
                  role="button"
                  style={{
                    borderRadius: '4px',
                    padding: '0.6rem 1rem',
                    color: '#06163a',
                    fontWeight: 600,
                    marginRight:'20px'
                  }}
                >
                  {" "}
                  Pay Online
                </a>
              </div>

              <div className="d-inline-flex request-btn ml-2" style={{ marginLeft: '0.5rem !important' }}>
                <a
                  className="btn-theme icon-left bg-white no-shadow d-none d-lg-inline-block align-self-center"
                  href="#"
                  role="button"
                  data-toggle="modal"
                  data-target="#request_popup"
                  style={{
                    borderRadius: '4px',
                    padding: '0.6rem 1rem',
                    color: '#06163a',
                    fontWeight: 600,
                  }}
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>






      <section style={{ backgroundColor: '#fff' }}>
        <div className=""  >
          <nav
            className="navbar navbar-expand-lg navbar-light bg-white py-1 shadow-sm  text-center"
            style={{ paddingLeft: 0, paddingRight: 0 }}
          >
            <a >
              <img
                src="https://prathamonline.com/images/pratham.png"
                className="head-mob-log  "
                style={{padding:'5px 5px 5px 120px'}}
              />
            </a>
            <button
              type="button"
              data-toggle="collapse"
              data-target="#navbarContent"
              aria-controls="navbars"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler"
              style={{ borderColor: 'rgb(255, 255, 255)', borderStyle: 'solid', borderWidth: '1px !important' }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navbarContent" className="collapse navbar-collapse">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <a
                    href="index.php"
                    className="nav-link font-weight-bold text-uppercase"
                    style={{ color: '#081054 !important' }}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="about-us.php"
                    className="nav-link font-weight-bold text-uppercase"
                    style={{ color: '#081054 !important' }}
                  >
                    About
                  </a>
                </li>

                <li className="nav-item dropdown megamenu">
                  <a
                    id="megamneu"
                    href=""
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="nav-link dropdown-toggle font-weight-bold text-uppercase"
                    style={{ color: '#081054 !important' }}
                  >
                    PREP MODULES{" "}
                  </a>
                  <div
                    aria-labelledby="megamneu"
                    className="dropdown-menu border-0 p-0 m-0"
                  >
                    <div className="container text-right-align">
                      <div className="row bg-white rounded-0 m-0 shadow-sm">
                        <div className="col-lg-12 col-xl-12">
                          <div className="p-2">
                            <div className="row">
                              <div className="col-lg-4 mb-2 mt-2">
                                <h6 className="font-weight-bold text-uppercase h6-st">
                                  classNameROOM PROGRAM
                                </h6>
                                <ul className="list-unstyled">
                                  <li className="nav-item itam-st">
                                    <a
                                      href="two-year-casule-program-endurance.php"
                                      className="nav-link text-small pb-0  li-st "
                                    >
                                      <span className="dis-non">•</span> TWO
                                      YEAR PROGRAM
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="one-year-program-wizkid.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span> ONE
                                      YEAR PROGRAM
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="extended.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>{" "}
                                      EXTENDED PROGRAM
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="retaker.php"
                                      className="nav-link text-small pb-0  li-st "
                                    >
                                      <span className="dis-non">•</span> Retaker
                                      Program
                                    </a>
                                  </li>

                                  <li className="nav-item itam-st">
                                    <a
                                      href="crash-course.php"
                                      className="nav-link text-small pb-0  li-st "
                                    >
                                      <span className="dis-non">•</span> Crash
                                      Course
                                    </a>
                                  </li>
                                  <li className="nav-item  itam-st">
                                    <a
                                      href="sat-intl-edu.php"
                                      className="nav-link text-small pb-0  li-st "
                                    >
                                      <span className="dis-non">•</span> SAT®
                                      preparation
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-4 mb-2 mt-2">
                                <h6 className="font-weight-bold text-uppercase h6-st">
                                  Correspondence Course
                                </h6>
                                <ul className="list-unstyled">
                                  <li className="nav-item itam-st">
                                    <a
                                      href="/CUET.php"
                                      className="nav-link text-small pb-0  li-st "
                                    >
                                      <span className="dis-non">•</span> ONLINE
                                      STUDY MATERIAL CUET
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="/mock-test-iim/"
                                      className="nav-link text-small pb-0  li-st "
                                    >
                                      <span className="dis-non">•</span> ONLINE
                                      STUDY MATERIAL IIM
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="https://lawreadynow.com/"
                                      className="nav-link text-small pb-0  li-st "
                                    >
                                      <span className="dis-non">•</span> ONLINE
                                      STUDY MATERIAL LaW
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="hybrid-programme.php"
                                      className="nav-link text-small pb-0  li-st "
                                    >
                                      <span className="dis-non">•</span> Hybrid
                                      Program
                                    </a>
                                  </li>

                                  <li className="nav-item itam-st">
                                    <a
                                      href="/CUET.php"
                                      className="nav-link text-small pb-0  li-st "
                                    >
                                      <span className="dis-non">•</span>
                                      CUET Test Series
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="/Online-Study-Material-IIM/"
                                      className="nav-link text-small pb-0  li-st "
                                    >
                                      <span className="dis-non">•</span>
                                      IIM Test Series
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="/Online-Study-Material-Law/"
                                      className="nav-link text-small pb-0  li-st "
                                    >
                                      <span className="dis-non">•</span>
                                      Law Test Series
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-4 mb-2 mt-">
                                <h6 className="font-weight-bold text-uppercase h6-st">
                                  OTHER MODULES
                                </h6>
                                <ul className="list-unstyled">
                                  <li className="nav-item itam-st">
                                    <a
                                      href="http://prathamstudyabroad.com/"
                                      className="nav-link text-small pb-0  li-st "
                                    >
                                      <span className="dis-non">•</span>{" "}
                                      Application Guidance
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="http://prathamstudyabroad.com/"
                                      className="nav-link text-small pb-0  li-st "
                                    >
                                      <span className="dis-non">•</span> SAT
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="http://prathamstudyabroad.com/"
                                      className="nav-link text-small pb-0  li-st "
                                    >
                                      <span className="dis-non">•</span> GMAT
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="https://www.prathamonline.com/"
                                      className="nav-link text-small pb-0  li-st "
                                    >
                                      <span className="dis-non">•</span> Gold @
                                      18
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="counselling-devision.php"
                                      className="nav-link text-small pb-0  li-st "
                                    >
                                      <span className="dis-non">•</span>{" "}
                                      Counseling Division
                                    </a>
                                  </li>

                                  <li className="nav-item itam-st">
                                    <a
                                      href="http://letscat.mba/"
                                      className="nav-link text-small pb-0  li-st "
                                    >
                                      <span className="dis-non">•</span> CAT
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown megamenu">
                  <a
                    id="megamneu"
                    href=""
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="nav-link dropdown-toggle font-weight-bold text-uppercase"
                    style={{ color: '#081054 !important' }}
                  >
                    COURSES
                  </a>
                  <div
                    aria-labelledby="megamneu"
                    className="dropdown-menu border-0 p-0 m-0"
                  >
                    <div className="container text-right-align">
                      <div className="row bg-white rounded-0 m-0 shadow-sm">
                        <div className="col-lg-12 col-xl-12">
                          <div className="p-2">
                            <div className="row">
                              <div className="col-lg-3 mb-2 mt-2">
                                <h6 className="font-weight-bold text-uppercase h6-st">
                                  MANAGEMENT
                                </h6>
                                <ul className="list-unstyled">
                                  <li className="nav-item itam-st">
                                    <a
                                      href="CUET.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span> CUET
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="university-of-delhi.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span> DU JAT
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="iim-indore.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span> IIM
                                      Indore, IPM
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="iim-rohtal.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span> IIM
                                      Rohtak, IPM
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="iim-bodh-gaya.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span> IIM
                                      Bodhgaya, IPM
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="iim-ranchi.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span> IIM
                                      Ranchi, IPM
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="iim-jammu.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span> IIM
                                      Jammu
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="nmims(npat).php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>{" "}
                                      NMIMS(NPAT)
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="scm.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>{" "}
                                      Symbiosis Center for Management
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="ip-university.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>{" "}
                                      Indraprastha University
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="christ-university.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span> Christ
                                      University
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="jamia-millia-university.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span> Jamia
                                      Millia University
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="st-xaviers-college-mumbai.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span> St
                                      Xavier’s College, Mumbai
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="devi-ahilya-vishwavidyalaya.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span> Devi
                                      Ahilya Vishwavidyalaya
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="upes.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span> UPES
                                    </a>
                                  </li>
                                </ul>
                                <h6 className="font-weight-bold text-uppercase h6-st">
                                  Mass Communication{" "}
                                </h6>
                                <ul className="list-unstyled">
                                  <li className="nav-item itam-st">
                                    <a
                                      href="delhi-university-ba-hons.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>
                                      UNIVERSITY OF DELHI
                                    </a>
                                  </li>

                                  <li className="nav-item itam-st">
                                    <a
                                      href="symbiosis-institute-of-media.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>
                                      SYMBIOSIS CENTRE FOR MEDIA & COMMUNICATION
                                    </a>
                                  </li>

                                  <li className="nav-item itam-st">
                                    <a
                                      href="christuniversity_masscomm.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>
                                      CHRIST UNIVERSITY
                                    </a>
                                  </li>

                                  <li className="nav-item itam-st">
                                    <a
                                      href="sxc-m-bmm.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>
                                      St Xavier’s College, Mumbai
                                    </a>
                                  </li>

                                  <li className="nav-item itam-st">
                                    <a
                                      href="ipcw-university.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span> IPCW
                                      University{" "}
                                    </a>
                                  </li>

                                  <li className="nav-item itam-st">
                                    <a
                                      href="ip-university-bjmc.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>
                                      IP University
                                    </a>
                                  </li>

                                  <li className="nav-item itam-st">
                                    <a
                                      href="mithibai_masscomm.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>
                                      SVKM's Mithibai College of Arts
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-3 mb-2 mt-2">
                                <h6 className="font-weight-bold text-uppercase h6-st">
                                  LAW
                                </h6>
                                <ul className="list-unstyled">
                                  <li className="nav-item itam-st">
                                    <a
                                      href="clat.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span> CLAT
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="ailet.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span> AILET -
                                      NLU, Delhi
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="ip-university-law.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span> IP
                                      University Law
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="christ-university-law.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span> CULEEE
                                      - Christ
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="jamia-millia-islamia-law.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span> JMI
                                      Entrance Test - Jamia Milia Islamia{" "}
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="ul-sat-upes-dehradun.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span> UL-SAT
                                      –UPES, Dehradun
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="nmims-school-of-law.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>{" "}
                                      CLAT/LSAT NMIMS{" "}
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="symbiosis-law-college.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span> SLAT
                                      Symbiosis
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="nusl.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span> CLAT
                                      Nirma
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="gcl.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>{" "}
                                      Government College of Law
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="mh-cet.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span> MH-CET
                                      Law - GLC Bombay, ILS Pune
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="ulc-bangalore.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span> ULC
                                      Bangalore
                                    </a>
                                  </li>
                                </ul>

                                <h6 className="font-weight-bold text-uppercase h6-st">
                                  Hotel Management
                                </h6>
                                <ul className="list-unstyled">
                                  <li className="nav-item itam-st">
                                    <a
                                      href="nchmct.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>
                                      NCHMCT JEE
                                    </a>
                                  </li>

                                  <li className="nav-item itam-st">
                                    <a
                                      href="wgsha-manipal.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>
                                      WGSHA, Manipal
                                    </a>
                                  </li>

                                  <li className="nav-item itam-st">
                                    <a
                                      href="christ-university-hm.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>
                                      Christ University (BHM)
                                    </a>
                                  </li>

                                  <li className="nav-item itam-st">
                                    <a
                                      href="gsiu-hm.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>
                                      IPU CET BHMCT
                                    </a>
                                  </li>

                                  <li className="nav-item itam-st">
                                    <a
                                      href="ihm-aurangabad.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>
                                      IHM , Aurangabad
                                    </a>
                                  </li>

                                  <li className="nav-item itam-st">
                                    <a
                                      href="oberoi_hm.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>
                                      OBEROI STEP Program
                                    </a>
                                  </li>
                                </ul>
                              </div>

                              <div className="col-lg-3 mb-2 mt-2">
                                <h6 className="font-weight-bold text-uppercase h6-st">
                                  Bachelor of Computer Applications
                                </h6>
                                <ul className="list-unstyled">
                                  <li className="nav-item itam-st">
                                    <a
                                      href="sic-bca.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>
                                      Symbiosis Institute of Computer Studies &
                                      Research (SICSR), Pune
                                    </a>
                                  </li>

                                  <li className="nav-item itam-st">
                                    <a
                                      href="christ-university-bca.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>
                                      Christ University(Bengaluru)
                                    </a>
                                  </li>

                                  <li className="nav-item itam-st">
                                    <a
                                      href="vit-bca.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>
                                      Vellore Institute of Technology
                                    </a>
                                  </li>

                                  <li className="nav-item itam-st">
                                    <a
                                      href="presidency_bangalore_bca.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>
                                      Presidency College, Bangalore
                                    </a>
                                  </li>

                                  <li className="nav-item itam-st">
                                    <a
                                      href="upesbca.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>
                                      UPES, Dehradun
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="BhartiyaVidyapeeth_bca.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>
                                      Bhartiya Vidyapeeth, Pune
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="delhi_skill_university_bca.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>
                                      Delhi Skill and Entrepreneurship
                                      University
                                    </a>
                                  </li>

                                  <li className="nav-item itam-st">
                                    <a
                                      href="jamia-millia-islamia-bca.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span> Jamia
                                      Millia Islamia
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="banaras-hindu-university.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span> Banaras
                                      Hindu University
                                    </a>
                                  </li>
                                </ul>

                                <h6 className="font-weight-bold text-uppercase h6-st">
                                  B.Com
                                </h6>
                                <ul className="list-unstyled">
                                  <li className="nav-item itam-st">
                                    <a
                                      href="du_bcom.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>
                                      UNIVERSITY OF DELHI
                                    </a>
                                  </li>

                                  <li className="nav-item itam-st">
                                    <a
                                      href="banaras_bcom.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>
                                      Banaras Hindu University
                                    </a>
                                  </li>

                                  <li className="nav-item itam-st">
                                    <a
                                      href="ip-university-b-com.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>
                                      IP University
                                    </a>
                                  </li>

                                  <li className="nav-item itam-st">
                                    <a
                                      href="jamia-millia-islamia-b-com.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>
                                      Jamia Millia Islamia
                                    </a>
                                  </li>

                                  <li className="nav-item itam-st">
                                    <a
                                      href="nmims-asmsc-b.com.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span> NMIMS
                                      (ASMSC)
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="christ-university-b.com.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span> Christ
                                      University B.com
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="scac-pune-b.com.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>{" "}
                                      Symbiosis College AC, Pune
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="st-xaviers-kolkata.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span> St.
                                      Xavier’s Kolkata
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="lcc-tamilnadu.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span> Loyola
                                      College Tamil Nadu
                                    </a>
                                  </li>
                                </ul>
                              </div>

                              <div className="col-lg-3 mb-2 mt-2">
                                <h6 className="font-weight-bold text-uppercase h6-st">
                                  PSYCHOLOGY
                                </h6>
                                <ul className="list-unstyled">
                                  <li className="nav-item itam-st">
                                    <a
                                      href="du-psychology.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>
                                      UNIVERSITY OF DELHI
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="christ-university-psychology.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>
                                      Christ University, Bangalore
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="jamia-milliaIslamia-university-psychology.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>
                                      Jamia Millia Islamia University
                                      (Psychology)
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="banaras-hindu-university-BHU-UET.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>
                                      Banaras Hindu University (BHU-UET)
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="mount-carmel-college-psychology.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>
                                      Mount Carmel College (Psychology)
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="flameuniversity_psychology.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>
                                      Flame University
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="mumbai_psychology.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>
                                      Mumbai University
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="aligarh-muslim-university-psychology.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span> Aligarh
                                      Muslim University (Psychology){" "}
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="ashoka-university-sonepat.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span> Ashoka
                                      University, Sonepat{" "}
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="mit-world-peace-university-pune.php"
                                      className="nav-link text-small pb-0 li-st "
                                    >
                                      <span className="dis-non">•</span>{" "}
                                      MIT-World Peace University, Pune{" "}
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown megamenu">
                  <a
                    id="megamneu"
                    href=""
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="nav-link dropdown-toggle font-weight-bold text-uppercase"
                    style={{ color: '#081054 !important' }}
                  >
                    Results{" "}
                  </a>
                  <div
                    aria-labelledby="megamneu"
                    className="dropdown-menu border-0 p-0 m-0 result-drop text-right-align"
                   
                  >
                    <div className="">
                      <div className=" bg-white rounded-0 m-0 shadow-sm">
                        <div className="col-lg-12 col-xl-12">
                          <div className="p-2">
                            <div className="">
                              <div className="col-lg-12 mb-2 mt-2 ">
                                <ul className="list-unstyled">
                                  <li className="nav-item itam-st">
                                    <a
                                      href="result-2023.php"
                                      className="nav-link text-small pb-0 li-str "
                                    >
                                      <span className="dis-non">•</span> Result
                                      2023
                                    </a>
                                  </li>

                                  <li className="nav-item itam-st">
                                    <a
                                      href="result-2022.php"
                                      className="nav-link text-small pb-0 li-str "
                                    >
                                      <span className="dis-non">•</span> Result
                                      2022
                                    </a>
                                  </li>

                                  <li className="nav-item itam-st">
                                    <a
                                      href="result-2021.php"
                                      className="nav-link text-small pb-0 li-str "
                                    >
                                      <span className="dis-non">•</span> Result
                                      2021
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="result-2020.php"
                                      className="nav-link text-small pb-0 li-str "
                                    >
                                      <span className="dis-non">•</span> Result
                                      2020
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="result-2019.php"
                                      className="nav-link text-small pb-0 li-str "
                                    >
                                      <span className="dis-non">•</span> Result
                                      2019
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="result-2018.php"
                                      className="nav-link text-small pb-0 li-str "
                                    >
                                      <span className="dis-non">•</span> Result
                                      2018
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="result-2017.php"
                                      className="nav-link text-small pb-0 li-str "
                                    >
                                      <span className="dis-non">•</span> Result
                                      2017
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="result-2016.php"
                                      className="nav-link text-small pb-0 li-str "
                                    >
                                      <span className="dis-non">•</span> Result
                                      2016
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="result-2015.php"
                                      className="nav-link text-small pb-0 li-str "
                                    >
                                      <span className="dis-non">•</span> Result
                                      2015
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="result-2014.php"
                                      className="nav-link text-small pb-0 li-str "
                                    >
                                      <span className="dis-non">•</span> Result
                                      2014
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="result-2013.php"
                                      className="nav-link text-small pb-0 li-str "
                                    >
                                      <span className="dis-non">•</span> Result
                                      2013
                                    </a>
                                  </li>
                                  <li className="nav-item itam-st">
                                    <a
                                      href="result-2012.php"
                                      className="nav-link text-small pb-0 li-str "
                                    >
                                      <span className="dis-non">•</span> Result
                                      2012
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item">
                  <a
                    href="http://guidanceedge.com/"
                    className="nav-link font-weight-bold text-uppercase"
                    style={{ color: '#081054 !important' }}
                  >
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="contact-us.php"
                    className="nav-link font-weight-bold text-uppercase"
                    style={{ color: '#081054 !important' }}
                  >
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="career.php"
                    className="nav-link font-weight-bold text-uppercase"
                    style={{ color: '#081054 !important' }}
                  >
                    Career
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="http://psis.prathamedu.com"
                    className="nav-link font-weight-bold text-uppercase"
                    style={{ color: '#081054 !important' }}
                  >
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.prathamonline.com/partners/"
                    className="nav-link font-weight-bold text-uppercase"
                    style={{ color: '#081054 !important' }}
                  >
                    Partners
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </header>
  );
}
