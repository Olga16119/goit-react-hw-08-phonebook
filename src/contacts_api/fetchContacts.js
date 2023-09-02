import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchAllContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

const addNewContact = async ({ name, number }) => {
  const { data } = await axios.post('/contacts', { name, number });
  return data;
};

const deleteContacts = async contactId => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
};

const updateContact = async ({ id, number, name }) => {
    const { data } = await axios.get(`/contacts/${id}`, { name, number })
    return data;
}

export { fetchAllContacts, addNewContact, deleteContacts, updateContact };
