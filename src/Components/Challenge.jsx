
import { Box, Input, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import Header from './Header';
import "./Challenge.css";

function Challenge() {
  const initialGames = [
    {
      id: 1,
      creater: 'John Doe',
      accepter: 'Jane Smith',
      amount: 100,
      status: 'Completed',
      gameType: 'Chess',
      date: '2023-08-04',
    },
    {
      id: 2,
      creater: 'Alice Johnson',
      accepter: 'Bob Williams',
      amount: 50,
      status: 'Pending',
      gameType: 'Checkers',
      date: '2023-08-05',
    },
    {
      id: 3,
      creater: 'Mike Brown',
      accepter: 'Laura Lee',
      amount: 200,
      status: 'Running',
      gameType: 'Tic-Tac-Toe',
      date: '2023-08-06',
    },
    {
      id: 4,
      creater: 'Sarah Davis',
      accepter: 'Kevin Martinez',
      amount: 75,
      status: 'Completed',
      gameType: 'Uno',
      date: '2023-08-07',
    },
    {
      id: 5,
      creater: 'Chris Jackson',
      accepter: 'Emma Clark',
      amount: 30,
      status: 'Cancelled',
      gameType: 'Go Fish',
      date: '2023-08-08',
    },
    // Add more game objects here
  ];


  const [games, setGames] = useState(initialGames);
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [statusFilter, setStatusFilter] = useState('All'); // 'All', 'Pending', 'Completed', 'In Progress', 'Cancelled'

  // Filter the games based on the search term, date range, and status
  const filteredGames = games.filter((game) => {
    const isMatchingCreator = game.creater.toLowerCase().includes(searchTerm.toLowerCase());
    const isMatchingDate = (startDate === '' || game.date >= startDate) && (endDate === '' || game.date <= endDate);
    const isMatchingStatus = statusFilter === 'All' || game.status === statusFilter;
    return isMatchingCreator && isMatchingDate && isMatchingStatus;
  });

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const handleResetFilter = () => {
    setSearchTerm('');
    setStartDate('');
    setEndDate('');
    setStatusFilter('All');
  };

  return (
    <>
      <Box>
        <div className="container mt-4">
          <div sx={{ }} className="table-header">
            <h1></h1>
            <div className="table-search">
              <input
                type="text"
                className="form-control"
                placeholder="Search by Creator"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>

            <div className="mb-3">
              <label>Start Date:</label>
              <input
                type="date"
                className="form-control"
                value={startDate}
                onChange={handleStartDateChange}
              />
            </div>
            <div className="mb-3">
              <label>End Date:</label>
              <input
                type="date"
                className="form-control"
                value={endDate}
                onChange={handleEndDateChange}
              />
            </div>
            <div className="mb-3">
              <Select sx={{ width: "100px", border: "1px solid white", height: "3rem", color: 'white', outline: "none" }}
                value={statusFilter}
                onChange={handleStatusChange}
              >

                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
                <MenuItem value="Running">Running</MenuItem>
                <MenuItem value="Cancelled">Cancelled</MenuItem>
              </Select>
            </div>
          </div>
          <div className="game-table-container">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Creater</th>
                  <th>Accepter</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Game Type</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredGames.map((game) => (
                  <tr key={game.id}>
                    <td>{game.id}</td>
                    <td>{game.creater}</td>
                    <td>{game.accepter}</td>
                    <td>{game.amount}</td>
                    <td>{game.status}</td>
                    <td>{game.gameType}</td>
                    <td>{game.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="reset-button-container">
              <button className="btn btn-secondary" onClick={handleResetFilter}>Reset Filters <span><RotateLeftIcon /></span></button>
            </div>
          </div>
        </div>
      </Box>
    </>
  )
}

export default Challenge;


