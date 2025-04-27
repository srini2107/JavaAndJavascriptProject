import React, { useState, useEffect } from "react";
import EMP from "./EMP";
import Form from "./Form";
import { fetchEmployees } from "./utils/api"; // Move API calls to a utility file
import "./styles-test.css";

const Test = () => {
  const [employees, setEmployees] = useState([]);
  const [isFormVisible, setFormVisible] = useState(false);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);

  useEffect(() => {
    const loadEmployees = async () => {
      const data = await fetchEmployees(); // Call the API utility function
      setEmployees(data);
    };
    loadEmployees();
  }, []);

  return (
    <div className="test-container">
      <h1>Employee Management</h1>
      <button
        onClick={() => {
          setEmployeeToEdit(null);
          setFormVisible(true);
        }}
      >
        Add Employee
      </button>
      {isFormVisible && (
        <Form
          employees={employees}
          setEmployees={setEmployees}
          onClose={() => setFormVisible(false)}
          employeeToEdit={employeeToEdit}
        />
      )}
      <EMP
        employees={employees}
        setEmployees={setEmployees}
        onEdit={(employee) => {//.
          setEmployeeToEdit(employee);
          setFormVisible(true);
        }}
      />
        
    </div>
  );
};

export default Test;