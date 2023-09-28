// api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/sub_categories', // Replace with your API base URL
  timeout: 5000, // Adjust the timeout as needed
});

export const getSubcategories = async () => {
  try {
    const response = await api.get('/'); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createSubcategory = async (formData) => {
  try {
    const response = await api.post('/', formData); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateSubcategory = async (subcategoryId, formData) => {
  try {
    const response = await api.put(`/${subcategoryId}`, formData); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteSubcategory = async (subcategoryId) => {
  try {
    const response = await api.delete(`/${subcategoryId}`); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
};
