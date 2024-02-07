import React from 'react';

const FAQSection = () => {
  return (
    <div style={{ paddingTop: '50px', paddingBottom: '20px' }} className="col-sm-12 wow fadeInDown" >
      <h2 className="heading-main" style={{ fontSize: '30px', color: '#103f6b', textAlign: 'left', textTransform: 'none' }}>
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <div className="col col-xs-12 about-company-s2-slider-wrapper"  >
        <div className="theme-collapse arrow-right-border">
          <div className="toggle" >
            <i className="icofont-rounded-down"></i> Can I appear for CLAT while in Class XIth?
          </div>
          <div className="collapse">
            <div className="content">
              <p className="p-sty">A student who may be <b>appearing for their qualifying examination (12th Boards) in March/April, 2024, or have passed their 12 Boards before 2024</b> is eligible to appear for the CLAT examination.</p>
            </div>
          </div>

          {/* ... Repeat the above structure for each FAQ item ... */}

          <div className="toggle">
            <i className="icofont-rounded-down"></i>How can I balance boards and CLAT Preparation?
          </div>
          <div className="collapse">
            <div className="content">
              <p className="p-sty">Aspirants are suggested to create a daily calendar to study for <b>CLAT every day</b>. Additionally, one should speak to their mentors to curate an efficient plan that includes studying consistently for the exam and managing their XIIth.</p>
            </div>
          </div>
          <div className="toggle">
            <i className="icofont-rounded-down"></i>How can I balance boards and CLAT Preparation?
          </div>
          <div className="collapse">
            <div className="content">
              <p className="p-sty">Aspirants are suggested to create a daily calendar to study for <b>CLAT every day</b>. Additionally, one should speak to their mentors to curate an efficient plan that includes studying consistently for the exam and managing their XIIth.</p>
            </div>
          </div>
          <div className="toggle">
            <i className="icofont-rounded-down"></i>How can I balance boards and CLAT Preparation?
          </div>
          <div className="collapse">
            <div className="content">
              <p className="p-sty">Aspirants are suggested to create a daily calendar to study for <b>CLAT every day</b>. Additionally, one should speak to their mentors to curate an efficient plan that includes studying consistently for the exam and managing their XIIth.</p>
            </div>
          </div>
          <div className="toggle">
            <i className="icofont-rounded-down"></i>How can I balance boards and CLAT Preparation?
          </div>
          <div className="collapse">
            <div className="content">
              <p className="p-sty">Aspirants are suggested to create a daily calendar to study for <b>CLAT every day</b>. Additionally, one should speak to their mentors to curate an efficient plan that includes studying consistently for the exam and managing their XIIth.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
