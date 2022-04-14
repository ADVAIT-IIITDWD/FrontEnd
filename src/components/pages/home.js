import React from 'react';
import Navbar from './../layouts/navbar';
import Query_card from './../layouts/query_card';
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
                        <Query_card />
                        <Query_card />
                        <Query_card />
                        <Query_card />
                        <Query_card />
                        <Query_card />
                    </div>


                </section>


            </div>
        </div>
    </div>
    

    </>
  )
}

export default home;
