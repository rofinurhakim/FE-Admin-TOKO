import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import client from "../Pages/service/axios";
import { fieldError, clearError } from "../../utils/errorField"
  

function EditProduct() {
  const { id } = useParams();
  const location = useHistory();

  const [form, setForm] = useState({
    nama_products: "",
    deskripsi: "",
    price: 0,
    stock: 0,
  });
  const [loader, setLoader] = useState(false);

  const inputChangeHandler = (e) => {
    const { id, value } = e.target;

    if (form[id] !== "") {
      clearError(id);
    }

    setForm({ ...form, [id]: value });
  };

  const submitForm = () => {
    setLoader(true);

    client
      .put(`/api/v1/products/${id}`, form)
      .then((res) => {
        if (res.data.status === "success") {
          alert("Produk berhasil di update");
          location.goBack();
        }
      })
      .catch((err) => {
        fieldError(err.response.data.message);
      })
      .then(() => {
        setTimeout(() => {
          setLoader(false);
        }, 1000);
      });
  };

  useEffect(() => {
    const getData = () => {
      client.get(`/api/v1/products/${id}`).then((res) => {
        setForm(res.data.product);
      });
    };

    getData();
  }, [id]);

  return (
    <div className="main-content">
      <section className="section">
        <div className="section-header">
          <h1>Edit Product</h1>
          <div className="section-header-breadcrumb">
            <div className="breadcrumb-item active">
              <a href="#">Dashboard</a>
            </div>
            <div className="breadcrumb-item">
              <a href="#">Edit Product</a>
            </div>
          </div>
        </div>

        <div className="section-body">
          <div className="card">
            <div className="card-body py-5">
              <div className="form-group row mb-3">
                <label htmlFor="nama_produk" className="col-lg-3 col-12">
                  Nama Produk
                </label>
                <div className="col-lg-4 col-12">
                  <input
                    type="text"
                    id="nama_produk"
                    className="form-control shadow-none"
                    value={form.nama_products}
                    onChange={(e) => inputChangeHandler(e)}
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
                    value={form.deskripsi}
                    onChange={(e) => inputChangeHandler(e)}
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
                    value={form.price}
                    className="form-control shadow-none"
                    onChange={(e) => inputChangeHandler(e)}
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
                    value={form.stock}
                    className="form-control shadow-none"
                    onChange={(e) => inputChangeHandler(e)}
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

export default EditProduct;