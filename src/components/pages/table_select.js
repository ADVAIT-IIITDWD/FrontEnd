import React from 'react'
import './table.css'

const Table_select = () => {
  return (
    <>
        <form action="">
        <ul class="table-list">

            <div >
            <li>
                <input  type="radio" name="customers" value="customer" />Customer<br />
    
            </li>
            </div>
            <li>
                <input type="radio" name="Application" value="Application" />Application<br />
    
            </li>
            <li>
                <input type="radio" name="Quote" value="Quote" />Quote<br />
    
            </li>
            <li>
                <input type="radio" name="Insurance_Policy" value="Insurance_Policy" />Insurance Policy<br />
    
            </li>
            <li>
                <input type="radio" name="Premium_Payment" value="Premium_Payment" />Premium Payment<br />
    
            </li>
            <li>
                <input type="radio" name="Vehicle" value="Vehicle" />Vehicle<br />
    
            </li>
            <li>
                <input type="radio" name="Claim" value="Claim" />Claim<br />
    
            </li>
            <li>
    
                <input type="radio" name="Claim_Settlement" value="Claim_Settlement" />Claim Settlement<br />
            </li>
            <li>
                <input type="radio" name="Staff" value="Staff" />Staff<br />
    
            </li>
            <li>
                <input type="radio" name="Department" value="Department" />Department<br />
    
            </li>
            <li>
                <input type="radio" name="Office" value="Office" />Office<br />
    
            </li>
            <li>
                <input type="radio" name="Membership" value="Membership" />Membership<br />
    
            </li>
            <li>
                <input type="radio" name="Vehicle_Service" value="Vehicle_Service" />Vehicle Service<br />
            </li>
            <li>
                <input type="radio" name="Nok" value="Nok" />Nok<br />
            </li>
            <li>
                <input type="radio" name="Insurance_Company" value="Insurance_Company" />Insurance Company<br />
            </li>
            <li>
                <input type="radio" name="Policy_Renewable" value="Policy_Renewable" />Policy Renewable<br />
            </li>
            <li>
                <input type="radio" name="Incident" value="Incident" />Incident<br />
            </li>
            <li>
                <input type="radio" name="Incident_Report" value="Incident_Report" />Incident Report<br />
            </li>
            <li>
                <input type="radio" name="Coverage" value="Coverage" />Coverage<br />
            </li>
            <li>
                <input type="radio" name="Product" value="Product" />Product<br />
            </li>
            <li>
                <input type="radio" name="Receipt" value="Receipt" />Receipt<br />
            </li>
            <li>
                <input type="radio" name="Insurance_Policy_Coverage" value="Insurance_Policy_Coverage" />Insurance Policy Coverage<br />
            </li>
        </ul> 

        <button class="btn" type="submit">Submit</button>

    </form>
    </>
  )
}

export default Table_select;

