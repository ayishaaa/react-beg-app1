import React from 'react';
import logo from './assets/img3.png';

import './App.css';


import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>

      <header className="App-header">

      <img src={logo} className="App-logo" alt="logo" /><br/>
      <p1>Fast Food</p1>
      <nav className='linkstyle'>
      <ul >
          <Link style={{ marginLeft: "850px",paddingTop: "500px" }} to="/">Home</Link>
      
          <Link style={{ marginLeft: "25px"}} to="/about">About us</Link>

          <Link style={{ marginLeft: "25px"}} to="/services">Services</Link>
        
          <Link style={{ marginLeft: "25px"}} to="/contact">Contact us</Link>
        
      </ul>
      </nav>


      </header>
        
      
        
      
      <Outlet />
        
  
      
      <footer>
        
        <div class="row row-cols-4">
          <div class="col-4" style={{"margin-top": "20px", "text-align": "justify", "color": "#acc4d0","margin-left": "50px"}}>
          <img src={logo} className="App-logo" alt="logo" />
            <p1 style={{"color":"rgb(178, 241, 255)"}}>Fast Food</p1>
            <p style={{"color":"rgb(178, 241, 255)"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, natus. Unde neque accusamus fuga, consectetur ad veniam mollitia asperiores voluptates dolore quo corporis molestiae modi sint obcaecati aliquid repellat illo.</p>
          </div>
          <div class="col-2" style={{"padding-top": "30px", "text-align": "justify","margin-left": "70px"}}>
            <h6 style={{"font-family": "serif", "color":"rgb(178, 241, 255)", "font-weight": "bold"}}>QUICK MENU</h6>
            <ul style={{"color": "rgb(178, 241, 255)", "line-height": "35px"}}>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Contact us</a>
              </li>
            </ul>
          </div>
          <div class="col-2" style={{"padding-top": "30px", "text-align": "justify"}}>
            <h6 style={{"font-family": "serif", "color":"rgb(178, 241, 255)", "font-weight": "bold"}}>QUICK MENU</h6>
            <ul style={{"color": "rgb(178, 241, 255)", "line-height": "35px"}}>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Contact us</a>
              </li>
            </ul>
          </div>
          <div class="col-2" style={{"padding-top": "30px", "text-align": "justify","margin-left": "70px"}}>
            <h6 style={{"font-family": "serif", "color":"rgb(178, 241, 255)", "font-weight": "bold"}}>QUICK MENU</h6>
            <ul style={{"color": "rgb(178, 241, 255)", "line-height": "35px"}}>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Contact us</a>
              </li>
            </ul>
          </div>
        </div>
        


      </footer>
    </>
  )
};

export default Layout;
