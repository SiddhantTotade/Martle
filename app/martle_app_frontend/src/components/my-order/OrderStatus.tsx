import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
  styled,
  Badge,
  Box,
} from "@mui/material";
import { Check } from "@mui/icons-material";

import { steps } from "./order-status-data/orderStatus";
import { orderStatus } from "../common/utils/helperFunctions";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#2196f3",
    color: "#2196f3",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export default function OrderStatus({ status }: any) {
  const activeStep = orderStatus(status) as number;

  return (
    <>
      {activeStep === 7 ? (
        <Typography fontWeight="bold" color="error">
          This order is cancelled
        </Typography>
      ) : (
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.slice(0, activeStep + 1).map((step, index) => (
            <Step key={index}>
              <StepLabel icon={<Check color="primary" />}>
                <Typography fontSize="small">{step.label}</Typography>
              </StepLabel>
              <StepContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <StyledBadge overlap="circular" variant="dot" />
                  <Typography fontSize="small">{step.description}</Typography>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      )}
    </>
  );
}
