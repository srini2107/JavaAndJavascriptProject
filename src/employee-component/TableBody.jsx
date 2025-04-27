import React from 'react';
import EmployeeData from "./EmployeeData";
import "../styles.css";

const TableBody = () => {

    const employees = EmployeeData;

    return (
        <div className="table-body">
            {employees.map((employees) => (
                <tr key={employees.id}>
                    <td>{employees.id}</td>
                    <td>{employees.name}</td>
                    <td>{employees.department}</td>
                    <td>{employees.salary}</td>
                    <td>{employees.city}</td>
                </tr>
            ))}
        </div>
    );
};

export default TableBody;