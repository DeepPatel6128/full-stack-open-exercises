//post
//get

import axios from "axios";
const baseURL = "http://localhost:3001/persons";

//delete
const deletePhone = (id) => {
  return axios.delete(`${baseURL}/${id}`);
};
//update
const updateNumber = (contact, number) => {
  return axios.put(`${baseURL}/${contact.id}`, { ...contact, number: number });
};
//get
const getAll = () => {
  return axios.get(baseURL);
};

//post
const create = (newObject) => {
  return axios.post(baseURL, newObject);
};

export default { deletePhone, getAll, create, updateNumber };
