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
