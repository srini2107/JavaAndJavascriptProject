import React, { useState, useEffect } from "react";
import "./styles-test.css"; // Import your CSS file

const Form = ({ employees, setEmployees, onClose, employeeToEdit }) => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    salary: "",
    city: "",
  });

  // Populate the form with the employee's data when editing
  useEffect(() => {
    if (employeeToEdit) {
      setFormData(employeeToEdit);
    }
  }, [employeeToEdit]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    if (employeeToEdit) {
      // Update existing employee
      const updatedEmployees = employees.map((employee) =>
        employee.id === employeeToEdit.id ? { ...formData } : employee
      );
      setEmployees(updatedEmployees);
    } else {
      // Add new employee
      const newEmployee = {
        id: employees.length + 1, // Generate a new ID
        ...formData,
      };
      setEmployees([...employees, newEmployee]);
    }

    console.log("Updated Employees Array:", employees);

    // Clear the form
    setFormData({
      name: "",
      department: "",
      salary: "",
      city: "",
    });
    onClose(); // Close the form
  };

  return (
    <div className="form-container">
      <h2>{employeeToEdit ? "Update Employee" : "Add Employee"}</h2>
      <form onSubmit={handleSubmit} className="form-container1">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            requrired
          />
        </label>
        <br />
        <label>
          Department:
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            requrired
          />
        </label>
        <br></br>
        <label>
          Salary:
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            requrired
          />
        </label>
        <br></br>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            requrired
          />
        </label>

        <br />
        <button type="submit">{employeeToEdit ? "Update" : "Submit"}</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Form;
