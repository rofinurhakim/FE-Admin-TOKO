import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {useForm, insertData} from '../../pages/Pages/service/product'

function AddProducts() {
    const history = useHistory();
    const { form, inputChangeHanlder } = useForm();
    const [loader, setLoader] = useState(false);
  
    const submitForm = () => {
      setLoader(true);
      insertData(form, history, setLoader);
    };
  
    return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Product Form</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <a href="#">Dashboard</a>
              </div>
              <div className="breadcrumb-item">
                <a href="#">Product Form</a>
              </div>
            </div>
          </div>
  
          <div className="section-body">
            <div className="card">
              <div className="card-body py-5">
                <div className="form-group row mb-3">
                  <label htmlFor="image" className="col-lg-3 col-12">
                    Gambar Produk
                  </label>
                  <div className="col-lg-4 col-12">
                    <input
                      type="file"
                      id="image"
                      className="form-control shadow-none"
                      onChange={(e) => inputChangeHanlder(e)}
                    />
                    <span className="text-danger"></span>
                  </div>
                </div>
  
                <div className="form-group row mb-3">
                  <label htmlFor="nama_produk" className="col-lg-3 col-12">
                    Nama Produk
                  </label>
                  <div className="col-lg-4 col-12">
                    <input
                      type="text"
                      id="nama_products"
                      className="form-control shadow-none"
                      onChange={(e) => inputChangeHanlder(e)}
                    />
                    <span className="text-danger"></span>
                  </div>
                </div>
  
                <div className="form-group row mb-3">
                  <label htmlFor="deskripsi" className="col-lg-3 col-12">
                    Deskripsi
                  </label>
                  <div className="col-lg-9 col-12">
                    <textarea
                      id="deskripsi"
                      className="form-control shadow-none"
                      style={{ resize: "none" }}
                      rows="5"
                      onChange={(e) => inputChangeHanlder(e)}
                    ></textarea>
                    <span className="text-danger"></span>
                  </div>
                </div>
  
                <div className="form-group row mb-3">
                  <label htmlFor="price" className="col-lg-3 col-12">
                    Price
                  </label>
                  <div className="col-lg-4 col-12">
                    <input
                      type="number"
                      id="price"
                      className="form-control shadow-none"
                      onChange={(e) => inputChangeHanlder(e)}
                    />
                    <span className="text-danger"></span>
                  </div>
                </div>
  
                <div className="form-group row mb-3">
                  <label htmlFor="stock" className="col-lg-3 col-12">
                    Stock
                  </label>
                  <div className="col-lg-4 col-12">
                    <input
                      type="number"
                      id="stock"
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
                      to="/products"
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
  
  export default AddProducts;