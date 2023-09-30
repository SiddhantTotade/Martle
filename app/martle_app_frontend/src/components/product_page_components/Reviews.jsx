import React from "react";
import { Box, Collapse, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StarIcon from "@mui/icons-material/Star";
import { getToken } from "../../services/LocalStorageService";
import { useGetReviewsAPIQuery } from "../../services/ratingAndReview";
import { useGetLoggedInUserQuery } from "../../services/userAuthAPI";
import getRatingColor from "../../shared/Rating and Review/RatingColors";

import ContentCollapse from "../ContentCollapse";

const Reviews = (props) => {
  const { access_token } = getToken();

  const user = useGetLoggedInUserQuery(access_token).data;

  const { data = [], isLoading } = useGetReviewsAPIQuery({
    access_token: access_token,
    product_id: props.product_id,
  });

  const [expanded, setExpanded] = React.useState(false);

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
                    sx={{ color: "#2979ff", fontSize: "40px" }}
                  />
                  <Typography fontSize={14}>{user.name}</Typography>
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
                    <Typography fontSize={12}>
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
                      fontSize={13}
                    >
                      {row.rating}
                    </Typography>
                    <StarIcon
                      sx={{
                        color: row.rating <= "1.5" ? "#000000" : "",
                        fontSize: "12px",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
              <Box sx={{ width: "100%" }}>
                {row.content.length >= 350 ? (
                  <Typography
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      "-webkit-line-clamp": "3",
                      "-webkit-box-orient": "vertical",
                    }}
                    fontSize={13}
                  >
                    {!expanded ? row.content : ""}
                  </Typography>
                ) : (
                  <Typography fontSize={13}>{row.content}</Typography>
                )}
                {row.content.length >= 350 ? (
                  <Typography fontSize={13}>
                    <ContentCollapse
                      handleRatingReview={handleExpandClick}
                      data={row.content}
                    />
                  </Typography>
                ) : (
                  ""
                )}
              </Box>
            </Box>
          ))
        : []}
    </Box>
  );
};

export default Reviews;
