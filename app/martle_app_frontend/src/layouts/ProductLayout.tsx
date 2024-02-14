import { useParams } from "react-router-dom";

import { useProductBySlugQuery } from "@/redux/services/appApiSlice";
import Navbar from "@/components/common/navbar/Navbar";
import Footer from "@/components/common/footer/Footer";
import ProductImageMagnifier from "@/components/product/ProductImageMagnifier";
import AppContainer from "@/components/common/Container";
import ProductDetails from "@/components/product/ProductDetails";
// import TechnicalDetails from "../components/product_page_components/TechnicalDetails";
// import RatingAndReviews from "../components/product_page_components/RatingAndReviews";
// import QuestionAndAnswer from "../components/product_page_components/QuestionAndAnswer";
import MDEditor from "@/components/product/Markdown";
import MarkDownPreview from "@/components/product/MarkdownPreview";
import Specification from "@/components/product/Specification";
import QuestionAndAnswer from "@/components/product/QuestionAndAnswer";
import RatingAndReviews from "@/components/product/RatingAndReviews";
import MobileProductImage from "@/components/product/MobileProductImage";
import { useDispatch, useSelector } from "react-redux";
import { setCart, setFavorite } from "@/redux/features/favoriteAndCartSlice";
import { useEffect } from "react";
import { RootState } from "@reduxjs/toolkit/query";
import { recommendFunction } from "@/components/common/utils/recommendFunction";
// import MDEditor from "../components/MarkDown";
// import MarkDownPreview from "../components/MarkDownPreview";

export default function ProductLayout() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.id);
  const { slug } = useParams();
  const { data, isLoading } = useProductBySlugQuery(slug);

  useEffect(() => {
    dispatch(
      setFavorite({
        favorite: data?.[0].id,
        favoriteToUser: data?.[0].favorite,
      })
    );
    dispatch(setCart({ cart: data?.[0].id, cartToUser: data?.[0].cart }));
  });

  useEffect(() => {
    recommendFunction(data, user);
  }, []);

  return (
    <>
      <Navbar />
      <AppContainer
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "95%",
          position: "relative",
          mt: "6rem",
          "@media (max-width: 1000px)": {
            display: "grid",
            width: "100%",
          },
        }}
      >
        <AppContainer
          sx={{
            m: 0,
            p: 2,
            width: "100%",
            display: "none",
            "@media (max-width: 1000px)": {
              display: "block",
              overflow: "auto",
            },
          }}
        >
          <MobileProductImage />
        </AppContainer>
        <AppContainer
          sx={{
            m: 0,
            width: "50%",
            "@media (max-width: 1000px)": {
              display: "none",
            },
          }}
        >
          <ProductImageMagnifier
            isLoading={isLoading}
            product_images={data?.[0].product_images}
            product_id={data?.[0].id}
            product_favorite={data?.[0].favorite}
          />
        </AppContainer>
        <AppContainer
          sx={{
            m: 0,
            display: "grid",
            gap: "20px",
            "@media (max-width: 1300px)": {
              width: "60%",
            },
            "@media (max-width: 1000px)": {
              width: "100%",
            },
          }}
        >
          <ProductDetails isLoading={isLoading} productData={data} />
          {/* <MDEditor /> */}
          <MarkDownPreview />
          <Specification data={data?.[0].product_details} />
          <QuestionAndAnswer product_id={data?.[0]?.id} />
          <RatingAndReviews product_id={data?.[0]?.id} />
        </AppContainer>
      </AppContainer>
      <Footer />
    </>
  );
}
