import React from "react";
import "./styles-test.css"; // Import your CSS file

const EMP = ({ employees, setEmployees, onEdit }) => {
  // Function to handle removing an employee
  const handleRemove = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees); // Update the state with the filtered array
  };

  return (
    <div className="emp-container">
      <h2>Employee List</h2>
      <table className="emp-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>City</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.salary}</td>
              <td>{employee.city}</td>
              <td>
                <button
                  className="remove-button"
                  onClick={() => handleRemove(employee.id)}
                >
                  Remove
                </button>
                <button
                  className="update-button"
                  onClick={() => onEdit(employee)} // Pass the employee to be edited
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EMP;
