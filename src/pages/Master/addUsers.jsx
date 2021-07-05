import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {useForm, RegisterData} from '../Pages/service/auth'

function AddUsers() {
    const history = useHistory();
    const { form, inputChangeHanlder } = useForm();
    const [loader, setLoader] = useState(false);
  
    const submitForm = () => {
      setLoader(true);
      RegisterData(form, history, setLoader);
    };
  
    return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Users Form</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <a href="#">Dashboard</a>
              </div>
              <div className="breadcrumb-item">
                <a href="#">Users Form</a>
              </div>
            </div>
          </div>
  
          <div className="section-body">
            <div className="card">
              <div className="card-body py-5">
                <div className="form-group row mb-3">
                  <label htmlFor="nama_lengkap" className="col-lg-3 col-12">
                    Nama Lengkap
                  </label>
                  <div className="col-lg-4 col-12">
                    <input
                      type="text"
                      id="nama_lengkap"
                      className="form-control shadow-none"
                      onChange={(e) => inputChangeHanlder(e)}
                    />
                    <span className="text-danger"></span>
                  </div>
                </div>
  
                <div className="form-group row mb-3">
                  <label htmlFor="email" className="col-lg-3 col-12">
                    Email
                  </label>
                  <div className="col-lg-9 col-12">
                    <textarea
                      id="email"
                      className="form-control shadow-none"
                      style={{ resize: "none" }}
                      rows="5"
                      onChange={(e) => inputChangeHanlder(e)}
                    ></textarea>
                    <span className="text-danger"></span>
                  </div>
                </div>
  
                <div className="form-group row mb-3">
                  <label htmlFor="password" className="col-lg-3 col-12">
                    Password
                  </label>
                  <div className="col-lg-4 col-12">
                    <input
                      type="number"
                      id="password"
                      className="form-control shadow-none"
                      onChange={(e) => inputChangeHanlder(e)}
                    />
                    <span className="text-danger"></span>
                  </div>
                </div>
  
                <div className="form-group row mb-3">
                  <label htmlFor="" className="col-lg-3 col-12"></label>
                  <div className="col-lg-4 col-12">
                    <Link
                      to="/Users"
                      className="btn btn-icon btn-warning mr-3"
                    >
                      <i className="fa fa-times"></i> Cancel
                    </Link>
  
                    {!loader ? (
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => submitForm()}
                      >
                        <i className="fas fa-check fa-fw"></i> Save
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-success"
                        disabled={true}
                      >
                        <span className="spinner-border spinner-border-sm mr-2"></span>
                        Processing
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="card-footer bg-whitesmoke"></div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default AddUsers;