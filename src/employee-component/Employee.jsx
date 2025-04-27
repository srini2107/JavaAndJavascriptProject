import React from "react";
import "../styles.css";
import TableHead from "./TableHead";
import TableBody from "./TableBody";


const Employee = () => {
  return (
    <div className="table">
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <TableHead></TableHead>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableBody></TableBody>
          </tr>     
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
