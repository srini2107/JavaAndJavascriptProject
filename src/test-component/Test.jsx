import React, { useState, useEffect } from "react";
import EMP from "./EMP";
import Form from "./Form";
import EmployeeData from "../employee-component/EmployeeData";
import "./styles-test.css"; // Import your CSS file

const Test = () => {
  //   const [employees, setEmployees] = useState(EmployeeData); // Shared state
  const [isFormVisible, setFormVisible] = useState(false); // Control form visibility
  const [employeeToEdit, setEmployeeToEdit] = useState(null); // Track the employee being edited
  // Load employees from localStorage or use initial data
  const [employees, setEmployees] = useState(() => {
    const storedEmployees = localStorage.getItem("employees");
    return storedEmployees ? JSON.parse(storedEmployees) : EmployeeData;
  });

  // Save employees to localStorage whenever the state changes
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  // Handle editing an employee
  const handleEdit = (employee) => {
    setEmployeeToEdit(employee); // Set the employee to be edited
    setFormVisible(true); // Show the form
  };

  return (
    <div className="test-container">
      <h1>Employee Component</h1>
      <button
        onClick={() => {
          setEmployeeToEdit(null); // Clear the employeeToEdit state for new entries
          setFormVisible(true);
        }}
      >
        Add Employee
      </button>
      {isFormVisible && (
        <Form
          employees={employees}
          setEmployees={setEmployees}
          onClose={() => setFormVisible(false)} // Pass the close function
          employeeToEdit={employeeToEdit} // Pass the employee to edit
        />
      )}
      <EMP
        employees={employees}
        setEmployees={setEmployees}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default Test;
