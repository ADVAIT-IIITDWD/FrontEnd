import React from 'react'
import './table.css'

const Table_select = () => {
  return (
    <>
        <form action="">
        <ul class="table-list">

            <div >
            <li>
                <input  type="radio" name="app" value="customer"/>Customer<br/>
    
            </li>
            </div>

            <li>
                <input type="radio" name="app" value="app"/>Application<br/>
    
            </li>
            <li>
                <input type="radio" name="app" value="quote"/>Quote<br/>
    
            </li>
            <li>
                <input type="radio" name="app" value="policy"/>Insurance Policy<br/>
    
            </li>
            <li>
                <input type="radio" name="app" value="payment"/>Premium_Payment<br/>
    
            </li>
            <li>
                <input type="radio" name="app" value="vehicle"/>Vehicle<br/>
    
            </li>
            <li>
                <input type="radio" name="app" value="claim"/>Claim<br/>
    
            </li>
            <li>
    
                <input type="radio" name="app" value="settlement" />Claim_Settlement<br/>
            </li>
            <li>
                <input type="radio" name="app" value="staff" />Staff<br/>
    
            </li>
            <li>
                <input type="radio" name="app" value="dept" />Department<br/>
    
            </li>
            <li>
                <input type="radio" name="app" value="office" />Office<br/>
    
            </li>
            <li>
                <input type="radio" name="app" value="member" />Membership<br/>
    
            </li>
            <li>
                <input type="radio" name="app" value="service" />Vehicle_Service<br/>
            </li>
            <li>
                <input type="radio" name="app" value="NOK" />Nok<br/>
            </li>
            <li>
                <input type="radio" name="app" value="company" />Insurance Company<br/>
            </li>
            <li>
                <input type="radio" name="app" value="renew" />Policy Renewable<br/>
            </li>
            <li>
                <input type="radio" name="app" value="incident" />Incident<br/>
            </li>
            <li>
                <input type="radio" name="app" value="report" />Incident Report<br/>
            </li>
            <li>
                <input type="radio" name="app" value="coverage" />Coverage<br/>
            </li>
            <li>
                <input type="radio" name="app" value="product" />Product<br/>
            </li>
            <li>
                <input type="radio" name="app" value="receipt" />Receipt<br/>
            </li>
            <li>
                <input type="radio" name="app" value="policy_coverage" />Insurance Policy Coverage<br/>
            </li>
        </ul>   

        <input class="btn" type="submit" value="Submit"/>

    </form>
    </>
  )
}

export default Table_select;