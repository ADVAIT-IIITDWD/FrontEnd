import React,{ useState } from 'react';
import './run_query.css';
import axios from "axios";


const RunQuery = () => {
    const [query, setquery] = useState("");
    const handelQuery = (e) =>{
        let getQuery = e.target.value;
        setquery(getQuery);
        // console.log(query);
    }
    const postQuery = async() =>{
    try {
        // console.log(query);
            const res = await axios.post("http://localhost:5000/query_to_run",{
                query
            });
        if(res){
            console.log(res.data);
            // console.log("Done");
        }else{
            console.log("Error");
        }

    } catch (error) {
        console.log(error);
    }
    }
  return (
    <>
    <section>
        <h2><div className='heading-run'>Run your Query Here</div></h2>
        <div className='query-box'>
        <textarea className='input-box' type="text" name="query" id='query_input' minLength='1' placeholder='Enter the SQL query' onChange={handelQuery}/>
        <button type="button" class="btn btn-outline-success" onClick={postQuery} >Run</button>
        </div>
    </section>
    </>
  )
}

export default RunQuery;