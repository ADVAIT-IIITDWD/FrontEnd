import React from 'react';
import Navbar from './../layouts/navbar';
import QueryCard from './../layouts/QueryCard';
import Queries from '../api/Queries';
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
                            {
                                Queries.map((ele,idx) =>{
                                    return(
                                        <QueryCard num={ele.id} querydis={ele.querydis} key={idx} query={ele.query} />
                                        )
                                })
                            }
                    </div>


                </section>


            </div>
        </div>
    </div>
    

    </>
  )
}

export default home;
