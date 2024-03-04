import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RootState } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "@/components/common/navbar/Navbar";
import Footer from "@/components/common/footer/Footer";
import AppContainer from "@/components/common/Container";
import ProductDetails from "@/components/product/ProductDetails";
import { useProductBySlugQuery } from "@/redux/services/appApiSlice";
import ProductImageMagnifier from "@/components/product/ProductImageMagnifier";
// import MDEditor from "@/components/product/Markdown";
import { useViewCount } from "@/hooks/app/viewCount";
import Specification from "@/components/product/Specification";
import MarkDownPreview from "@/components/product/MarkdownPreview";
import RatingAndReviews from "@/components/product/RatingAndReviews";
import QuestionAndAnswer from "@/components/product/QuestionAndAnswer";
import MobileProductImage from "@/components/product/MobileProductImage";
import { setCart, setFavorite } from "@/redux/features/favoriteAndCartSlice";
import { recommendFunction } from "@/components/common/utils/recommendFunction";
import MobileCardSkeleton from "@/components/home/ui/MobileCardSkeleton";
// import MDEditor from "../components/MarkDown";
// import MarkDownPreview from "../components/MarkDownPreview";

export default function ProductLayout() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.id);
  const { slug } = useParams();
  const { data, isLoading } = useProductBySlugQuery(slug);
  const { onSubmit } = useViewCount();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSubmit(slug);
    }, 60000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

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
            width: "100%",
            display: "grid",
            mt: 3,
          },
        }}
      >
        <AppContainer
          sx={{
            display: "none",
            "@media(max-width: 600px)": {
              mt: 1,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              overflow: "auto",
            },
          }}
        >
          {isLoading ? (
            <MobileCardSkeleton />
          ) : (
            <MobileProductImage product_images={data?.[0].product_images} />
          )}
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
