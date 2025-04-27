import React, { useState, useEffect } from "react";
import "../styles.css";
import employeeData from "./EmployeeData";
import EmployeeForm from "./EmployeeForm";

const Sidebar = () => {

   // Load employees from localStorage or use initial data
   const [employees, setEmployeeData] = useState(() => {
    const storedEmployees = localStorage.getItem("employees");
    return storedEmployees ? JSON.parse(storedEmployees) : employeeData;
  });

  const [isFormVisible, setFormVisible] = useState(false);

    // Save employees to localStorage whenever the state changes
    useEffect(() => {
      localStorage.setItem("employees", JSON.stringify(employees));
    }, [employees]);
  

  const addEmployee = (newEmployee) => {
    console.log("addEmployee called with:", newEmployee); // Debugging log
    const updatedEmployee = {
      id: employees.length + 1,
      ...newEmployee,
    };
    setEmployeeData([...employees, updatedEmployee]);
    console.log("Employee added:", updatedEmployee);
    console.log("Employee array:", employeeData);
  };

  return (
    <div>
      <aside>
        <ul>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Search Employee</a>
          </li>
          <li>
            <a href="#" onClick={() => setFormVisible(true)}>
              Add Employee
            </a>
          </li>
          <li>
            <a href="#">Update Employee</a>
          </li>
          <li>
            <a href="#">Delete Employee</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
        </ul>
      </aside>

      {isFormVisible && (
        <EmployeeForm
          onAddEmployee={addEmployee}
          onClose={() => setFormVisible(false)}
        />
      )}
    </div>
  );
};

export default Sidebar;
