import React, { useState, useEffect } from "react";
// import { clearError, fieldError } from "../utils/errorField";
import client from "./axios";
import { Link, useParams, useHistory } from "react-router-dom";


  

export const useForm = () => {
    const [form, setForm] = useState({
      email: "",
      password: "",
    });
  
    const inputChangeHanlder = (e) => {
      console.log(e.target)
      const { value, id } = e.target;
  
      if (form[id] !== "") {
        // clearError(id);
      }
  
      setForm({ ...form, [id]: value });
    };
  
   
  
 
    return {
      form,
      inputChangeHanlder
    };
  };
  
  export const LoginData = async (form, loader, routeNext) => {
  
    client
      .post(`/api/v1/login`, form)
      .then((res) => {
        console.log(res)
        if(res.data.token) {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', JSON.stringify(res.data.userData))
            routeNext()
        }
        // simpan di local storage
      })
      .catch((err) => {
        // fieldError(err.response.data.message);
        return false;
      })
      .then(() => {
        setTimeout(() => {
          loader(false);
        }, 1500);
      });
  };
  