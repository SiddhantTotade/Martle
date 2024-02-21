import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ProductCartData {
  product_cart_data: Record<string, any>;
}

interface ProductData {
  product_quantity: number;
  product_name: string;
  product_price: string;
  product_saving: string;
  product_discount: number;
  product_payment_method: string;
  product_shipping_charges: string;
}

interface AddressData {
  user_address: string;
  user_locality: string;
  user_city: string;
  user_state: string;
  user_country: string;
  user_zipcode: string;
}

interface CheckoutState {
  productData: any[];
  productCartData: any[];
  addressData: any[];
}

const initialState: CheckoutState = {
  productData: [],
  productCartData: [],
  addressData: [],
};

export const checkoutProductDataSlice = createSlice({
  name: "checkout_product_data",
  initialState,
  reducers: {
    setProductData: (
      state: Draft<CheckoutState>,
      action: PayloadAction<ProductData>
    ) => {
      state.productData.push(action.payload);
    },
    setProductCartData: (
      state: Draft<CheckoutState>,
      action: PayloadAction<ProductCartData>
    ) => {
      state.productCartData.push(action.payload);
    },
    setAddressData: (
      state: Draft<CheckoutState>,
      action: PayloadAction<AddressData>
    ) => {
      state.addressData.push(action.payload);
    },
    unsetCheckoutData: (state) => {
      state.productData = initialState.productData;
      state.addressData = initialState.addressData;
    },
  },
});

export const {
  setProductData,
  setProductCartData,
  setAddressData,
  unsetCheckoutData,
} = checkoutProductDataSlice.actions;

export default checkoutProductDataSlice.reducer;
