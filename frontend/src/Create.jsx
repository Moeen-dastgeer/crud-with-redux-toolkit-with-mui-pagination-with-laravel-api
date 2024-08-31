import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import http from './http';
import { useState,useEffect  } from "react"
import { createProduct } from './features/productSlice';
import { useDispatch } from 'react-redux';

export const Create = () => {
    const [categories, setCategories]  = useState([]);
  useEffect(()=>{
    fetchCategories();
  },[]);

  const fetchCategories = ()=>{
    http.get('/categories/list').then((res)=>{
        setCategories(res.data);
    });
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    dispatch(createProduct(formdata));
    navigate("/");
}

  return <>
    <div className="card card-white">
            <div className="card-header">
                <div className="row"> 
                    <div className="col-md-12">
                        <h2 className='text-center'>Add new</h2>
                    </div>
                </div>
            </div>
        <form onSubmit={handleFormSubmit} enctype="multipart/form-data">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-10">
                        <div className="row">
                            <div className="form-group col-md-12 col-sm-12">
                                <label>Title<span className="text-danger">*</span></label>
                                <input type="text" name="name" id="name" className="form-control"/>
                            </div>
                            <div className="form-group col-md-6 col-sm-12">
                                <label>Category<span className="text-danger">*</span></label><br />
                                <select name="category" id="category" className="form-control">
                                    <option value="">......Select......</option>
                                    {
                                        categories.map((category,index) => (
                                        <option key={index} value={category.id}> {category.name} </option>
                                     ))}
                                </select>
                            </div>
                            <div className="form-group col-md-6 col-sm-12">
                                <label>Price<span className="text-danger">*</span></label>
                                <input type="number" name="price" id="price" className="form-control"/>
                            </div>
                            <div className="form-group col-md-6 col-sm-12">
                                <label>Keywords</label>
                                <input type="text" name="keywords" id="keywords" className="form-control"/>
                            </div>
                            <div className="form-group col-md-6 col-sm-12">
                                <label>Stock</label><br />
                                <input type="number" name="stock" id="stock" className="form-control"/>
                            </div>
                            <div className="form-group col-md-6 col-sm-12">
                                <label>Image</label><br />
                                <input type="file" name="image" id="image" className="form-control"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group col-md-6 col-sm-12">
                    <label>Status</label><br />
                    <input type="radio" id="disable" name="status" value="0" />
                    <label className="form-check-label" for="disable">Disable</label>
                    <input type="radio" id="enable" name="status" value="1" checked />
                    <label className="form-check-label" for="enable">Enable</label>
                </div>
            </div>
            <div className="card-footer">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
</>

}




