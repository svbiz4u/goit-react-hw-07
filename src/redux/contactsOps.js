import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://675ef0141f7ad242699719d1.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "fetchData",
   async (_, thunkApi) => {
        try {
            const { data } = await axios.get("/contacts");
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const deleteContactThunk = createAsyncThunk(
  "deleteContact",
   async (id, thunkApi) => {
        try {
            const { data } = await axios.delete(`/contacts/${id}`);
            return data.id;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const addContactThunk = createAsyncThunk(
  "addContact",
  async (body, thunkApi) => {
        try {
            const { data } = await axios.post(`/contacts`, body);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
  }
);