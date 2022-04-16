import React from 'react'
import './QueryCard.css';

const QueryCard = (props) => {
  return (
    <>
        <div class="pricing-column col-lg-4 col-md-6">
            <div class="card text-center ">
                <div class="card-header">
                    <h2>Query {props.num}</h2>
                </div>
                <div class="card-body">
                    <h2 class="price-text">CSP</h2>
                    <p>Retrieve Customer and Vehicle details who has been involved in an incident and
                        claim status
                        is pending-Customer, vehicle, claim status, incident</p>
                    <button type="button"
                        class="d-grid gap-2 col-12 mx-auto btn btn-block btn-outline-success btn-lg ">Run</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default QueryCard;