import React, { useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import client from "../Pages/service/axios";

function DeleteProduct() {
  const { id } = useParams();
  const location = useHistory();

  const delItem = () => {
    client.delete(`/api/v1/products/${id}`).then((res) => {
      if (res.data.status) {
        alert(res.data.message);
        location.goBack();
      } else {
        alert(res.data.message);
      }
    });
  };

  return (
    <div className="main-content">
      <section className="section">
        <div className="section-header">
          <h1>Delete Product</h1>
          <div className="section-header-breadcrumb">
            <div className="breadcrumb-item active">
              <a href="#">Dashboard</a>
            </div>
            <div className="breadcrumb-item">
              <a href="#">Delete Product</a>
            </div>
          </div>
        </div>

        <div className="section-body">
          <div className="card">
            <div className="card-body py-5">
              <h4 className="text-center">
                Apakah anda yakin akan menghapus data ini ?
              </h4>
              <div className="d-flex flex-row justify-content-center align-items-center">
                <Link className="btn btn-warning mr-2" to="/products">
                  Cancel
                </Link>
                <button className="btn btn-danger" onClick={() => delItem()}>
                  Hapus
                </button>
              </div>
            </div>
            <div className="card-footer bg-whitesmoke"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DeleteProduct;