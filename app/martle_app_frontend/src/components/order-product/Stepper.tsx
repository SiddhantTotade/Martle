import * as React from "react";
import { Box, Stepper, Step, StepLabel } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import PaymentsIcon from "@mui/icons-material/Payments";
import LocalMallIcon from "@mui/icons-material/LocalMall";

import SecondaryButton from "../common/SecondaryButton";
import Address from "../common/order-product/Address";
import PaymentOptions from "./PaymentOptions";
import PlaceOrder from "./PlaceOrder";

const steps = [
  { lable: "Select address", icon: BusinessIcon },
  { lable: "Choose payment method", icon: PaymentsIcon },
  { lable: "Confirm order", icon: LocalMallIcon },
];

export default function OrderProceedStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          return (
            <Step key={index} {...stepProps}>
              <StepLabel>{label.lable}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <React.Fragment>
        {activeStep === 0 && <Address />}
        {activeStep === 1 && <PaymentOptions />}
        {activeStep === 2 && <PlaceOrder />}
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            flexDirection: "row",
            gap: "10px",
            pt: 2,
          }}
        >
          <Box>
            <SecondaryButton
              variant="outlined"
              sx={{ display: activeStep === 0 ? "none" : "block" }}
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </SecondaryButton>
          </Box>
          <Box>
            <SecondaryButton
              variant={
                activeStep === steps.length - 1 ? "contained" : "outlined"
              }
              onClick={handleNext}
            >
              {activeStep === steps.length - 1
                ? "Confirm & Place Order"
                : "Next"}
            </SecondaryButton>
          </Box>
        </Box>
      </React.Fragment>
    </Box>
  );
}
