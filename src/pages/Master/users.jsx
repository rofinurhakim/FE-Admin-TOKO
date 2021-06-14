import React from "react";
import client from './../../pages/Pages/service/axios'
import {useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import Pagination from "../Components/Pagination"
import NoData from "../Components/NoData";

const MasterUsers = (props) => {
  const history = useHistory();
  let [users, setUsers] = useState([]);
  const imageUri = "http://localhost:3000/";
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [pagecount, setPageCount] = useState(0);
  const [search, setSearch] = useState("");
  const [orderby, setOrderBy] = useState("createdAt");
  const [orderdir, setOrderDir] = useState("desc");

  const sorting = (sortby) => {
    let sortdir = orderdir === "desc" ? "asc" : "desc";

    setOrderBy((prevState) => sortby);
    setOrderDir((prevState) => sortdir);
  };

  const getList = () => {
    client
      .get("/api/v1/products", {
        params: {
          page,
          limit,
          search,
          orderby,
          orderdir,
        },
      })
      .then((res) => {
        console.log(res);

        setUsers((prevState) => res.data.products);
        setPageCount((prevState) => res.data.pageCount);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    const getList = () => {
      client
        .get("/api/v1/login", {
          params: {
            page,
            limit,
            search,
            orderby,
            orderdir,
          },
        })
        .then((res) => {
          setUsers((prevState) => res.data.users);
          setPageCount((prevState) => res.data.pageCount);
        })
        .catch((err) => {});
    };

    getList();
  }, [limit, orderby, orderdir, page, search]);

  const searchHandler = (e) => {
    const { value } = e.target;
    setSearch((prevState) => value);

    if (e.keyCode === 13) {
      doSearch();
    }
  };

  const doSearch = () => {
    getList();
  };

  return (
    <div className="main-content">
      <section className="section">
        <div className="section-header">
          <h1>Users</h1>
          <div className="section-header-breadcrumb">
            <div className="breadcrumb-item active">
              <a href="#">Dashboard</a>
            </div>
            <div className="breadcrumb-item">
              <a href="#">Users</a>
            </div>
          </div>
        </div>

        <div className="section-body">
          <div className="card">
            <div className="card-body">
              <div className="row mb-4">
                <div className="col-12">
                  <div className="float-left">
                    <Link
                      to="/products/add"
                      className="btn btn-icon btn-success"
                    >
                      <i className="fa fa-plus"></i>
                      Tambah
                    </Link>
                  </div>
                  <div className="float-right">
                    <div className="input-group">
                      <input
                        type="text"
                        id="searchText"
                        className="form-control shadow-none"
                        placeholder="Search here..."
                        onChange={(e) => searchHandler(e)}
                      />
                      <span className="input-group-append">
                        <button
                          className="btn btn-primary"
                          onClick={() => doSearch()}
                        >
                          <i className="fas fa-search"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {!users.length ? (
                <NoData />
              ) : (
                <div className="table-responsive">
                  <table className="table table-striped" id="table-1">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th
                          className="sortable"
                          onClick={() => sorting("nama_products")}
                        >
                          Nama
                        </th>
                        <th
                          className="sortable"
                          onClick={() => sorting("rating")}
                        >
                          Rating
                        </th>
                        <th
                          className="sortable"
                          onClick={() => sorting("price")}
                        >
                          Price
                        </th>
                        <th
                          className="sortable"
                          onClick={() => sorting("stock")}
                        >
                          Stock
                        </th>
                        <th style={{ width: "12%", textAlign: "center" }}>
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((item, index) => {
                        console.log(item);
                        return (
                          <tr key={index}>
                            <td>
                              <img
                                src={`${imageUri}${
                                  item.image
                                    ? item.image
                                    : "uploads/no-image.png"
                                }`}
                                alt=""
                                style={{ width: 40 }}
                                className="img-fluid rounded"
                              />
                            </td>
                            <td>{item.nama_products}</td>
                            <td>{item.rating}</td>
                            <td>
                              Rp.{" "}
                              {new Number(item.price).toLocaleString("id-ID")}
                            </td>
                            <td>{item.stock}</td>
                            <td>
                              <div className="row">
                                <div className="col-6">
                                  <Link
                                    to={`/products/${item.id}`}
                                    className="btn btn-icon btn-warning"
                                  >
                                    <i className="far fa-edit"></i>
                                  </Link>
                                </div>
                                <div className="col-6">
                                  <Link
                                    to={`/products/delete/${item.id}`}
                                    className="btn btn-icon btn-danger"
                                  >
                                    <i className="fas fa-trash"></i>
                                  </Link>
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
            <div className="card-footer bg-whitesmoke">
              <div className="d-flex flex-row justify-content-between">
                <div></div>
                <div>
                  <Pagination
                    page={page}
                    pagecount={pagecount}
                    setPage={setPage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MasterUsers;