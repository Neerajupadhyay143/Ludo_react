import React, { useRef, useState } from 'react'
import * as FileSaver from 'file-saver';
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import jsPDF from "jspdf";

function NewTransaction() {



  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const tableData = [
    {
      number: 1,
      id: 'ABC123',
      name: 'John Doe',
      mobile: '555-1234',
      balance: '$1000',
      date: '2023-08-22',
      penalty: 50,
      action: 'Edit'
    },
    {
      number: 10,
      id: 'XYZ987',
      name: 'Emily Williams',
      mobile: '555-4321',
      balance: '$2000',
      date: '2023-09-01',
      penalty: 10,
    },
    {
      number: 11,
      id: 'LMN456',
      name: 'William Brown',
      mobile: '555-8765',
      balance: '$300',
      date: '2023-09-02',
      penalty: 15,
    },
    {
      number: 12,
      id: 'OPQ789',
      name: 'Sophia Davis',
      mobile: '555-6789',
      balance: '$900',
      date: '2023-09-05',
      penalty: 40,
    },
    // Add more data objects here
  ];


  const [penalties, setPenalties] = useState(tableData.map(data => data.penalty));
  const [editingIndex, setEditingIndex] = useState(null);


  const filteredData = tableData.filter(data => {
    if (!startDate || !endDate) {
      return true;
    }
    const dataDate = new Date(data.date);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return dataDate >= start && dataDate <= end;
  });

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };
  const handlePenaltyChange = (index, newPenalty) => {
    const newPenalties = [...penalties];
    newPenalties[index] = newPenalty;
    setPenalties(newPenalties);
    setEditingIndex(null);
  };

  const handleReset = (e) => {
    e.preventDefault()
    console.log("hwyy");
    setStartDate('');
    setEndDate('');
  };



  const renderedTableRows = filteredData.map((data, index) => (
    <tr role="row" key={index}>
      <td>{data.number}</td>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.mobile}</td>
      <td>{data.balance}</td>
      <td>{data.date}</td>
      <td>
        {editingIndex === index ? (
          <input
            type="number"
            value={penalties[index]}
            onChange={(e) => handlePenaltyChange(index, parseInt(e.target.value))}
            onBlur={() => setEditingIndex(null)}
          />
        ) : (
          penalties[index]
        )}
      </td>
      <td>
        {editingIndex === index ? (
          <button onClick={() => handlePenaltyChange(index, penalties[index])}>Save</button>
        ) : (
          <button onClick={() => setEditingIndex(index)}>Edit</button>
        )}
      </td>
    </tr>
  ));
  return (
    <>
      <section className="content">

        <div className="container-fluid" style={{ marginTop: '-35px' }}>
          <div className="row">
            {/* Primary table start */}
            <div className="col-12 mt-5">
              <div className="card">
                <div className="card-body">
                  <form >
                    <input type="hidden" name="_token" defaultValue="ufIIKQky4pOtOxFVX1zXKHf58iF6SEHdlPsJf3tm" />
                    <div className="col-md-6 mb-6" style={{ float: 'left', marginTop: 10 }}>
                      <div className="form-group">
                        <label>Pick a start date:</label>
                        <div className="input-group date" id="datepicker" data-target-input="nearest">
                          <input type="date"
                            className="form-control t"
                            placeholder="yyyy-mm-dd"
                            name="start_date"
                            value={startDate}
                            onChange={handleStartDateChange} />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-6" style={{ float: 'left', marginTop: 10 }}>
                      <div className="form-group">
                        <label>Pick a end date:</label>
                        <div className="input-group date" id="datepicker1" data-target-input="nearest">
                          <input type="date"
                            className="form-control"
                            placeholder="yyyy-mm-dd"
                            name="end_date"
                            value={endDate}
                            onChange={handleEndDateChange} />
                        </div>
                      </div>
                    </div>
                    <div style={{ clear: 'both' }} />
                    <div className="col-md-6 mb-6" style={{ float: 'left', marginTop: 10 }}>
                      <label htmlFor="validationCustomUsername">Search  User</label>
                      <div className="input-group">
                        <input type="text" className="form-control" id="validationCustomUsername" defaultValue placeholder="Name,Username,number" aria-describedby="inputGroupPrepend" name="user" />
                      </div>
                    </div>
                    <div style={{ clear: 'both' }} />
                    <div style={{ clear: 'both' }} />
                    <br />
                    <div className="col-md-12 mb-12">
                      <center>
                        <button className="btn btn-primary" style={{}} >Search Now</button>
                        <button className='btn btn-success' type='button' style={{ marginLeft: 20, textAlign: 'center' }} onClick={handleReset}>Reset</button>
                        {/* <button onClick={handleReset}>Reset</button> */}
                      </center>
                    </div>
                    <br />
                  </form>
                  <div className="single-table">
                    <div className="table-responsive">
                      {/* fund history */}
                      <div id="table_id_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                        <div className="dt-buttons btn-group flex-wrap">

                          <button className="btn btn-secondary buttons-pdf buttons-html5" tabIndex={0} aria-controls="table_id" type="button"      ><span>PDF</span></button>
                          <button className="btn btn-secondary buttons-excel buttons-html5" tabIndex={0} aria-controls="table_id" type="button"><span>Excel</span></button>
                          <button className="btn btn-secondary buttons-csv buttons-html5" tabIndex={0} aria-controls="table_id" type="button"><span>CSV</span></button>
                          <button className="btn btn-secondary buttons-print" tabIndex={0} aria-controls="table_id" type="button"><span>Print</span></button>
                        </div>
                        <div id="table_id_filter" className="dataTables_filter">
                          <label>Search:<input type="search" className="form-control form-control-sm" placeholder aria-controls="table_id" /></label></div>
                        <table className="table text-center dataTable no-footer dtr-inline" id="table_id" role="grid" aria-describedby="table_id_info" style={{ width: 1070 }}>
                          <thead className="text-capitalize">

                            {/* <th className="sorting_asc" tabIndex={0} aria-controls="table_id" rowSpan={1} colSpan={1} style={{ width: 101 }} aria-sort="ascending" aria-label="SR. NO.: activate to sort column descending">SR. NO.</th> */}
                            <tr role="row">
                              <th className="sorting_asc" tabIndex={0} aria-controls="table_id" rowSpan={1} colSpan={1} style={{ width: 101 }} aria-sort="ascending" aria-label="SR. NO.: activate to sort column descending">Number</th>
                              <th className="sorting" tabIndex={0} aria-controls="table_id" rowSpan={1} colSpan={1} style={{ width: 76 }} aria-label="From: activate to sort column ascending">ID </th>
                              <th className="sorting" tabIndex={0} aria-controls="table_id" rowSpan={1} colSpan={1} style={{ width: 105 }} aria-label="To User: activate to sort column ascending">Name</th>
                              <th className="sorting" tabIndex={0} aria-controls="table_id" rowSpan={1} colSpan={1} style={{ width: 175 }} aria-label="To User Name: activate to sort column ascending">Mobile</th>
                              <th className="sorting" tabIndex={0} aria-controls="table_id" rowSpan={1} colSpan={1} style={{ width: 109 }} aria-label="Amount: activate to sort column ascending">Balance</th>
                              <th className="sorting" tabIndex={0} aria-controls="table_id" rowSpan={1} colSpan={1} style={{ width: 129 }} aria-label="Date: activate to sort column ascending">Date</th>
                              <th className="sorting" tabIndex={0} aria-controls="table_id" rowSpan={1} colSpan={1} style={{ width: 81 }} aria-label="Time: activate to sort column ascending">Penalty</th>
                              <th className="sorting" tabIndex={0} aria-controls="table_id" rowSpan={1} colSpan={1} style={{ width: 81 }} aria-label="Time: activate to sort column ascending">Action</th>
                            </tr>

                          </thead>
                          <tbody>
                            {renderedTableRows}
                          </tbody>
                        </table>
                        <div className="dataTables_info" id="table_id_info" role="status" aria-live="polite">
                          Showing 1 to 2 of 2 entries
                        </div>
                        <div className="dataTables_paginate paging_simple_numbers" id="table_id_paginate">
                          <ul className="pagination"><li className="paginate_button page-item previous disabled" id="table_id_previous">
                            <a href="#" aria-controls="table_id" data-dt-idx={0} tabIndex={0} className="page-link">
                              Previous
                            </a></li><li className="paginate_button page-item active">
                              <a href="#" aria-controls="table_id" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li><li className="paginate_button page-item next disabled" id="table_id_next"><a href="#" aria-controls="table_id" data-dt-idx={2} tabIndex={0} className="page-link">Next</a></li></ul></div></div>
                      <br /><br />
                      <center>
                        <div>
                        </div>
                      </center>
                      {/* fund history */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Primary table end */}
          </div>
        </div>
      </section>

    </>
  )
}

export default NewTransaction;