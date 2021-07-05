import React, { Component, useState } from "react";
import { useForm, RegisterData } from "../../../pages/Pages/service/auth";
import {useHistory} from 'react-router-dom'


const Register = () =>  {
  const history = useHistory()
  const { form, inputChangeHanlder } = useForm();
  const [loader, setLoader] = useState(false);

  const submitForm = () => {
    setLoader(true);
    RegisterData(form, setLoader, nextLogin);
  };

  const nextLogin = () => {
    console.log('jalan')
    history.push('/')
    history.go()
  }


    return (
      <div id="app">
        <section class="section">
          <div class="container mt-5">
            <div class="row">
              <div class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
                <div class="login-brand">
                  <img
                    src="../assets/img/stisla-fill.svg"
                    alt="logo"
                    width="100"
                    class="shadow-light rounded-circle"
                  />
                </div>

                <div class="card card-primary">
                  <div class="card-header">
                    <h4>Register</h4>
                  </div>

                  <div class="card-body">
                    <form method="POST">
                      <div class="row">
                        <div class="form-group col-12">
                          <label for="nama_lengkap">Full Name</label>
                          <input
                            id="nama_lengkap"
                            type="text"
                            class="form-control"
                            name="nama_lengkap"
                            autofocus
                            onChange={(e) => inputChangeHanlder(e)}
                          />
                          <span className="text-danger"></span>
                        </div>
                        
                      </div>

                      <div class="form-group">
                        <label for="email">Email</label>
                        <input
                          id="email"
                          type="email"
                          class="form-control"
                          name="email"
                          onChange={(e) => inputChangeHanlder(e)}
                        />
                          <span className="text-danger"></span>
                      </div>

                      <div class="row">
                        <div class="form-group col-6">
                          <label for="password" class="d-block">
                            Password
                          </label>
                          <input
                            id="password"
                            type="password"
                            class="form-control pwstrength"
                            data-indicator="pwindicator"
                            name="password"
                            onChange={(e) => inputChangeHanlder(e)}
                          />
                             <span className="text-danger"></span>
                          <div id="pwindicator" class="pwindicator">
                            <div class="bar"></div>
                            <div class="label"></div>
                          </div>
                        </div>
                        <div class="form-group col-6">
                          <label for="password2" class="d-block">
                            Password Confirmation
                          </label>
                          <input
                            id="passwordKonfirmasi"
                            type="password"
                            class="form-control"
                            name="passwordKonfirmasi"
                            onChange={(e) => inputChangeHanlder(e)}
                          />
                             <span className="text-danger"></span>
                        </div>
                      </div>

                      
                     
                      

                      <div class="form-group">

                      {!loader ? (
                          <button
                            type="button"
                            className="btn btn-primary btn-lg btn-block"
                            onClick={() => submitForm()}
                          >
                            Register
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="btn btn-primary btn-lg btn-block"
                            disabled={true}
                          >
                            <span className="spinner-border spinner-border-sm mr-2"></span>
                            Processing
                          </button>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }


export default Register;