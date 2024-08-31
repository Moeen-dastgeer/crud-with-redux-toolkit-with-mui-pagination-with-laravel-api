import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setPage, setSearchQuery, setStatusFilter} from './features/productSlice';
import { Pagination, Stack} from '@mui/material';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import debounce from 'lodash.debounce';



export const PaginationWithBackEnd = () => {
    const dispatch = useDispatch();
    const { items, currentPage, totalPages, searchQuery, statusFilter} = useSelector(state => state.products);

    const [searchTerm, setSearchTerm] = useState(searchQuery);
    const [status, setStatus] = useState(statusFilter);

    useEffect(() => {
        dispatch(fetchProducts({ page: currentPage, searchQuery, statusFilter }));
    }, [dispatch, currentPage, searchQuery, statusFilter]);

    // Debounce the search input to prevent too many API calls
    const debouncedSearch = debounce((value) => {
        dispatch(setSearchQuery(value));
        dispatch(setPage(1));
    }, 100);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        debouncedSearch(value);
    };

    const handleStatusChange = (e) => {
        const value = e.target.value;
        setStatus(value);
        dispatch(setStatusFilter(value));
        dispatch(setPage(1));
    };


    const handlePageChange = (event, value) => {
        dispatch(setPage(value));
    };

    const handleDelete = (id) => {
        const a = confirm("Are you sure you wish to delete this item?");
        if(a)
        {
            dispatch(deleteProduct(id));
        }
        else
        {
            toast.error('Failed to delete product');
        }
    };


    return (
        <div className='card card-white'>
            <div className="card-header">
                <div className="row"> 
                    <div className="col-md-12">
                        <h2 className='text-center'>Products List</h2>
                    </div>    
                </div>
                <div className="row d-flex">
                    <div className="col-md-2">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            placeholder="Search products"
                            className='form-control'
                        />
                    </div>
                    Status: 
                    <div className="col-md-1">
                            <select value={status} onChange={handleStatusChange} className='form-control'>
                                <option value="">All</option>
                                <option value="1">Enable</option>
                                <option value="0">Disable</option>
                            </select>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className='table table-bordered table-striped'>
                    <thead>
                    <tr className='text-center'>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>DateTime</th>
                        <th className="text-center" width="210">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id} className='text-center'>
                                <td>{item.id}</td>
                                <td>{item.name} </td>
                                <td>{item.price} </td>
                                <td>{item.stock} </td>
                                <td>{item.created_at} </td>
                                <td>
                                    <Link to={`/edit/${item.id}`} className="btn btn-primary">Edit</Link>
                                    <button onClick={() => handleDelete(item.id)} className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Stack alignItems="center">
                <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                    />
                </Stack>
            </div>
        </div>
    );
}