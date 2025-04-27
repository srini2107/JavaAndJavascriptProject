import axios from "axios";

const API_URL = "http://localhost:5000/employees";

export const fetchEmployees = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addEmployee = async (employee) => {
  await axios.post(API_URL, employee);
};

export const updateEmployee = async (id, employee) => {
  await axios.put(`${API_URL}/${id}`, employee);
};

export const deleteEmployee = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};