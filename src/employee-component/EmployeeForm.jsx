import React, { useState } from "react";

const EmployeeForm = ({ onAddEmployee, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    salary: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData); // Debugging log
    onAddEmployee(formData);
    onClose(); // Close the form after submission
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Add New Employee</h2>
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
        <button type="submit">Add Employee</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;