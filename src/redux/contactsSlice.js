import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  reducers: {
    fetchContactsRequest(state) {
      state.isLoading = true;
    },
    fetchContactsSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchContactsError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addContactRequest(state) {
      state.isLoading = true;
    },
    addContactSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    addContactError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    removeContactRequest(state) {
      state.isLoading = true;
    },
    removeContactSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contacts => contacts.id === action.payload
      );
      state.items.splice(index, 1);
    },
    removeContactError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
