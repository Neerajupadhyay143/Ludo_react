import React, { useEffect, useState } from 'react';
import AppBlockingRoundedIcon from '@mui/icons-material/AppBlockingRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import PublicIcon from '@mui/icons-material/Public';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CancelIcon from '@mui/icons-material/Cancel';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';
import "./Dashboard.css";
// import 'bootstrap/dist/css/bootstrap.min.css';


import { Box } from '@mui/material';



function Dashboard() {
  const [totalUsers, setTotalUsers] = useState(15000);
  const [todayUser, setTodayUser] = useState(150);
  const [activeUsers, setActiveUsers] = useState(150);
  const [blockUsers, setBlockUsers] = useState(150);
  const [totalUsersAvarage, setTotalUsersAvarage] = useState(150);
  const [todayUserAvarage, setTodayUserAvarage] = useState(150);
  const [activeUsersAvarage, setActiveUsersAvarage] = useState(150);
  const [blockUsersAvarage, setBlockUsersAvarage] = useState(150);
  const [count, setCount] = useState(0);

  const increment = () => {
   
  }

  // const targetValue = increment; // Target value for the counter
  // const step = 500; // Increment step for the counter
  // const delay = 1000; // Interval time in milliseconds




  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCount((prevCount) => {
  //       const newCount = prevCount + step;
  //       return newCount >= targetValue ? targetValue : newCount;
  //     });
  //   }, delay);

  //   return () => clearInterval(timer);
  // }, [targetValue, step, delay]);

  return (
    <>
      {/* <Header /> */}
      <Box sx={{ display: 'flex', flexDirection: "column" }}>

        <section className='section'>
          <div className="container-heading">
            <h1>User Overview</h1>
          </div>


          <div className="main-small-box">


            <div className="small-box bg-info" id='box-1'>
              <p>Total Users</p>
              <div className="inner">
                <h3> {count} </h3>

              </div>
              <div>
                <h2>{totalUsersAvarage}% than last week</h2>
              </div>
              <div className="icon">
                < PublicIcon sx={{ color: "#6e6efe" }} className="fas fa-shopping-cart" />
              </div>
              <div>

              </div>
            </div>
            <div className="small-box bg-info">
              <p>Today Users</p>
              <div className="inner">
                <h3>{todayUser}</h3>

              </div>
              <h2>{todayUserAvarage}% than last week</h2>
              <div className="icon">
                <AccountCircleRoundedIcon sx={{ color: "#5ea552" }} className="fas fa-shopping-cart" />
              </div>

            </div>
            <div className="small-box bg-info" id='box-3'>
              <p>Block Users</p>
              <div className="inner">
                <h3>{blockUsers}</h3>

              </div>
              <h2>{blockUsersAvarage}% than last week</h2>
              <div className="icon">
                <  AppBlockingRoundedIcon sx={{ color: "#ff4444" }} className="fas fa-shopping-cart" />
              </div>

            </div>
            <div className="small-box bg-info">
              <p>Active Users</p>
              <div className="inner">
                <h3>{activeUsers}</h3>

              </div>
              <h2>{activeUsersAvarage}% than last week</h2>
              <div className="icon">
                < RecordVoiceOverIcon sx={{
                  color: "#14eb62", animation: 'blinkingEffect 1s infinite',
                  '@keyframes blinkingEffect': {
                    '0%': { opacity: 1 }, // Fully visible
                    '50%': { opacity: 0 }, // Fully transparent
                    '100%': { opacity: 1 }, // Fully visible again
                  },

                }} className="fas fa-shopping-cart" />
              </div>

            </div>
          </div>
        </section>
        <section className='section'>

          <div className="container-heading">
            <h1>Challenge OverView</h1>
          </div>



          <div className="main-small-box">


            <div className="small-box bg-info">
              <p>Complete Challenge </p>
              <div className="inner">
                <h3>{totalUsers}</h3>

              </div>
              <div>
                <h2>{totalUsersAvarage}% than last week</h2>
              </div>
              <div className="icon">
                < HowToRegIcon className="fas fa-shopping-cart" />
              </div>
              <div>

              </div>
            </div>
            <div className="small-box bg-info">
              <p>Running Challenge</p>
              <div className="inner">
                <h3>{todayUser}</h3>

              </div>
              <h2>{todayUserAvarage}% than last week</h2>
              <div className="icon">
                < RunningWithErrorsIcon className="fas fa-shopping-cart" />
              </div>

            </div>
            <div className="small-box bg-info">
              <p> Ongoing Challenge</p>
              <div className="inner">
                <h3>{blockUsers}</h3>

              </div>
              <h2>{blockUsersAvarage}% than last week</h2>
              <div className="icon">
                <i className="fas fa-shopping-cart" />
              </div>

            </div>
            <div className="small-box bg-info">
              <p>Cancelled Challenge</p>
              <div className="inner">
                <h3>{activeUsers}</h3>

              </div>
              <h2>{activeUsersAvarage}% than last week</h2>
              <div className="icon">
                < CancelIcon sx={{ color: "#ff4444" }} className="fas fa-shopping-cart" />
              </div>

            </div>
          </div>
        </section>
        <section className='section'>
          <div className="container-heading">
            <h1>Deposit Overview</h1>
          </div>


          <div className="main-small-box">


            <div className="small-box bg-info">
              <p>Total Deposit</p>
              <div className="inner">
                <h3>{totalUsers}</h3>

              </div>
              <div>
                <h2>{totalUsersAvarage}% than last week</h2>
              </div>
              <div className="icon">
                < CurrencyRupeeIcon className="fas fa-shopping-cart" />
              </div>
              <div>

              </div>
            </div>
            <div className="small-box bg-info">
              <p>Today Deposit</p>
              <div className="inner">
                <h3>{todayUser}</h3>

              </div>
              <h2>{todayUserAvarage}% than last week</h2>
              <div className="icon">
                <i className="fas fa-shopping-cart" />
              </div>

            </div>

            <div className="small-box bg-range">
              <p>Range</p>
              <div className="inner">
                <h3>{blockUsers}</h3>

              </div>
              <h2>{blockUsersAvarage}% than last week</h2>
              <div className="icon">
                <i className="fas fa-shopping-cart" />
              </div>

            </div>



          </div>
        </section>
        <section className='section'>
          <div className="container-heading">
            <h1> Withdraw OverView</h1>
          </div>


          <div className="main-small-box">


            <div className="small-box bg-info">
              <p>Total Withdraw</p>
              <div className="inner">
                <h3>{totalUsers}</h3>

              </div>
              <div>
                <h2>{totalUsersAvarage}% than last week</h2>
              </div>
              <div className="icon">
                < PriceCheckIcon className="fas fa-shopping-cart" />
              </div>
              <div>

              </div>
            </div>
            <div className="small-box bg-info">
              <p>Today Withdraw</p>
              <div className="inner">
                <h3>{todayUser}</h3>

              </div>
              <h2>{todayUserAvarage}% than last week</h2>
              <div className="icon">
                <i class="fas fa-shopping-cart" />
              </div>

            </div>
            <div className="small-box bg-range">
              <p>Withdraw Range</p>
              <div className="inner">
                <h3>{blockUsers}</h3>

              </div>
              <h2>{blockUsersAvarage}% than last week</h2>
              <div className="icon">
                <i className="fas fa-shopping-cart" />
              </div>

            </div>

          </div>
        </section>
        <section className='section'>
          <div className="container-heading">
            <h1> Commission OverView</h1>
          </div>


          <div className="main-small-box">


            <div className="small-box bg-info">
              <p>Total Admin Commission </p>
              <div className="inner">
                <h3>{totalUsers}</h3>

              </div>
              <div>
                <h2>{totalUsersAvarage}% than last week</h2>
              </div>
              <div className="icon">
                <i className="fas fa-shopping-cart" />
              </div>
              <div>

              </div>
            </div>
            <div className="small-box bg-info">
              <p>  Today Admin Commission</p>
              <div className="inner">
                <h3>{todayUser}</h3>

              </div>
              <h2>{todayUserAvarage}% than last week</h2>
              <div className="icon">
                <i className="fas fa-shopping-cart" />
              </div>

            </div>
            <div className="small-box bg-range">
              <p>Adimin Commission Range</p>
              <div className="inner">
                <h3>{blockUsers}</h3>

              </div>
              <h2>{blockUsersAvarage}% than last week</h2>
              <div className="icon">
                <i className="fas fa-shopping-cart" />
              </div>

            </div>

          </div>
        </section>

      </Box>
    </>
  )
}

export default Dashboard;