import React from 'react'
import Employee from '../api/testAPI'

function ViewTable() {
    let attributes = Object.keys(Employee[0]);

    let b = Object.keys(Employee); 
    let c = Object.values(Employee);

    return (
        <table className="table table-striped table-hover table-bordered">
            <thead>
                <tr>
                    {
                        attributes.map((attr,idx) => {
                            return(
                                <th scope="col" key={idx}>{attr}</th>
                            )
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    b.map((i, idx) => {
                        return(
                            <tr>
                                {
                                    attributes.map((val, idxx) => {
                                        let value = Object.values(c[i]);
                                        return(
                                            <td>{value[idxx]}</td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
    )
}

export default ViewTable