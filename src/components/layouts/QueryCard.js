import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./QueryCard.css";

const QueryCard = (props) => {
  const navigate = useNavigate();

  const handelonClick = (id, query) => {
    navigate("/runquery", { state: { id: id, query: query } });
  };
  return (
    <>
      <div class="pricing-column col-lg-4 col-md-6">
        <div class="card text-center ">
          <div class="card-header">
            <h2>Query {props.num}</h2>
          </div>
          <div class="card-body">
            <h2 class="price-text">CSP</h2>
            <p>{props.querydis}</p>
            <button
              type="button"
              class="d-grid gap-2 col-12 mx-auto btn btn-block btn-outline-success btn-lg "
              onClick={() =>{handelonClick(props.id, props.query)}}
            >
              Run
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QueryCard;
