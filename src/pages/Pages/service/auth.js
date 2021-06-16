import { useState, useEffect } from "react";
// import { clearError, fieldError } from "../utils/errorField";
import client from "./axios";


export const useForm = () => {
    const [form, setForm] = useState({
      nama_lengkap: "",
      email: "",
      password: "",
      passwordKonfirmasi: "",
    });
  
    const inputChangeHanlder = (e) => {
      console.log(e.target.files)
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
  
  export const RegisterData = async (form, loader, routeNext) => {
    console.log(form)
    client
      .post(`/api/v1/register`, form)
      .then((res) => {
        console.log(res)
        if(res.data.token) {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', JSON.stringify(res.data.userData))
            routeNext()
        }
        // simpan di local storage
      })
      // .catch((err) => {
      //   fieldError(err.response.data.message);
      //   return;
      // })
      .then(() => {
        setTimeout(() => {
          loader(false);
        }, 1500);
      });
  };

  export const LogoutData = async () => {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    
   }