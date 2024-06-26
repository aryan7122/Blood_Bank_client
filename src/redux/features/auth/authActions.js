import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";
import { toast } from 'react-toastify';
export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ role, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/login", { role, email, password });
      //store token
      // { console.log('data:;', data) }
      if (data.success) {
        // alert(data.message);
        toast.success("User login Successfully")
        localStorage.setItem("token", data.token);
        window.location.replace("/");
      }
      return data;
    } catch (error) {
      toast.error("Not  login ")
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//register
export const userRegister = createAsyncThunk(

  "auth/register",
  async (
    {
      name,
      role,
      email,
      password,
      phone,
      organisationName,
      address,
      hospitalName,
      website,
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await API.post("/auth/register", {
        name,
        role,
        email,
        password,
        phone,
        organisationName,
        address,
        hospitalName,
        website,
      });
    
      if (data?.success) {
        alert("User Registered Successfully");
        toast.success("User Registered Successfully");
        window.location.replace("/login");
      }
    } catch (error) {
      toast.error("Not Register ")
      // console.log(error);
      // return window.location.replace("/login");

      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//current user
export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async ({ rejectWithValue }) => {
    try {
      const res = await API.get("/auth/current-user");
      if (res.data) {
        return res?.data;
      }
    } catch (error) {
      toast.error(error.message)
      return 
      // console.log(error);
      // if (error.response && error.response.data.message) {
      //   return rejectWithValue(error.response.data.message);
      // } else {
      //   return rejectWithValue(error.message);
      // }
    }
  }
);