import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = ' https://663cfe2917145c4d8c3868d8.mockapi.io ';

//createAsyncThunk

export const fetchContacts = createAsyncThunk(
  'pnonebook/fetchContacts',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'phonebook/addContact',
  async (contact, thunkApi) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'phonebook/deleteContact',
  async (contactId, thunkApi) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
