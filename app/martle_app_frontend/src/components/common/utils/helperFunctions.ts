interface CartItem {
  product_selling_price: number;
  product_discounted_price: number;
  quantity: number;
}

export const convertToINR = (price: any) => {
  return price.toLocaleString("en-IN", {
    maximumFractionDigits: 2,
    style: "currency",
    currency: "INR",
  });
};

export const productDiscount = (sp: number, cp: number) => {
  return (((sp - cp) / sp) * 100).toFixed(1) as unknown as number;
};

export const productSavePrice = (sp: number, cp: number) => {
  return sp - cp;
};

export const deliveryDate = (inputDate: string, product_price: string) => {
  const dateObject = new Date(inputDate);

  if (product_price <= "4999") {
    dateObject.setDate(dateObject.getDate() + 6);
  } else if (product_price > "5000" && product_price <= "14999") {
    dateObject.setDate(dateObject.getDate() + 4);
  } else if (product_price > "15000" && product_price < "5000000") {
    dateObject.setDate(dateObject.getDate() + 2);
  }
  const formattedDate = dateObject.toDateString();

  return formattedDate;
};

export const deliveryCharges = (product_price: string) => {
  if (product_price >= "499") {
    return 0;
  } else if (product_price < "499" && product_price >= "200") {
    return 40;
  } else if (product_price <= "199") {
    return 60;
  }
};

export const orderTotal = (quantity: number, product_price: number) => {
  return quantity * product_price;
};

export const orderStatus = (status: string) => {
  switch (status) {
    case "pending":
      return 0;
    case "dispatched":
      return 1;
    case "facility":
      return 2;
    case "on the way":
      return 3;
    case "delivered":
      return 4;
    case "return":
      return 5;
    case "returned":
      return 6;
    case "cancelled":
      return 7;
    default:
      return undefined;
  }
};

export const extractProductId = (products: any) => {
  const productIds = products?.map((product: any) => product.id);
  return productIds;
};

export const extractCartData = (products: any) => {
  return products.map((product: any) => ({
    product_id: product.id,
    product_discounted_price: product.product_discounted_price,
    product_selling_price: product.product_selling_price,
    quantity: 1,
  }));
};

export const cartOrderSummary = async (data: Record<string, CartItem>) => {
  return new Promise((resolve, reject) => {
    try {
      let totalPrice = 0;
      let savePrice = 0;
      let discount = 0;
      let items = 0;

      const dataArray = Object.values(data);

      for (const item of dataArray) {
        if (
          item.product_discounted_price !== undefined &&
          item.quantity !== undefined
        ) {
          items += item.quantity as number;
          totalPrice += orderTotal(
            item.product_discounted_price,
            item.quantity
          ) as number;
          savePrice += productSavePrice(
            (item.product_selling_price * item.quantity) as number,
            (item.product_discounted_price * item.quantity) as number
          );
          discount += Number(
            productDiscount(
              item.product_selling_price,
              item.product_discounted_price
            )
          );
        }
      }

      const summaryData = {
        orderTotal: convertToINR(totalPrice),
        deliveryCharges: deliveryCharges(totalPrice as unknown as string),
        productSavePrice: convertToINR(Number(savePrice.toFixed(1))),
        productDiscount: discount,
        totalItems: items,
      };

      resolve(summaryData);
    } catch (error) {
      reject(error);
    }
  });
};

export const shortText = (title: string, end: number) => {
  return title.substring(0, end);
};

export const checkIfQueryContainsNumbers = (query: string) => {
  const numRegex = /\d/;
  if (numRegex.test(query)) return true;
  else return false;
};

export const extractNumbers = (query: any) => {
  const numbersArr = query.match(/\d+/g);
  const numbers = numbersArr ? numbersArr.map(Number) : [];

  return numbers;
};

export const checkoutProductData = (
  product_quantity: number,
  product_name: string,
  product_price: string,
  product_saving: string,
  product_discount: number,
  product_payment_method: string,
  product_shipping_charges: any,
  product_order_total: string
) => {
  return {
    product_quantity: product_quantity,
    product_name: product_name,
    product_price: product_price,
    product_saving: product_saving,
    product_discount: product_discount,
    product_payment_method: product_payment_method,
    product_shipping_charges: product_shipping_charges,
    product_order_total: product_order_total,
  };
};

export const checkoutProductCartData = (data: any) => {
  return {
    product_cart_data: data?.map((product: any) => ({
      product_id: product.id,
      product_title: product.product_title,
      product_discounted_price: product.product_discounted_price,
    })),
  };
};

export const addQuantityToProducts = (productCartData, quantityData) => {
  return productCartData.product_cart_data.map((product) => ({
    ...product,
    product_quantity: quantityData[product.product_id]?.quantity || 0,
  }));
};

export const checkoutAddressData = (
  user_address: string,
  user_locality: string,
  user_city: string,
  user_state: string,
  user_country: string,
  user_zipcode: string
) => {
  return {
    user_address: user_address,
    user_locality: user_locality,
    user_city: user_city,
    user_state: user_state,
    user_country: user_country,
    user_zipcode: user_zipcode,
  };
};
