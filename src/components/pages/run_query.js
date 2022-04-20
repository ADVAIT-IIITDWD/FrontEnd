import React, { useState } from "react";
// import Employee from '../api/testAPI'
import Loading from "../layouts/loding";
import "./run_query.css";
import axios from "axios";

const RunQuery = () => {
  const [query, setquery] = useState("");
  const [attributes, setattributes] = useState([]);
  const [table_data, settable_data] = useState([]);
  const [tableget, settableget] = useState(false);
  const [loading, setloading] = useState(false);
  //   let tableget = false;
  const handelQuery = async(e) => {
    try {
      setquery(e.target.value);
    } catch (error) {
      console.log(error);
    }
  };


  const postQuery = async () => {
    try {
      setloading(true);
      const res = await axios.post("http://localhost:5000/query_to_run", {
        query,
      });
      setTimeout(()=>{
        setloading(false);
        if (res) {
          if (res.data === "error") {
            settableget(false);
            window.alert("Error in query");
          } else {
            settableget(true);
            // console.log(tableget);
            settable_data(res.data);
            // console.log(table_data);
            setattributes(Object.keys(res.data[0]));
            // console.log(attributes);
          }
        } else {
          settableget(false);
          console.log("Error");
        }
      } ,1500)
    } catch (error) {
      settableget(false);
      console.log(error);
    }
  };

  return (
    <>
      <section className="pannel">
        <h2>
          <div className="heading-run">Run your Query Here</div>
        </h2>
        <div className="query-box">
          <textarea
            className="input-box"
            type="text"
            name="query"
            id="query_input"
            minLength="1"
            placeholder="Enter the SQL query"
            onChange={handelQuery}/>
          <button
            type="button"
            class="query-btn btn-outline-success"
            onClick={postQuery}>
            Run
          </button>
        </div>
      </section>
      <section className="pannel">
        <h2>
          <div className="heading-run">Result</div>
        </h2>
      {loading? (
    <Loading/>
    ) :(
        <div className="table-box">
          {tableget ? (
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  {attributes.map((attr, idx) => {
                    return (
                      <th scope="col" key={idx}>
                        {attr}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {table_data.map((i, idx) => {
                  return (
                    <tr key={idx}>
                      {attributes.map((val, idxx) => {
                        let value = Object.values(table_data[idx]);
                        return <td>{value[idxx]}</td>;
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <h1>
              <div className="else-condition">Output</div>
            </h1>
          )}
        </div>
    )}
      </section>
    </>
  );
};

export default RunQuery;
