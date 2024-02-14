export const recommendFunction = (data: any, user: string) => {
  if (data && data.length > 0) {
    const productCategory = data[0].product_category.product_category;
    const brandName = data[0].product_brand.brand_name;
    const storedRecommendation = localStorage.getItem("recommend");
    const recommendArray = storedRecommendation
      ? JSON.parse(storedRecommendation)
      : [];

    const localStorageData = [
      {
        [user]: {
          [productCategory]: [brandName],
        },
      },
    ];

    localStorage.setItem("recommend", JSON.stringify(localStorageData));
  }
};
