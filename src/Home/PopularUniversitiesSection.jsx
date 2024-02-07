import React from 'react';

const PopularUniversitiesSection = () => {
  return (
    <section className="bg-fixed clients-bg pos-rel" style={{ padding: '30px 0px' }}>
      <div className="" style={{ backgroundColor: '#fff!important' }}></div>
      <div className="container">
        <div className="row">
          {/* Heading Main */}
          <div className="col-sm-12 wow fadeInDown" data-wow-duration="0" data-wow-delay="0s">
            <h2 className="heading-main" style={{ color: '#103f6b', textAlign: 'left', textTransform: 'none' }}>
              Popular Universities / Entrances
            </h2>
          </div>
          {/* Heading Main */}

          <div className="col-sm-12 wow fadeInUp" data-wow-duration="0" data-wow-delay="0.2s">
            <div className="owl-carousel owl-theme" id="home-clients" style={{display:'flex', justifyContent:'space-between'}}>

              {/* Client Logo */}
              <div className="item">
                <a href="university-of-delhi.php"><img src="https://prathamonline.com/images/popularcourses/du.png" alt="" style={{ width: '120px' }} /></a>
              </div>
              {/* Client Logo */}

              {/* Client Logo */}
              <div className="item">
                <a href="clat.php"><img src="https://prathamonline.com/images/popularcourses/clat.png" alt="" style={{ width: '120px' }} /></a>
              </div>
              {/* Client Logo */}

              {/* Client Logo */}
              <div className="item">
                <a href="iim-indore.php"><img src="https://prathamonline.com/images/popularcourses/iimindore.png" alt="" style={{ width: '120px' }} /></a>
              </div>
              {/* Client Logo */}

              {/* Client Logo */}
              <div className="item">
                <a href="nmims(npat).php"><img src="https://prathamonline.com/images/popularcourses/iim-rhotak.png" alt="" style={{ width: '120px' }} /></a>
              </div>
              {/* Client Logo */}

              {/* Client Logo */}
              <div className="item">
                <a href="nchmct.php"><img src="https://prathamonline.com/images/popularcourses/iim-rhotak.png" alt="" style={{ width: '120px' }} /></a>
              </div>
              {/* Client Logo */}

              {/* Client Logo */}
              <div className="item">
                <a href="ip-university.php"><img src="https://prathamonline.com/images/popularcourses/iim-rhotak.png" alt="" style={{ width: '120px' }} /></a>
              </div>
              {/* Client Logo */}

              {/* Client Logo */}
              <div className="item">
                <a href="iim-rohtal.php"><img src="https://prathamonline.com/images/popularcourses/nmimsnpat.png" alt="" style={{ width: '120px' }} /></a>
              </div>
              {/* Client Logo */}

              {/* Client Logo */}
              <div className="item">
                <a href="simc.php"><img src="https://prathamonline.com/images/popularcourses/nmimsnpat.png" alt="" style={{ width: '120px' }} /></a>
              </div>
              {/* Client Logo */}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularUniversitiesSection;
