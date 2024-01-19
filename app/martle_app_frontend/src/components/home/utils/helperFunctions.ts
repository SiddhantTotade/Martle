export const productDiscount = (sp: number, cp: number) => {
  return (((sp - cp) / sp) * 100).toFixed(1);
};
