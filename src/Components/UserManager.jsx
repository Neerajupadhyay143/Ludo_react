import React from 'react';
import "./UserManager.css";
import { Avatar, Box, Button, Card, Input, Select, TablePagination } from '@mui/material';
import axios from 'axios';
// import { Height } from '@mui/icons-material';

function UserManager() {

  const [searchQuery, setSearchQuery] = React.useState('');



  const data = [
    {
      number: 1,
      name: 'John Doe',
      mobile: '123-456-7890',
      balance: 1000,
      missMatch: false,
      gameHold: false,
      referBy: 'Jane Smith',
      kyc: true,
      username: 'johndoe123',
      password: '******',
    },
    {
      number: 2,
      name: 'Alice Johnson',
      mobile: '987-654-3210',
      balance: 2500,
      missMatch: true,
      gameHold: false,
      referBy: 'Bob Williams',
      kyc: true,
      username: 'alicej',
      password: '******',
    },
    // Add more users here...
    {
      number: 11,
      name: 'Liam Wilson',
      mobile: '777-555-1111',
      balance: 4000,
      missMatch: true,
      gameHold: false,
      referBy: 'Emma Davis',
      kyc: true,
      username: 'liamw',
      password: '******',
    },
    {
      number: 12,
      name: 'Ava Thompson',
      mobile: '111-222-3333',
      balance: 800,
      missMatch: false,
      gameHold: true,
      referBy: 'William Anderson',
      kyc: false,
      username: 'avat',
      password: '******',
    },
    {
      number: 13,
      name: 'Noah Roberts',
      mobile: '444-333-2222',
      balance: 6000,
      missMatch: true,
      gameHold: false,
      referBy: 'Sophia Turner',
      kyc: true,
      username: 'noahr',
      password: '******',
    },
    {
      number: 14,
      name: 'Olivia Davis',
      mobile: '666-555-4444',
      balance: 1500,
      missMatch: false,
      gameHold: true,
      referBy: 'Alexander White',
      kyc: true,
      username: 'oliviad',
      password: '******',
    },
    {
      number: 15,
      name: 'Ethan Murphy',
      mobile: '222-444-6666',
      balance: 2000,
      missMatch: true,
      gameHold: false,
      referBy: 'Ella Green',
      kyc: false,
      username: 'ethanm',
      password: '******',
    },
    {
      number: 16,
      name: 'Emma Wilson',
      mobile: '888-777-6666',
      balance: 3500,
      missMatch: false,
      gameHold: false,
      referBy: 'Daniel Clark',
      kyc: true,
      username: 'emmaw',
      password: '******',
    },
    {
      number: 17,
      name: 'Liam Miller',
      mobile: '555-777-9999',
      balance: 900,
      missMatch: true,
      gameHold: false,
      referBy: 'Grace Wright',
      kyc: true,
      username: 'liamm',
      password: '******',
    },
    {
      number: 18,
      name: 'Ava Johnson',
      mobile: '777-888-1111',
      balance: 1200,
      missMatch: false,
      gameHold: true,
      referBy: 'Michael Smith',
      kyc: true,
      username: 'avaj',
      password: '******',
    },
    {
      number: 19,
      name: 'Oliver Davis',
      mobile: '222-333-4444',
      balance: 4200,
      missMatch: true,
      gameHold: false,
      referBy: 'Emily Brown',
      kyc: false,
      username: 'oliverd',
      password: '******',
    },
    {
      number: 20,
      name: 'Sophia Johnson',
      mobile: '999-888-7777',
      balance: 7000,
      missMatch: false,
      gameHold: false,
      referBy: 'William Anderson',
      kyc: true,
      username: 'sophiaj',
      password: '******',
    },
    {
      number: 21,
      name: 'Mia Brown',
      mobile: '777-888-2222',
      balance: 3000,
      missMatch: true,
      gameHold: false,
      referBy: 'James Johnson',
      kyc: true,
      username: 'miab',
      password: '******',
    },
    {
      number: 22,
      name: 'Liam Smith',
      mobile: '999-777-3333',
      balance: 5000,
      missMatch: false,
      gameHold: true,
      referBy: 'Emma Davis',
      kyc: false,
      username: 'liams',
      password: '******',
    },
    // Add more users here...

    {
      number: 45,
      name: 'Sophie Parker',
      mobile: '666-444-7777',
      balance: 900,
      missMatch: true,
      gameHold: false,
      referBy: 'Lucas Wilson',
      kyc: true,
      username: 'sophiep',
      password: '******',
    },
    {
      number: 46,
      name: 'Oliver Davis',
      mobile: '111-555-8888',
      balance: 1000,
      missMatch: false,
      gameHold: false,
      referBy: 'Ava Thompson',
      kyc: true,
      username: 'oliverd',
      password: '******',
    },
    {
      number: 47,
      name: 'Emily Wilson',
      mobile: '222-333-4444',
      balance: 7500,
      missMatch: true,
      gameHold: true,
      referBy: 'James Johnson',
      kyc: true,
      username: 'emilyw',
      password: '******',
    },
    {
      number: 48,
      name: 'Noah Miller',
      mobile: '555-666-7777',
      balance: 600,
      missMatch: false,
      gameHold: false,
      referBy: 'Olivia Davis',
      kyc: true,
      username: 'noahm',
      password: '******',
    },
    {
      number: 49,
      name: 'Ella Williams',
      mobile: '444-333-2222',
      balance: 3000,
      missMatch: true,
      gameHold: false,
      referBy: 'Alexander White',
      kyc: false,
      username: 'ellaw',
      password: '******',
    },
    {
      number: 50,
      name: 'Ethan Taylor',
      mobile: '777-888-9999',
      balance: 4000,
      missMatch: false,
      gameHold: false,
      referBy: 'Isabella Harris',
      kyc: true,
      username: 'ethant',
      password: '******',
    },
  ];
  const [selectedField, setSelectedField] = React.useState('number');

  const filteredData = data.filter((user) =>
    user[selectedField].toString().toLowerCase().includes(searchQuery.toLowerCase())
  );



  const blockUser = (userNumber) => {
    // Find the user in the data based on the userNumber
    const userToUpdate = data.find((user) => user.number === userNumber);

    if (userToUpdate) {
      // Update the 'blocked' property of the user
      userToUpdate.blocked = true;

      // Send the updated user data to the backend
      console.log(userToUpdate)
      axios.put('/api/users', userToUpdate)
        .then((response) => {
          // Handle successful response if needed
        })
        .catch((error) => {
          // Handle error if needed
        });
    }
  };




  return (


    <>
      <div className='container'>
        <div className='container1'>
          <select className='select' style={{ marginTop: "10%" }} value={selectedField} onChange={(e) => setSelectedField(e.target.value)}>
            <option value="number">Number</option>
            <option value="name">Name</option>
            <option value="mobile">Mobile</option>
            <option value="balance">Balance</option>
            <option value="missMatch">Miss Match</option>
            <option value="gameHold">Game Hold</option>
            <option value="referBy">Refer by</option>
            <option value="kyc">KYC</option>
          </select>
          < input className='input'
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search by ${selectedField}`}
          /> </div>

        <Box sx={{
          marginTop: "5%", width: "100%"
        }}>

          <div className="container-mt-4">
            < table className='User-table'>
              <thead>
                <tr  className='table-row' >
                  <th >Number</th>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th>Balance</th>
                  <th>Miss Match</th>
                  <th>Game Hold</th>
                  <th>Refer by</th>
                  <th>KYC</th>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody >

                {filteredData.map((user) => (
                  <tr  key={user.number}>

                    <td className='number'>{user.number}</td>
                    <td className='name'>{user.name}</td>
                    <td className='mobile'>{user.mobile}</td>
                    <td className='balance'>{user.balance}</td>
                    <td className='missMatch'>{user.missMatch ? 'Yes' : 'No'}</td>
                    <td className='gamehold'>{user.gameHold ? 'Yes' : 'No'}</td>
                    <td className='referby'>{user.referBy}</td>
                    <td>
                      <div className="kyc">{user.kyc ? 'Verified' : 'Unverified'}</div>
                    </td>
                    <td className='username'>{user.username}</td>
                    <td className='password'>{user.password}</td>
                    <td>
                      {user.blocked ? (
                        <div className="static-button">Blocked</div>
                      ) : (
                        <button onClick={() => blockUser(user.number)}>Block</button>
                      )}
                    </td>
                  </tr>
                ))}


              </tbody>
            </table>
          </div>

        </Box >
      </div >

     
    </>
  )
}

export default UserManager;