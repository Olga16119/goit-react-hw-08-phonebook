import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './contactsOperation';
import { logOut } from 'redux/Auth/authOperations';

const initialState = {
  contacts: [],
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.error = null;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts = action.payload;
      state.error = null;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [addContact.fulfilled]: (state, action) => {
      state.contacts.push(action.payload);
    },
    [addContact.pending]: state => {
      state.error = null;
    },
    [addContact.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.contacts = state.contacts.filter(
        contacts => contacts.id !== action.payload.id
      );
    },
    [deleteContact.pending]: state => {
      state.error = null;
    },

    [deleteContact.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [logOut.fulfilled]: state => {
      state.contacts = [];
      state.error = null;
    },
    [updateContact.pending]: state => {
      state.error = null;
    },
    [updateContact.fulfilled]: (state, action) => {
      const contactId = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(contactId, 1, action.payload);
    },
    [updateContact.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default contactsSlice.reducer;
