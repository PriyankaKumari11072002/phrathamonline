import React from 'react';

const ClatDeadlinesTable = () => {
  return (
    <div style={{ paddingTop: '50px' }} className="col-sm-12 wow fadeInDown" data-wow-duration="0" data-wow-delay="0s">
      <h2 className="heading-main" style={{ color: '#103f6b', textAlign: 'left', textTransform: 'none' }}>
        CLAT 2024 Deadlines
      </h2>

      <table className="table table-striped">
        <tbody>
          <tr>
            <th>Application Open</th>
            <th>1 July, 2023</th>
          </tr>
          <tr>
            <th>Release of First Sample Question Set</th>
            <th>August, 2023</th>
          </tr>
          <tr>
            <th>Release of Second Sample Question Set</th>
            <th>September, 2023</th>
          </tr>
          <tr>
            <th>Release of Third Sample Question Set</th>
            <th>October, 2023(Tentative)</th>
          </tr>
          <tr>
            <th>Last Date for receiving applications</th>
            <th>November, 2023</th>
          </tr>
          <tr>
            <th>CLAT 2023 Exam Date</th>
            <th>03 December, 2023</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ClatDeadlinesTable;
