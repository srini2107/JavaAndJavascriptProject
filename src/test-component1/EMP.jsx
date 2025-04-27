import React from "react";
import PropTypes from "prop-types";
import "./styles-test.css"; // Import your CSS file
import { deleteEmployee } from "./utils/api"; // Move API calls to a utility file

const EMP = ({ employees, setEmployees, onEdit }) => {
  // Function to handle removing an employee
  const handleRemove = async (id) => {
    try {
      await deleteEmployee(id); // Call the API utility function
      const updatedEmployees = employees.filter((employee) => employee.id !== id);
      setEmployees(updatedEmployees); // Update the state with the filtered array
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
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
            <th>Actions</th>
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

EMP.propTypes = {
  employees: PropTypes.array.isRequired,
  setEmployees: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default EMP;