export const productDiscount = (sp: number, cp: number) => {
  return (((sp - cp) / sp) * 100).toFixed(1);
};

export const productSavePrice = (sp: number, cp: number) => {
  return sp - cp;
};

export const deliveryDate = (inputDate, product_price) => {
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
