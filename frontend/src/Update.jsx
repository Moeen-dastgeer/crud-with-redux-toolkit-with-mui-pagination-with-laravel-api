import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import http from './http';
import { useState,useEffect  } from "react"
import { updateProduct } from './features/productSlice';
import { useDispatch } from 'react-redux';

export const Update = () => {
    const [check,setChecked] = useState("");
    const [data,setData] = useState({});
    const [categories, setCategories]  = useState([]);
    const {id} = useParams();
      useEffect(()=>{
        http.get('products/edit/'+id).then((res)=>{
            setData({
              id:res.data.id,
              name:res.data.name,
              price:res.data.price,
              image:res.data.image,
              cat_id:res.data.category_id,
              keywords:res.data.keywords,
              stock:res.data.stock,
              status:res.data.status
            });
          });
          fetchCategories();
          setChecked(data.status);
      },[]);

      
    const handleChecked = (e)=>{
            setChecked(e.target.value);
    }    
      const fetchCategories = ()=>{
        http.get('/categories/list').then((res)=>{
            setCategories(res.data);
        });
      }
      
      const dispatch = useDispatch();
      const navigate = useNavigate();    
     
    const handleformupdate = (e) => {
            e.preventDefault();
            const formdata = new FormData(e.target);
            formdata.append('status',check);
            dispatch(updateProduct(formdata));
            navigate("/");
    }

  return <>
    <div className="card card-white">
            <div className="card-header">
                <div className="row"> 
                    <div className="col-md-12">
                        <h2 className='text-center'>Update Product</h2>
                    </div>
                </div>
            </div>
        <form onSubmit={handleformupdate} enctype="multipart/form-data">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-10">
                        <div className="row">
                            <div className="form-group col-md-12 col-sm-12">
                                <label>Title<span className="text-danger">*</span></label>
                                <input type="text" name="name" id="name" defaultValue={data.name}  className="form-control"/>
                                <input type="hidden" name="id" id="id" defaultValue={data.id}  className="form-control"/>
                            </div>
                            <div className="form-group col-md-6 col-sm-12">
                                <label>Category<span className="text-danger">*</span></label><br />
                                <select name="category" id="category" className="form-control">
                                    <option value="">......Select......</option>
                                    {
                                        categories.map((category,index) => (
                                        <option key={index} value={category.id} selected={category.id == data.cat_id}> 
                                            {category.name} 
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group col-md-6 col-sm-12">
                                <label>Price<span className="text-danger">*</span></label>
                                <input type="number" name="price" id="price" defaultValue={data.price} className="form-control"/>
                            </div>
                            <div className="form-group col-md-6 col-sm-12">
                                <label>Keywords</label>
                                <input type="text" name="keywords" id="keywords" defaultValue={data.keywords}  className="form-control"/>
                            </div>
                            <div className="form-group col-md-6 col-sm-12">
                                <label>Stock</label><br />
                                <input type="number" name="stock" id="stock" defaultValue={data.stock}  className="form-control"/>
                            </div>
                            <div className="form-group col-md-6 col-sm-12">
                                <label>Image</label><br />
                                <input type="file" name="image" id="image" className="form-control"/><br />
                                <img src={"http://127.0.0.1:8000/storage/images/products/"+data.image} alt="" width="200px"/><br />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group col-md-6 col-sm-12">
                    <label>Status</label><br />
                    <input type="radio" id="disable" name="status" value="0"  checked={data.status==0||check==0} onChange={handleChecked}/>
                    <label className="form-check-label" for="disable">Disable</label>
                    <input type="radio" id="enable" name="status" value="1"  checked={data.status==1||check==1} onChange={handleChecked}/>
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




