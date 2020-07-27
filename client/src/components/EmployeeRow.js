import React from "react";

function EmployeeRow(props)
{
    return (
        <tr>
            <td>{props.firstname}</td>
            <td>{props.lastname}</td>
            <td>{props.pay}</td>
            <td>{props.department}</td>
            <td>{(props.manager)?"Yes": "No"}</td>
        </tr>
    );
};

export default EmployeeRow;