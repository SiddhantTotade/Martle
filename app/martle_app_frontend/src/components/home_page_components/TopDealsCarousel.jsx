import { Button, Link, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StarIcon from "@mui/icons-material/Star";
import Heart from "../base_components/Heart";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LoaderSkeleton from "../base_components/LoaderSkeleton";
import {
  useGetFavoriteAPIQuery,
  useAddToFavoriteAPIMutation,
  useRemoveFromFavoritesMutation,
} from "../../services/favoriteService";
import {
  useGetCartAPIQuery,
  useAddToCartAPIMutation,
  useRemoveFromCartMutation,
} from "../../services/cartService";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1368, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const cardSkeleton = [...Array(window.screen.width <= 500 ? 1 : 6)].map(
  (row, i) => (
    <Paper
      key={i}
      sx={{
        height: 320,
        width: 270,
        gap: "10px",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        borderRadius: "5px",
        ":hover": { cursor: "pointer" },
        "@media (max-width: 500px)": { width: "100%", height: 220 },
      }}
    >
      {window.screen.width <= 500 ? (
        <LoaderSkeleton barPadding={10} />
      ) : (
        <>
          <LoaderSkeleton barPadding={10} />
          <LoaderSkeleton barPadding={5} />
          <LoaderSkeleton barPadding={1} />
        </>
      )}
    </Paper>
  )
);

const TopDealsCarousel = (props) => {
  const [addFavourite, responseAddFavorite] = useAddToFavoriteAPIMutation();

  const [removeFavorite, responseRemoveFavorite] =
    useRemoveFromFavoritesMutation();

  const getFavorite = useGetFavoriteAPIQuery(props.access_token);

  const favoriteArray = [
    getFavorite.data
      ? getFavorite.data?.map((row, i) => {
          return row.id;
        })
      : null,
  ];

  // const [cart, reponseCart] = useAddToCartAPIMutation();

  const addToFavorite = (access_token, product_id, user_id) => {
    addFavourite({ access_token, product_id });
  };

  // const removeFromFavorite = (access_token, product_id, user_id) => {
  //   removeFavorite({ access_token, product_id });
  // };

  // const addToCart = (access_token, id) => {
  //   // addFavorite({ access_token, id });
  // };

  const mobileCard = props.data?.map((row, i) => {
    return (
      <Paper
        key={i}
        sx={{
          height: 220,
          width: "100%",
          display: "flex",
          "@media screen and (min-width: 1368px)": {
            display: "none",
            visibility: "hidden",
          },
        }}
      >
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={`http://127.0.0.1:8000` + row.product_cover_image}
            alt="img"
            width="50%"
          />
        </Box>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            padding: "15px",
          }}
        >
          <Box>
            <Typography fontSize={14}>{row.product_title}</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <Box>
                <CurrencyRupeeIcon fontWeight="bold" fontSize="15px" />
              </Box>
              <Box>
                <Typography fontWeight="bold" fontSize={15}>
                  {row.product_discounted_price.toLocaleString("en-IN", {
                    currency: "INR",
                  })}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <Typography
                fontWeight="bold"
                fontSize={14}
                sx={{
                  padding: "5px",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "5px",
                  background: "gray",
                  color: "#ffff",
                  gap: "2px",
                  height: "25px",
                }}
              >
                3.4
                <StarIcon fontSize="12" />
              </Typography>
              <Typography
                fontWeight="bold"
                fontSize={14}
                sx={{
                  padding: "5px",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "5px",
                  background: "crimson",
                  color: "#ffff",
                  height: "25px",
                }}
              >
                15% off
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Box>
              <Button variant="contained">Add to Cart</Button>
            </Box>
            <Box>
              <Heart />
            </Box>
          </Box>
        </Box>
      </Paper>
    );
  });

  const desktopCard = props.data?.map((row, i) => {
    return (
      <Paper
        key={i}
        sx={{
          height: 320,
          width: 270,
          gap: "10px",
          display: "flex",
          flexDirection: "column",
          borderRadius: "5px",
          ":hover": { cursor: "pointer" },
          "@media (max-width: 500px)": { width: "100%" },
        }}
      >
        {favoriteArray ? (
          favoriteArray[0]?.includes(row.id) ? (
            <div
              onClick={() => {
                removeFavorite(props.access_token, row.id);
              }}
            >
              <Heart isFavourite={true} />
            </div>
          ) : (
            <div onClick={() => addToFavorite(props.access_token, row.id)}>
              <Heart isFavourite={false} />
            </div>
          )
        ) : (
          ""
        )}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "100vh",
            maxHeight: "34vh",
            width: "170px",
            translate: "30% 0%",
            position: "relative",
            overflow: "hidden",
            "@media (max-width: 500px)": {
              display: "flex",
              justifyContent: "center",
              width: "60%",
            },
          }}
        >
          <img
            className="object-contain absolute h-full p-1"
            src={`http://127.0.0.1:8000` + row.product_cover_image}
            alt="img"
            width="100%"
          />
        </Box>
        <Link
          href={`/api/product/` + row.product_slug}
          sx={{ textDecoration: "None", color: "black" }}
        >
          <Typography
            fontSize={12}
            sx={{
              paddingLeft: "10px",
              paddingRight: "10px",
              ":hover": { color: "#078dfa" },
            }}
          >
            {row.product_title}
          </Typography>
        </Link>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              gap: "0",
            }}
          >
            <Typography
              fontWeight="bold"
              fontSize={17}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <CurrencyRupeeIcon fontSize="10px" />
              {row.product_discounted_price.toLocaleString("en-IN", {
                currency: "INR",
              })}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "4px" }}>
            <Typography
              fontWeight="bold"
              fontSize={14}
              sx={{
                padding: "5px",
                display: "flex",
                alignItems: "center",
                borderRadius: "5px",
                background: "gray",
                color: "#ffff",
                gap: "2px",
                height: "25px",
              }}
            >
              3.4
              <StarIcon fontSize="12" />
            </Typography>
            <Typography
              fontWeight="bold"
              fontSize={14}
              sx={{
                padding: "5px",
                display: "flex",
                alignItems: "center",
                borderRadius: "5px",
                background: "crimson",
                color: "#ffff",
                height: "25px",
              }}
            >
              15% off
            </Typography>
          </Box>
        </Box>
        <Button
          variant="contained"
          sx={{
            borderRadius: "0 0 5px 5px",
            marginTop: "auto",
            width: "100%",
          }}
        >
          Add to cart
        </Button>
      </Paper>
    );
  });

  return (
    <div className="w-HeaderSwiper m-auto mt-12 justify-center">
      <Typography
        fontSize={30}
        sx={{
          color: "#fff",
          marginLeft: "10px",
          marginBottom: "5px",
          letterSpacing: "2px",
          fontFamily: "fantasy",
        }}
      >
        Top Deals
      </Typography>
      <Carousel
        itemClass="carousel"
        slidesToSlide={3}
        responsive={responsive}
        arrows={true}
        renderButtonGroupOutside={true}
      >
        {props.isLoading
          ? cardSkeleton
          : window.screen.width <= 500
          ? mobileCard
          : desktopCard}
      </Carousel>
    </div>
  );
};

export default TopDealsCarousel;
