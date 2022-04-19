import { Link } from "react-router-dom";
import React from 'react'
import './navbar.css';

const Navbar = () => {
  return (
    <>
      <nav class="vertical-menu-wrapper sticky-top">
              <div class="vertical-menu-logo">
                  <div>Vehicle Insurance Database</div>
              </div>
              <ul class="vertical-menu">
                <Link to='/SelectTable'>
                  <li><a class="functn" href="/SelectTable">Add Data</a></li>
                </Link>
                <Link to='/SelectTable'>
                  <li><a class="functn" href="/SelectTable">Alter Data</a></li>
                </Link>
                <Link to='/SelectTable'>
                  <li><a class="functn" href="/SelectTable">Delete Data</a></li>
                </Link>
                  <hr/>
                <Link to='/ViewTable'>
                  <li><a class="functn" href="/ViewTable">View Data</a></li>
                </Link>
                  <hr/>
                  <li id="user-info" style={{marginTop: "170%"}}>Team ADVAIT<span>DBMS</span></li>
              </ul>
          </nav>
    </>
  )
}

export default Navbar;