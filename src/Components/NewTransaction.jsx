import React from 'react'
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // Import the autotable extension
import * as XLSX from 'xlsx';
import PrintJS from 'print-js';
import FileSaver from 'file-saver';

function NewTransaction() {

  const handleExportPDF = () => {
    const doc = new jsPDF();

    // Define the table headers and data
    const headers = ['SR. NO.', 'From', 'To User', 'To User Name', 'Amount', 'Date', 'Time'];
    const data = [
      { srNo: 1, from: 'belove', toUser: 14315, toUserName: 'MANJUNATH N', amount: '$10.00', date: '2023-04-03', time: '11:15:00' },
      { srNo: 2, from: '71913', toUser: 14315, toUserName: 'MANJUNATH N', amount: '$100.00', date: '2023-04-03', time: '11:21:00' }
      // Add more data objects as needed
    ];

    // Set up autotable configuration
    const tableConfig = {
      head: [headers],
      body: data.map(row => [row.srNo, row.from, row.toUser, row.toUserName, row.amount, row.date, row.time]),
      startY: 20
    };

    // Generate the PDF table
    doc.autoTable(tableConfig);

    // Save the PDF to a Blob
    const blob = doc.output('blob');

    // Download the PDF
    FileSaver.saveAs(blob, 'transaction_history.pdf');
  };

  const handleExportExcel = () => {
    const headers = ['SR. NO.', 'From', 'To User', 'To User Name', 'Amount', 'Date', 'Time'];
    const data = [
      { srNo: 1, from: 'belove', toUser: 14315, toUserName: 'MANJUNATH N', amount: '$10.00', date: '2023-04-03', time: '11:15:00' },
      { srNo: 2, from: '71913', toUser: 14315, toUserName: 'MANJUNATH N', amount: '$100.00', date: '2023-04-03', time: '11:21:00' }
      // Add more data objects as needed
    ];

    // Create a workbook and add a worksheet
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data, { header: headers });

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Transaction History');

    // Generate a Blob from the workbook
    const blob = new Blob([XLSX.write(wb, { bookType: 'xlsx', type: 'blob' })], { 
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });

    // Download the Excel file
    FileSaver.saveAs(blob, 'transaction_history.xlsx');
  };

  const handleExportCSV = () => {
    // Logic to generate and export CSV using a custom function or library
    // Example: Convert data to CSV format and download it
    const csvData = 'column1,column2,column3\nvalue1,value2,value3';
    const blob = new Blob([csvData], { type: 'text/csv' });
    FileSaver.saveAs(blob, 'transaction_history.csv');
  };

  const handlePrint = () => {
    // Use PrintJS library to trigger printing
    PrintJS('table_id', 'html');
  };
  return (
 <>
          <section className="content">
  <div className="container-fluid" style={{marginTop: '-35px'}}>
    <div className="row">
      {/* Primary table start */}
      <div className="col-12 mt-5">
        <div className="card">
          <div className="card-body">
            <form role="form" action="https://belove.uk/admin-panel/Fund-Transfer-History-search" method="post">
              <input type="hidden" name="_token" defaultValue="ufIIKQky4pOtOxFVX1zXKHf58iF6SEHdlPsJf3tm" />
              <div className="col-md-6 mb-6" style={{float: 'left', marginTop: 10}}>
                <div className="form-group">
                  <label>Pick a start date:</label>
                  <div className="input-group date" id="datepicker" data-target-input="nearest">
                    <input type="date" className="form-control t" placeholder="yyyy-mm-dd" name="start_date" defaultValue />
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-6" style={{float: 'left', marginTop: 10}}>
                <div className="form-group">
                  <label>Pick a end date:</label>
                  <div className="input-group date" id="datepicker1" data-target-input="nearest">
                    <input type="date" className="form-control " placeholder="yyyy-mm-dd" name="end_date" defaultValue />
                  </div>
                </div>
              </div>
              <div style={{clear: 'both'}} />
              <div className="col-md-6 mb-6" style={{float: 'left', marginTop: 10}}>
                <label htmlFor="validationCustomUsername">Search  User</label>
                <div className="input-group">
                  <input type="text" className="form-control" id="validationCustomUsername" defaultValue placeholder="Name,Username,number" aria-describedby="inputGroupPrepend" name="user" />
                </div>
              </div>
              <div style={{clear: 'both'}} />
              <div style={{clear: 'both'}} />
              <br />
              <div className="col-md-12 mb-12">
                <center>
                  <button className="btn btn-primary" type="submit" style={{}}>Search Now</button>
                  <a className="btn btn-info" style={{marginLeft: 20, textAlign: 'center'}} href="https://belove.uk/admin-panel/All-Members">Reset</a>
                </center>
              </div>
              <br />
            </form>
            <div className="single-table">
              <div className="table-responsive">
                {/* fund history */}
                <div id="table_id_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer"><div className="dt-buttons btn-group flex-wrap">  
                    <button className="btn btn-secondary buttons-pdf buttons-html5" tabIndex={0} aria-controls="table_id" type="button" onClick={handleExportPDF} ><span>PDF</span></button> 
                    <button className="btn btn-secondary buttons-excel buttons-html5" tabIndex={0} aria-controls="table_id" type="button"onClick={handleExportExcel}><span>Excel</span></button> 
                    <button className="btn btn-secondary buttons-csv buttons-html5" tabIndex={0} aria-controls="table_id" type="button" onClick={handleExportCSV}><span>CSV</span></button>
                     <button className="btn btn-secondary buttons-print" tabIndex={0} aria-controls="table_id" type="button" onClick={handlePrint} ><span>Print</span></button>
                      </div>
                      <div id="table_id_filter" className="dataTables_filter">
                        <label>Search:<input type="search" className="form-control form-control-sm" placeholder aria-controls="table_id" /></label>
                        </div>
                        <table className="table text-center dataTable no-footer dtr-inline" id="table_id" role="grid" aria-describedby="table_id_info" style={{width: 1070}}>
                    <thead className="text-capitalize">
                      <tr role="row">
                        <th className="sorting_asc" tabIndex={0} aria-controls="table_id" rowSpan={1} colSpan={1} style={{width: 101}} aria-sort="ascending" aria-label="SR. NO.: activate to sort column descending">SR. NO.</th>
                        <th className="sorting" tabIndex={0} aria-controls="table_id" rowSpan={1} colSpan={1} style={{width: 76}} aria-label="From: activate to sort column ascending">From</th>
                        <th className="sorting" tabIndex={0} aria-controls="table_id" rowSpan={1} colSpan={1} style={{width: 105}} aria-label="To User: activate to sort column ascending">To User</th>
                        <th className="sorting" tabIndex={0} aria-controls="table_id" rowSpan={1} colSpan={1} style={{width: 175}} aria-label="To User Name: activate to sort column ascending">To User Name</th>
                        <th className="sorting" tabIndex={0} aria-controls="table_id" rowSpan={1} colSpan={1} style={{width: 109}} aria-label="Amount: activate to sort column ascending">Amount</th>
                        <th className="sorting" tabIndex={0} aria-controls="table_id" rowSpan={1} colSpan={1} style={{width: 129}} aria-label="Date: activate to sort column ascending">Date</th>
                        <th className="sorting" tabIndex={0} aria-controls="table_id" rowSpan={1} colSpan={1} style={{width: 81}} aria-label="Time: activate to sort column ascending">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                      <tr role="row" className="odd">
                        <td tabIndex={0} className="sorting_1">1</td>
                        <td>belove</td>
                        <td>14315</td>
                        <td>MANJUNATH N</td>
                        <td>$10.00</td>
                        {/* <td>$0.00</td> */}
                        <td> 2023-04-03</td>
                        <td> 11:15:00</td>
                      </tr><tr role="row" className="even">
                        <td tabIndex={0} className="sorting_1">2</td>
                        <td>71913</td>
                        <td>14315</td>
                        <td>MANJUNATH N</td>
                        <td>$100.00</td>
                        {/* <td>$0.00</td> */}
                        <td> 2023-04-03</td>
                        <td> 11:21:00</td>
                      </tr></tbody>
                  </table><div className="dataTables_info" id="table_id_info" role="status" aria-live="polite">Showing 1 to 2 of 2 entries</div><div className="dataTables_paginate paging_simple_numbers" id="table_id_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="table_id_previous"><a href="#" aria-controls="table_id" data-dt-idx={0} tabIndex={0} className="page-link">Previous</a></li><li className="paginate_button page-item active"><a href="#" aria-controls="table_id" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li><li className="paginate_button page-item next disabled" id="table_id_next"><a href="#" aria-controls="table_id" data-dt-idx={2} tabIndex={0} className="page-link">Next</a></li></ul></div></div>
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