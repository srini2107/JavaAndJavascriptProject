import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./styles-test.css";
import { addEmployee, updateEmployee } from "./utils/api"; // Move API calls to a utility file

const Form = ({ employees, setEmployees, onClose, employeeToEdit }) => {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    salary: "",
    city: "",
  });

  useEffect(() => {
    if (employeeToEdit) {
      setFormData(employeeToEdit);
    }
  }, [employeeToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (employeeToEdit) {
        await updateEmployee(employeeToEdit.id, formData); // Call the API utility function
      } else {
        await addEmployee(formData); // Call the API utility function
      }
      const response = await fetch("http://localhost:5000/employees");
      const updatedEmployees = await response.json();
      setEmployees(updatedEmployees);
      onClose(); // Close the form
    } catch (error) {
      console.error("Error submitting form:", error);
    }
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
            required
          />
        </label>
        <label>
          Department:
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Salary:
          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">{employeeToEdit ? "Update" : "Submit"}</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

Form.propTypes = {
  employees: PropTypes.array.isRequired,
  setEmployees: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  employeeToEdit: PropTypes.object,
};

export default Form;