import React from 'react';

const CLATSectionTable = () => {
  return (
    <div className="col-lg-12 col-md-12 col-sm-12" >
      <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" style={{ overflowX: 'auto' }}>
        <table className="table table-striped">
          <thead  >
            <tr style={{ backgroundColor: '#0d3d6b', color: '#fff', fontSize: '17px' }}>
              <th scope="col"  style={{backgroundColor: '#081054' ,color:'white'}}>Section</th>
              <th scope="col"  style={{backgroundColor: '#081054',color:'white' }}>Number of Questions (roughly)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>English Language</th>
              <th>22-25</th>
            </tr>
            <tr>
              <th>Current Affairs and GK</th>
              <th>22-25 </th>
            </tr>
            <tr>
              <th>Legal Reasoning</th>
              <th>28-32 </th>
            </tr>
            <tr>
              <th>Logical Reasoning</th>
              <th>28-32 </th>
            </tr>
            <tr>
              <th>Quantitative Techniques</th>
              <th>10-12 </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CLATSectionTable;
