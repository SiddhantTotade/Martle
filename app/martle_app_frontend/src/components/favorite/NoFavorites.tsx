import { Box, Typography } from "@mui/material";

export default function NoFavorites() {
  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
      }}
    >
      <svg
        fill="#2196f3"
        height="100px"
        width="100px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 368.40 368.40"
        xmlSpace="preserve"
        transform="rotate(45)"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#CCCCCC"
          strokeWidth="0.7367999999999999"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <g>
              <g>
                <path d="M196,282.063c3.2,0,6.4-2,7.6-5.2l4.4-12c1.6-4-0.8-8.8-4.8-10.4c-4-1.6-8.8,0.8-10.4,4.8l-4.4,12 c-1.6,4,0.8,8.8,4.8,10.4C194,282.063,195.2,282.063,196,282.063z"></path>{" "}
                <path d="M293.2,20.463c-35.2-12.8-71.2-2.4-96.8,28c-2,2.4-4.4,6.8-4.8,7.2c-2,3.2-1.6,7.2,1.2,10l24,24l-86,48.8 c-3.6,2-6,5.6-6.4,9.6c-0.4,4.4,2,8.8,6.4,11.2l81.2,44.8l-9.6,27.6c-1.6,4,0.8,8.8,4.8,10c4,1.6,8.8-0.8,10-4.8l10.8-30.4 c1.2-2.8,1.2-6,0-9.2c-1.2-2.8-3.2-4.8-6-6l-77.2-42.4l84-48.4c3.2-1.6,5.6-4.8,6-8.4c0.8-4-0.8-7.6-3.6-10.4l-22.8-22.8 c0,0,0,0,0-0.4c21.2-25.2,50-33.6,79.2-22.8c32,11.6,64.4,48,64.4,102.4c0,75.2-62.4,123.2-128,174c-9.2,7.2-18.4,14-27.2,21.2 c-7.6,5.6-18,5.6-25.2,0c-8.8-6.8-17.6-14-26.8-20.8c-63.2-48.8-128.8-99.6-128.8-174.4c0-43.6,22.4-82.8,56.8-99.6 c25.6-12.4,52.4-9.6,74,7.2c3.6,2.8,8.4,2,11.2-1.2c2.8-3.6,2-8.4-1.2-11.2c-26.4-20.8-59.6-24.4-90.8-9.2c-40,19.6-66,64-66,114 c0,82.8,68.4,136,134.8,187.2c8.8,6.8,18,13.6,26.8,20.8c6.8,5.2,14.4,7.6,22.4,7.6s16-2.4,22.8-7.6c8.8-7.2,18-14,27.2-21.2 c66-51.2,134.4-104,134.4-186.8C368,84.063,338,36.863,293.2,20.463z"></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <Typography color="primary" fontSize="large">
        Nothing in Favorites
      </Typography>
    </Box>
  );
}
