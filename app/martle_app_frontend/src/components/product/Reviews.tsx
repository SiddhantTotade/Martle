import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { getDarkRatingColor, getRatingColor } from "./ui/ratingColors";
import ContentCollapse from "./ContentCollapse";
import { useGetRatingAndReviewQuery } from "@/redux/services/appApiSlice";

export default function Reviews(props) {
  const { data, isLoading } = useGetRatingAndReviewQuery(props.product_id);
  const [expanded, setExpanded] = React.useState(false);
  const theme = useTheme();

  const handleExpandClick = (expand) => {
    setExpanded(expand);
  };

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
                    sx={{
                      color: "#2979ff",
                      fontSize: "30px",
                    }}
                  />
                  <Typography fontSize={12}>{row.user.name}</Typography>
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
                    <Typography fontSize={10}>
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
                      background: getRatingColor(row.rating),
                      color: "white",
                      padding: "2px 6px",
                      borderRadius: "3px",
                    }}
                  >
                    <Typography
                      sx={{ color: row.rating <= "1.5" ? "#000000" : "" }}
                      fontSize={10}
                    >
                      {row.rating}
                    </Typography>
                    <StarIcon
                      sx={{
                        color: row.rating <= "1.5" ? "#000000" : "",
                        fontSize: "10px",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
              <Box sx={{ width: "100%" }}>
                <Typography sx={{ textAlign: "justify" }} fontSize={13}>
                  {row.review.length >= 350
                    ? row.review.substring(0, 350)
                    : row.review}
                </Typography>
                {row.review.length >= 350 ? (
                  <ContentCollapse
                    handleRatingReview={handleExpandClick}
                    data={
                      <Typography sx={{ textAlign: "justify" }} fontSize={13}>
                        {row.review.substring(350)}
                      </Typography>
                    }
                  />
                ) : (
                  ""
                )}
              </Box>
            </Box>
          ))
        : []}
    </Box>
  );
}
