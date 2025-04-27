import React from 'react';
import "../styles.css";

const TableHead = () => {
    return (
        <div className="table-head">
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>City</th>
        </div>
    );
};

export default TableHead;