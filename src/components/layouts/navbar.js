import { Link, Navigate , useNavigate} from "react-router-dom";
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
                <Link to='/table_select'>
                  <li><a class="functn" href="/table_select">Add Data</a></li>
                </Link>
                <Link to='/table_select'>
                  <li><a class="functn" href="/table_select">Alter Data</a></li>
                </Link>
                <Link to='/table_select'>
                  <li><a class="functn" href="/table_select">Delete Data</a></li>
                </Link>
                  <hr/>
                <Link to='/table_select'>
                  <li><a class="functn" href="/table_select">View Data</a></li>
                </Link>
                  <hr/>
                  <li id="user-info" style={{marginTop: "170%"}}>Team ADVAIT<span>DBMS</span></li>
              </ul>
          </nav>
    </>
  )
}

export default Navbar;