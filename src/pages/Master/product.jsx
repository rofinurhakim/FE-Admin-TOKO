import React from "react";
import client from './../../pages/Pages/service/axios'
import {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'


const MasterProduct = (props) => {
  console.log('jalan')
  console.log(axios)
  const history = useHistory();
  let [products, setProducts] = useState([])

  useEffect(() => {

    // panggil axios
    client.get('/api/v1/products').then(res => {
      console.log(res)

      setProducts(prevState => res.data.data)
    }).catch(err => {

    })
  }, [])

  return (
    <div class="main-content">
      <section class="section">
        <div class="section-header">
          <h1>Products</h1>
          <div class="section-header-breadcrumb">
            <div class="breadcrumb-item active">
              <a href="#">Dashboard</a>
            </div>
            <div class="breadcrumb-item">
              <a href="#">Layout</a>
            </div>
            <div class="breadcrumb-item">Default Layout</div>
          </div>
        </div>

        <div class="section-body">
          <h2 class="section-title">This is Example Page</h2>
          <p class="section-lead">
            This page is just an example for you to create your own page.
          </p>
          <div class="card">
              
            <div class="card-body">
              <div className="row mb-4">
                <div className="col-12">
                <div class="float-right">
                      <a href="#" class="btn btn-icon btn-success">
                          <i class="fa fa-plus"></i>
                          Tambah
                      </a>
                </div>
                </div>
              </div>

                    <div class="table-responsive">
                      <table class="table table-striped" id="table-1">
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>ID</th>
                            <th>Nama Produk</th>
                            <th>Deskripsi</th>
                            <th>Rating</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Image</th>
                            <th>Create At</th>
                            <th>Update At</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>

                       {products.map((item, index) => {
                          console.log(item)
                          return (
                            <tr>
                            <td>{index+1}</td>
                            <td>{item.id}</td>
                            <td>{item.nama_products}</td>
                            <td>
                              {item.deskripsi}
                            </td>
                            <td>
                              {item.rating}
                            </td>
                            <td>
                              {item.price}
                            </td>
                            <td>
                              {item.stock}
                            </td>
                            <td>
                            
                            </td>
                              <td>
                                  {item.createdAt}
                             </td>
                             <td>
                                  {item.updatedAt}
                             </td>
                             <td>
                                <div className="row">
                                  <div className="col-6">
                                  <a href="#" class="btn btn-icon btn-warning">
                                      <i class="far fa-edit"></i>
                                    </a>
                                  </div>
                                  <div className="col-6">
                                    <a href="#" class="btn btn-icon btn-danger">
                                        <i class="fa fa-trash"></i>
                                    </a>
                                    </div>
                                </div>
                             </td>
                          </tr>
                          )
                       }) }
                          
                        </tbody>
                      </table>
                    </div>
               
            </div>
            <div class="card-footer bg-whitesmoke">This is card footer</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MasterProduct