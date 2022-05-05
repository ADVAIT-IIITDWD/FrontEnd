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
                <Link to='/runquery'>
                  <li><a class="functn" href="/table_select">Run Queries</a></li>
                </Link>
                  <hr/>
                  <li id="user-info" style={{marginTop:"378%"}}>Team ADVAIT<span>DBMS</span></li>
              </ul>
          </nav>
    </>
  )
}

export default Navbar;
