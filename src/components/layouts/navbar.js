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
                  <li><a class="functn" href="table.html">Add Data</a></li>
                  <li><a class="functn" href="table.html">Alter Data</a></li>
                  <li><a class="functn" href="table.html">Delete Data</a></li>
                  <hr/>
                  <li><a class="functn" href="table.html">View Data</a></li>
                  <hr/>
                  <li id="user-info" style={{marginTop: "170%"}}>Team ADVAIT<span>DBMS</span></li>
              </ul>
          </nav>
    </>
  )
}

export default Navbar;