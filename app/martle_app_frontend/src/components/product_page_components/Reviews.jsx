import React from "react";
import { Box, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StarIcon from "@mui/icons-material/Star";
import { getToken } from "../../services/LocalStorageService";
import { useGetReviewsAPIQuery } from "../../services/ratingAndReview";

const Reviews = (props) => {
  const { access_token } = getToken();

  const { data = [], isLoading } = useGetReviewsAPIQuery({
    access_token: access_token,
    product_id: props.product_id,
  });

  return (
    <Box sx={{ display: "grid", gap: "25px" }}>
      {data
        ? data.data?.map((row, id) => (
            <Box
              key={id}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  gap: "5px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <AccountCircleIcon
                    sx={{ color: "#B0B0B0", fontSize: "40px" }}
                  />
                  <Typography fontSize={14}>{row.user_name}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <Box>
                    <Typography fontSize={12} fontWeight={"bold"}>
                      {new Date(`${row.date}`).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      background: "green",
                      color: "white",
                      padding: "2px 6px",
                      borderRadius: "3px",
                    }}
                  >
                    <Typography fontSize={13}>{row.rating}</Typography>
                    <StarIcon sx={{ fontSize: "12px" }} />
                  </Box>
                </Box>
              </Box>
              <Box sx={{ width: "100%" }}>
                <Typography fontSize={13}>{row.content}</Typography>
              </Box>
            </Box>
          ))
        : []}
    </Box>
  );
};

export default Reviews;
