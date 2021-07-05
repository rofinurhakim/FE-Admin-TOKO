import React from "react";
import client from './../../pages/Pages/service/axios'
import {useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import Pagination from "../Components/Pagination"
import NoData from "../Components/NoData";

const MasterTransaction = (props) => {
  const history = useHistory();
  let [transaction, setTransaction] = useState([]);
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
      .get(`/api/v1/transaction`, {
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

        setTransaction((prevState) => res.data.transaction);
        setPageCount((prevState) => res.data.pageCount);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    const getList = () => {
      client
        .get("/api/v1/transaction", {
          params: {
            page,
            limit,
            search,
            orderby,
            orderdir,
          },
        })
        .then((res) => {
          setTransaction((prevState) => res.data.transaction);
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
          <h1>Transacion Users</h1>
          <div className="section-header-breadcrumb">
            <div className="breadcrumb-item active">
              <a href="#">Dashboard</a>
            </div>
            <div className="breadcrumb-item">
              <a href="#">Transaction Users</a>
            </div>
          </div>
        </div>

        <div className="section-body">
          <div className="card">
            <div className="card-body">
              <div className="row mb-4">
                <div className="col-12">
                  <div className="float-left">
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

              {!transaction.length ? (
                <NoData />
              ) : (
                <div className="table-responsive">
                  <table className="table table-striped" id="table-1">
                    <thead>
                      <tr>
                        
                        <th
                          className="sortable"
                          onClick={() => sorting("user_id")}
                        >
                          User
                        </th>
                        <th
                          className="sortable"
                          onClick={() => sorting("transaction_id")}
                        >
                          Transaction
                        </th>
                        {/* <th
                          className="sortable"
                          onClick={() => sorting("price")}
                        >
                          price
                        </th> */}
                        <th
                          className="sortable"
                          onClick={() => sorting("status")}
                        >
                          Status 
                        </th>
                        <th style={{ width: "12%", textAlign: "center" }}>
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {transaction.map((item, index) => {
                        console.log(item);
                        return (
                          <tr key={index}>
                           
                            <td>{item.user_id}</td>
                            <td>{item.transaction_id}</td>
                          
                            <td>{item.status}</td>
                           
                            <td>
                              <div className="row">
                               
                                <div className="col-6">
                                  <Link
                                    to={`/transaction/delete/${item.id}`}
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

export default MasterTransaction;