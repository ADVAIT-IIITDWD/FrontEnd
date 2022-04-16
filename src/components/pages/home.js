import React from 'react';
import Navbar from './../layouts/navbar';
import QueryCard from './../layouts/QueryCard';
import './home.css';

const home = () => {
  return (
    <>
        <div class="d-flex">
            <Navbar />
        <div class="content-wrapper">
            <div class="content">
                <h1 class="section-heading">Queries</h1>
                <section class="white-section" id="pricing">

                    <div class="row">
                        <QueryCard num="1"/>
                        <QueryCard num="2"/>
                        <QueryCard num="3"/>
                        <QueryCard num="4"/>
                        <QueryCard num="5"/>
                        <QueryCard num="6"/>
                    </div>


                </section>


            </div>
        </div>
    </div>
    

    </>
  )
}

export default home;
