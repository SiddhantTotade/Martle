import React from "react";
import { Box, Link } from "@mui/material";

import { navLinks } from "./AllLinks";

export default function Navlinks() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
      {navLinks.map((links, id) => (
        <React.Fragment key={id}>
          {/* {(id % 10 === 3 || id % 10 === 4) && ( */}
          <Link
            key={id}
            sx={{
              display: "flex",
              gap: "3px",
              alignItems: "center",
              "&:hover": {
                color: "#e3f2fd",
              },
            }}
            fontSize={14}
            color="inherit"
            href={links.link}
          >
            {links.label}
            {links.icon}
          </Link>
          {/* )} */}
        </React.Fragment>
      ))}
    </Box>
  );
}
