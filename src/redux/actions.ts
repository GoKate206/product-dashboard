import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../data/types";
import mockData from '../data/mockData.json';

interface ProductState {
    loading: boolean;
    data: Product | undefined;
    error: unknown;
}

const initialState: ProductState = {
    loading: false,
    data: undefined,
    error: null,
}

export const fetchProduct = createAsyncThunk('product/fetchProduct', async () => {
    return new Promise<Product>((resolve) => {
        setTimeout(() => {
            resolve(mockData[0])
        }, 500)
    })
})

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        fetchProductRequest: (state) => {
            state.loading = true;
            state.data = undefined;
            state.error = null;
        },
        fetchProductSuccess: (state, action: PayloadAction<Product>) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        },
        fetchProductError: (state, action: PayloadAction<unknown>) => {
            state.loading = false;
            state.error = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProduct.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchProduct.fulfilled, (state, action: PayloadAction<Product>) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error ?? 'Failed to fetch Product';
        })
    }
})

export const { fetchProductRequest, fetchProductSuccess, fetchProductError } = productSlice.actions;
export default productSlice.reducer;