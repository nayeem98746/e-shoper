import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProduct = createAsyncThunk(
  'allProducts/fetchAllProducts',
  async()=>{
    const response = await fetch('./fakeData/fakeData.json')
    .then( res => res.json())
    return response;
  }
)

const productSlice = createSlice({
  name:'Products',
  initialState:{
    allProducts: [],
    displayProducts:[],
    productCategory:'Man',
    isLoading: true
  },
  reducers: {
    setDisplayProduct : (state,action)=>{
      if(state.allProducts.length > 0){
        const categoryProducts = state.allProducts.filter( p => p.catagory === state.productCategory)
        state.displayProducts = categoryProducts;
      }
    },
    setProductsCategory: (state,action)=>{
      state.productCategory = action.payload;
      const categoryProducts = state.allProducts.filter( p => p.catagory === state.productCategory)
      state.displayProducts = categoryProducts;
    },

  },
  extraReducers: ( builder ) =>{
    builder.addCase(fetchProduct.fulfilled,(state, action)=>{
      state.allProducts = action.payload;
      state.isLoading = false;
    })
  }
})
export const { setDisplayProduct, setProductsCategory } = productSlice.actions;
export default productSlice.reducer;