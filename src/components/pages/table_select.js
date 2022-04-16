import React from 'react'
import './table.css'

const Table_select = () => {
  return (
    <>
        <form action="">
        <ul class="table-list ">

        <li>
                <input type="radio" id="customer" name="app" value="customer"/>
                <label class = "label-class" for="customer">Customer</label><br/>

            </li>
            <li>
                <input type="radio" id="app" name="app" value="app"/>
                <label class = "label-class" for="app">Application</label><br/>
    
            </li>
            <li>
                <input type="radio" id="quote" name="app" value="quote"/>
                <label class = "label-class" for="quote">Quote</label><br/>
    
            </li>
            <li>
                <input type="radio" id="policy" name="app" value="policy"/>
                <label class = "label-class" for="policy">Insurance_Policy</label><br/>
    
            </li>
            <li>
                <input type="radio" id="payment" name="app" value="payment"/>
                <label class = "label-class" for="payment">Premium_Payment</label><br/>
    
            </li>
            <li>
                <input type="radio" id="vehicle" name="app" value="vehicle"/>
                <label class = "label-class" for="vehicle">Vehicle</label><br/>
    
            </li>
            <li>
                <input type="radio" id="claim" name="app" value="claim"/>
                <label class = "label-class" for="claim">Claim</label><br/>

            </li>
            <li>
                <input type="radio" id="settlement" name="app" value="settlement"/>
                <label class = "label-class" for="settlement">Claim_Settlement</label><br/>

            </li>
            <li>
                <input type="radio" id="staff" name="app" value="staff"/>
                <label class = "label-class" for="staff">Staff</label><br/>
    
            </li>
            <li>
                <input type="radio" id="dept" name="app" value="dept"/>
                <label class = "label-class" for="dept">Department</label><br/>
    
            </li>
            <li>
                <input type="radio" id="office" name="app" value="office"/>
                <label class = "label-class" for="office">Office</label><br/>
    
            </li>
            <li>
                <input type="radio" id="member" name="app" value="member"/>
                <label class = "label-class" for="member">Membership</label><br/>
    
            </li>
            <li>
                <input type="radio" id="service" name="app" value="service"/>
                <label  class = "label-class" for="service">Vehicle_Service</label><br/>

            </li>
            <li>
                <input type="radio" id="Nok" name="app" value="Nok"/>
                <label class = "label-class" for="Nok">NOK</label><br/>

            </li>
            <li>
                <input type="radio" id="company" name="app" value="company"/>
                <label class = "label-class" for="company">Vehicle_Company</label><br/>

            </li>
            <li>
                <input type="radio" id="renew" name="app" value="renew"/>
                <label class = "label-class" for="renew">Policy_Renewable</label><br/>

            </li>
            <li>
                <input type="radio" id="incident" name="app" value="incident"/>
                <label class = "label-class" for="incident">Incident</label><br/>

            </li>
            <li>
                <input type="radio" id="report" name="app" value="report"/>
                <label class = "label-class" for="report">Incident_Report</label><br/>

            </li>
            <li>
                <input type="radio" id="coverage" name="app" value="coverage"/>
                <label class = "label-class" for="coverage">Coverage</label><br/>

            </li>
            <li>
                <input type="radio" id="product" name="app" value="product"/>
                <label class = "label-class" for="product">Product</label><br/>

            </li>
            <li>
                <input type="radio" id="reciept" name="app" value="reciept"/>
                <label class = "label-class" for="reciept">Reciept</label><br/>

            </li>
            <li>
                <input type="radio" id="policy_coverage" name="app" value="policy_coverage"/>
                <label class = "label-class" for="policy_coverage">Insurance_Policy_Coverage</label><br/>
            </li>
        </ul>   

        <input class="btn" type="submit" value="Submit"/>

    </form>
    </>
  )
}

export default Table_select;