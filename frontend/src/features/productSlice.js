import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';


const API_URL = 'http://127.0.0.1:8000/api/products';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async ({ page = 1, searchQuery = '', statusFilter = ''}) => {
        const response = await axios.get(`${API_URL}/list`, {
            params: {
                page,
                search: searchQuery,
                status: statusFilter,
            },
        });
        return response.data;
    }
);

// Create a new product
export const createProduct = createAsyncThunk('products/createProduct', async (product, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${API_URL}/store`, product,{
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        toast.success('Product created successfully!');
        return response.data;
    } catch (error) {
        toast.error('Failed to create product');
        return rejectWithValue(error.response.data);
    }
});


// Update a product
export const updateProduct = createAsyncThunk('products/updateProduct', async (product, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${API_URL}/update/${product.id}`, product,{
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        toast.success('Product updated successfully!');
        return response.data;
    } catch (error) {
        toast.error('Failed to update product');
        return rejectWithValue(error.response.data);
    }
});

// Delete a product
export const deleteProduct = createAsyncThunk('products/deleteProduct', async (id, { rejectWithValue }) => {
    try {
        await axios.get(`${API_URL}/delete/${id}`);
        toast.success('Product deleted successfully!');
        return id;
    } catch (error) {
        toast.error('Failed to delete product');
        return rejectWithValue(error.response.data);
    }
});


const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        status: null,
        currentPage: 1,
        totalPages: 0,
        error: null,
        searchQuery: '',
        statusFilter: '',
    },
    reducers: {
        setPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        setStatusFilter: (state, action) => {
            state.statusFilter = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.items = action.payload.data;
                state.currentPage = action.payload.current_page;
                state.totalPages = action.payload.last_page;
                state.status = 'succeeded';
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                toast.error('Failed to fetch products');
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                const index = state.items.findIndex(item => item.id === action.payload.id);
                state.items[index] = action.payload;
                console.log(action.payload);
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.items = state.items.filter(item => item.id !== action.payload);
            });
    },
});

export const { setPage, setSearchQuery, setStatusFilter } = productSlice.actions;

export default productSlice.reducer;