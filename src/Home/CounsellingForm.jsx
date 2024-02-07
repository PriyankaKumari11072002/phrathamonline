import React, { useState } from 'react';

const CounsellingForm = () => {
  const [program, setProgram] = useState('');
  const [courseType, setCourseType] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [school, setSchool] = useState('');
  const [classType, setClassType] = useState('');
  
  const handleSubmit = () => {
    // Add your form submission logic here
    // You can access form values using the state variables (program, courseType, etc.)
    // Example: console.log(program, courseType, firstName, lastName, phone, email, city, school, classType);
  };

  return (
    <div className="col col-lg-4 col-md-4 dis-non skiti-fom" style={{marginLeft:"30px"}}>
      <div id="sidebar">
        <div className="sidebar">
          <div className="widget">
            <div className="link-widget">
              <div className="query-fom">
                <h3 style={{ textAlign: 'center', margin: '0px 0px 22px', color: '#0d3d6b', textTransform: 'uppercase', fontSize: '17px', fontWeight: 600 }}>
                  Get Personalised Counselling
                </h3>
                <form onSubmit={handleSubmit} noValidate="novalidate" className="rounded-field">
                  <div className="form-row m-bottom">
                    <div style={{ color: 'red' }} id="mess"></div>
                    <div style={{ color: 'green' }} id="messsucess"></div>
                    <div className="col col-lg-12">
                      <select
                        title="Please choose a package"
                        required=""
                        value={program}
                        onChange={(e) => setProgram(e.target.value)}
                        id="program"
                        className="custom-select"
                        aria-required="true"
                        aria-invalid="false"
                        style={{width:'100%'}}
                      >
                        <option value="">Select Program</option>
                        <option value="Crash Course">Crash Course</option>
                        <option value="One Year Program">One Year Program</option>
                        <option value="Two Year Program">Two Year Program</option>
                        <option value="Hybrid Program">Hybrid Program</option>
                        <option value="Non Classroom Program">Non Classroom Program</option>
                        <option value="International Education">International Education</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row m-bottom">
                    <div className="col">
                      <select
                        title="Please choose a package"
                        required=""
                        value={courseType}
                        onChange={(e) => setCourseType(e.target.value)}
                        id="course_type"
                        className="custom-select"
                        aria-required="true"
                        aria-invalid="false"
                        style={{width:'100%'}}
                      >
                        <option value="">Select Course...</option>
                        <option value="Management with Math">Management (BMS/BBE/BBA(FIA)/BBA/IIM-I)</option>
                        <option value="LAW">Law</option>
                        <option value="Mass Communication">Mass Communication</option>
                        <option value="Hotel Management ">Hotel Management </option>
                        <option value="B.Com">B.Com</option>
                        <option value="Economics">Economics</option>
                        <option value="BCA">BCA</option>
                        <option value="SAT- Intl Edu ">SAT- Intl Edu </option>
                        <option value="Financial Courses">Financial Courses</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row m-bottom" style={{display:'flex',gap:'10px'}}>
                    <div className="col">
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        id="firstname"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        id="lastname"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="form-row m-bottom" style={{display:'flex',gap:'10px'}}>
                    <div className="col">
                      <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        id="s_phone"
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="s_email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="form-row m-bottom" style={{display:'flex',gap:'10px'}}>
                    <div className="col">
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        id="s_city"
                        className="form-control"
                        placeholder="City"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        value={school}
                        onChange={(e) => setSchool(e.target.value)}
                        id="s_school"
                        className="form-control"
                        placeholder="School"
                      />
                    </div>
                  </div>
                  <div className="form-row m-bottom" style={{display:'flex',gap:'10px'}}>
                    <div className="col">
                      <select
                        title="Please choose a package"
                        required=""
                        value={classType}
                        onChange={(e) => setClassType(e.target.value)}
                        id="s_class"
                        className="custom-select"
                        aria-required="true"
                        aria-invalid="false"
                        style={{width:'100%'}}
                      >
                        <option selected="selected" value="">
                          Select Class
                        </option>
                        <option value="10th">10th</option>
                        <option value="11th">11th</option>
                        <option value="12th">12th</option>
                      </select>
                    </div>
                    <input type="hidden" name="ProspectID" id="ProspectID" />
                  </div>
                  <div className="form-row">
                    <div className="col pt-3">
                      <button type="button" onClick={handleSubmit} className="form-btn btn-theme bg-orange">
                        Submit <i className="icofont-rounded-right"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounsellingForm;
