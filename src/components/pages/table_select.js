import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import tables from '../api/tables';
import './table.css'

const Table_select = () => {
    const [search, setsearch] = useState("");
        // console.log(search);
        const navigate = useNavigate();

    const handelClick = () =>{
        const temp = `/form?app=${search}`;
        navigate(temp);
    }
  return (
    <>
        <h2 className='heading'>Select the Table</h2>

        <form action="">
        <ul class="table-list ">
        {tables.map((ele,idx) =>{
            return(
            <li key={idx}>
                <input type="radio" id={ele.id} name="app" value={ele.id} onChange={(e)=> {
                    setsearch(e.target.value) ;
                    
                }}/>
                <label class = "label-class" for={ele.id}>{ele.id}</label><br/>

            </li>)
        })}
        </ul>
        <input class="btn" type="submit" value="Submit" onClick={handelClick}/>

    </form>
    </>
  )
}

export default Table_select;