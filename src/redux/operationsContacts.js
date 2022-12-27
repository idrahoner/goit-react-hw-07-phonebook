import axios from 'axios';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from 'redux/contactsSlice';

axios.defaults.baseURL =
  'https://63a80a29f4962215b579c5a0.mockapi.io/phonebook';

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchContactsRequest());
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

export const addContact = (name, phone) => async dispatch => {
  try {
    dispatch(addContactRequest());
    const { data } = await axios.post('/contacts', { name, phone });
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

export const removeContact = id => async dispatch => {
  try {
    dispatch(removeContactRequest());
    const { data } = await axios.delete(`/contacts/${id}`);
    dispatch(removeContactSuccess(data.id));
  } catch (error) {
    dispatch(removeContactError(error));
  }
};
