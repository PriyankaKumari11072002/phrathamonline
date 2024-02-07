import React from 'react';

const StepsArea = () => {
  return (
    <section className="steps-area pb-80 wow fadeInUp" data-wow-delay="0.3s" style={{ paddingTop: '30px', visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
      <div className="container">
        <div className="row">
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
            <div className="steps-box text-center mb-30">
              <div className="steps-box__icon mb-35">
                <span className="icon flaticon-explore"></span>
              </div>
              <div className="steps-box__content">
                <h4 className="mb-25"><a> Experienced Faculty</a></h4>
                <p>Get personalized mentoring from our highly qualified and experienced faculty members.</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
            <div className="steps-box text-center mb-30">
              <div className="steps-box__icon mb-35">
                <span className="icon flaticon-ab-testing"></span>
              </div>
              <div className="steps-box__content">
                <h4 className="mb-25"><a>Extensive Study Material</a></h4>
                <p>Our extensive study material is regularly updated as per CLAT standards.</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
            <div className="steps-box text-center mb-30">
              <div className="steps-box__icon mb-35">
                <span className="icon flaticon-target"></span>
              </div>
              <div className="steps-box__content">
                <h4 className="mb-25"><a>Well-Curated Mock Tests</a></h4>
                <p>We provide well-structured CLAT Mock tests for in-depth and complete preparation.</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
            <div className="steps-box text-center mb-30">
              <div className="steps-box__icon mb-35">
                <span className="icon flaticon-tap"></span>
              </div>
              <div className="steps-box__content">
                <h4 className="mb-25"><a>Doubt Solving Sessions</a></h4>
                <p>Get regular doubt-solving sessions with experienced educators.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsArea;
