import React from 'react';

const CollegesAndSeatsTable = () => {
  return (
    <div style={{ paddingTop: '50px' }} className="col-sm-12 wow fadeInDown" data-wow-duration="0" data-wow-delay="0s">
      <h2 className="heading-main" style={{ color: '#103f6b', textAlign: 'left', textTransform: 'none' }}>
        Colleges and Total Seats
      </h2>

      <table className="table table-striped">
        <thead>
          <tr style={{ backgroundColor: '#0d3d6b', color: '#fff', fontSize: '17px' }}>
            <th scope="col"   style={{backgroundColor: '#081054' ,color:'white'}}>22 Colleges Under CLAT</th>
            <th scope="col"  style={{backgroundColor: '#081054' ,color:'white'}}>Seats</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>National Law School Of India University, Bengaluru</th>
            <th>180</th>
          </tr>
          <tr>
            <th>NALSAR University of Law, Hyderabad </th>
            <th>132</th>
          </tr>
          <tr>
            <th>The West Bengal National University Of Juridical Science, Kolkata </th>
            <th>132</th>
          </tr>
          <tr>
            <th>National Law University, Jodhpur </th>
            <th>120</th>
          </tr>
          <tr>
            <th>Gujarat National Law University, Gandhinagar </th>
            <th>205</th>
          </tr>
          <tr>
            <th>National Law Institute University, Bhopal </th>
            <th>120</th>
          </tr>
          <tr>
            <th>Rajiv Gandhi National University Of Law, Patiala </th>
            <th>180</th>
          </tr>
          <tr>
            <th>Hidayatullah National Law University, Raipur </th>
            <th>180</th>
          </tr>
          <tr>
            <th>Dr. Ram Manohar Lohia National Law University, Lucknow</th>
            <th>187</th>
          </tr>
          <tr>
            <th>National Law University, Odisha  </th>
            <th>180</th>
          </tr>
          <tr>
            <th>Maharashtra National Law University, Mumbai </th>
            <th>150</th>
          </tr>
          <tr>
            <th>National University of Study and Research in Law, Ranchi</th>
            <th>140</th>
          </tr>
          <tr>
            <th>National University of Advanced Legal Studies, Kochi </th>
            <th>60</th>
          </tr>
          <tr>
            <th>Chanakya National Law University, Patna </th>
            <th>145</th>
          </tr>
          <tr>
            <th>Maharashtra National Law University, Nagpur </th>
            <th>120</th>
          </tr>
          <tr>
            <th>Damodaram Sanjivayya National Law University, Vishakhapatnam </th>
            <th>120</th>
          </tr>
          <tr>
            <th>National Law School and Judicial Academy, Assam</th>
            <th>60</th>
          </tr>
          <tr>
            <th>Tamil Nadu National Law School, Tiruchirappalli</th>
            <th>120</th>
          </tr>
          <tr>
            <th>Himachal Pradesh National Law University, Shimla</th>
            <th>60</th>
          </tr>
          <tr>
            <th>Dharmashastra National Law, Jabalpur</th>
            <th>120</th>
          </tr>
          <tr>
            <th>Maharashtra National Law University, Aurangabad</th>
            <th>60</th>
          </tr>
          <tr>
            <th>Dr. B.R. Ambedkar National Law University, Sonipat </th>
            <th>120</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CollegesAndSeatsTable;
