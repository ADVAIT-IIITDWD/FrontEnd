import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
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

        <li>
                <input type="radio" id="customer" name="app" value="Customer" onChange={(e)=> {
                    setsearch(e.target.value) ;
                    
                }}/>
                <label class = "label-class" for="customer">Customer</label><br/>

            </li>
            <li>
                <input type="radio" id="app" name="app" value="Application" onChange={(e)=> {
                    setsearch(e.target.value) ;
                    
                }}/>
                <label class = "label-class" for="app">Application</label><br/>
    
            </li>
            <li>
                <input type="radio" id="quote" name="app" value="Quote" onChange={(e)=> {
                    setsearch(e.target.value) ;
                   
                }}/>
                <label class = "label-class" for="quote">Quote</label><br/>
    
            </li>
            <li>
                <input type="radio" id="policy" name="app" value="Insurance Policy" onChange={(e)=> {
                    setsearch(e.target.value) ;
                    
                }}/>
                <label class = "label-class" for="policy" >Insurance Policy</label><br/>
    
            </li>
            <li>
                <input type="radio" id="payment" name="app" value="Premium Payment" onChange={(e)=> {
                    setsearch(e.target.value) ;
                    
                }}/>
                <label class = "label-class" for="payment">Premium Payment</label><br/>
    
            </li>
            <li>
                <input type="radio" id="vehicle" name="app" value="Vehicle" onChange={(e)=> {
                    setsearch(e.target.value) ;
                    
                }}/>
                <label class = "label-class" for="vehicle">Vehicle</label><br/>
    
            </li>
            <li>
                <input type="radio" id="claim" name="app" value="Claim" onChange={(e)=> {
                    setsearch(e.target.value) ;
                    
                }}/>
                <label class = "label-class" for="claim">Claim</label><br/>

            </li>
            <li>
                <input type="radio" id="settlement" name="app" value="Claim Settlement" onChange={(e)=> {
                    setsearch(e.target.value) ;
                    
                }}/>
                <label class = "label-class" for="settlement">Claim Settlement</label><br/>

            </li>
            <li>
                <input type="radio" id="staff" name="app" value="Staff" onChange={(e)=> {
                    setsearch(e.target.value) ;
                    
                }}/>
                <label class = "label-class" for="staff">Staff</label><br/>
    
            </li>
            <li>
                <input type="radio" id="dept" name="app" value="Department" onChange={(e)=> {
                    setsearch(e.target.value) ;
                    
                }}/>
                <label class = "label-class" for="dept">Department</label><br/>
    
            </li>
            <li>
                <input type="radio" id="office" name="app" value="Office" onChange={(e)=> {
                    setsearch(e.target.value) ;
                    
                }}/>
                <label class = "label-class" for="office">Office</label><br/>
    
            </li>
            <li>
                <input type="radio" id="member" name="app" value="Membership" onChange={(e)=> {
                    setsearch(e.target.value) ;
                    
                }}/>
                <label class = "label-class" for="member">Membership</label><br/>
    
            </li>
            <li>
                <input type="radio" id="service" name="app" value="Vehicle Service" onChange={(e)=> {
                    setsearch(e.target.value) ;
                    
                }}/>
                <label  class = "label-class" for="service">Vehicle Service</label><br/>

            </li>
            <li>
                <input type="radio" id="Nok" name="app" value="Nok" onChange={(e)=> {
                    setsearch(e.target.value) ;
                    
                }}/>
                <label class = "label-class" for="Nok">NOK</label><br/>

            </li>
            <li>
                <input type="radio" id="company" name="app" value="Insurance Company" onChange={(e)=> {
                    setsearch(e.target.value) ;
                    
                }}/>
                <label class = "label-class" for="company">Vehicle Company</label><br/>

            </li>
            <li>
                <input type="radio" id="renew" name="app" value="Policy Renewable" onChange={(e)=> {
                    setsearch(e.target.value) ;
                    
                }}/>
                <label class = "label-class" for="renew">Policy Renewable</label><br/>

            </li>
            <li>
                <input type="radio" id="incident" name="app" value="Incident" onChange={(e)=> {
                    setsearch(e.target.value) ;
                    
                }}/>
                <label class = "label-class" for="incident">Incident</label><br/>

            </li>
            <li>
                <input type="radio" id="report" name="app" value="Incident Report" onChange={(e)=> {
                    setsearch(e.target.value) ;
                    
                }}/>
                <label class = "label-class" for="report">Incident Report</label><br/>

            </li>
            <li>
                <input type="radio" id="coverage" name="app" value="Coverage" onChange={(e)=> {
                    setsearch(e.target.value) ;
                    
                }}/>
                <label class = "label-class" for="coverage">Coverage</label><br/>

            </li>
            <li>
                <input type="radio" id="product" name="app" value="Product" onChange={(e)=> {
                    setsearch(e.target.value) ;
                    
                }}/>
                <label class = "label-class" for="product">Product</label><br/>

            </li>
            <li>
                <input type="radio" id="reciept" name="app" value="Receipt" onChange={(e)=> {
                    setsearch(e.target.value) ;
                    
                }}/>
                <label class = "label-class" for="reciept">Reciept</label><br/>

            </li>
            <li>
                <input type="radio" id="policy_coverage" name="app" value="Insurance Policy Coverage" onChange={(e)=> {
                    setsearch(e.target.value) ;
                    
                }}/>
                <label class = "label-class" for="policy_coverage">Insurance Policy Coverage</label><br/>
            </li>
        </ul>
        <input class="btn" type="submit" value="Submit" onClick={handelClick}/>

    </form>
    </>
  )
}

export default Table_select;