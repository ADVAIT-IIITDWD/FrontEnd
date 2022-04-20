import React from 'react'
import Employee from '../api/testAPI'

function ViewTable() {
    let attributes = Object.keys(Employee[0]);
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
                    Employee.map((i, idx) => {
                        return(
                            <tr key={idx}>
                                {
                                    attributes.map((val, idxx) => {
                                        let value = Object.values(Employee[idx]);
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