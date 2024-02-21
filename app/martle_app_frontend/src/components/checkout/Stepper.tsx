import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RootState } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector } from "react-redux";
import BusinessIcon from "@mui/icons-material/Business";
import PaymentsIcon from "@mui/icons-material/Payments";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Box, Stepper, Step, StepLabel } from "@mui/material";

import PlaceOrder from "./PlaceOrder";
import PaymentOptions from "./PaymentOptions";
import Address from "../common/order-product/Address";
import SecondaryButton from "../common/SecondaryButton";
import { unsetCheckoutPayment } from "@/redux/features/checkoutSlice";

const steps = [
  { lable: "Select address", icon: BusinessIcon },
  { lable: "Choose payment method", icon: PaymentsIcon },
  { lable: "Confirm order", icon: LocalMallIcon },
];

export default function OrderProceedStepper() {
  const dispatch = useDispatch();
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const state = useSelector((state: RootState) => state.checkout);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setButtonDisabled(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    if (activeStep < steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    }
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    if (activeStep === 2) {
      dispatch(unsetCheckoutPayment());
    }
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
              disabled={isButtonDisabled === true ? true : false}
              sx={{
                display: activeStep === steps.length - 1 ? "block" : "none",
              }}
              onClick={() => navigate("/payment/proceed")}
            >
              Confirm & Place Order
            </SecondaryButton>
            <SecondaryButton
              sx={{
                display: activeStep === steps.length - 1 ? "none" : "block",
              }}
              variant={
                activeStep === steps.length - 1 ? "contained" : "outlined"
              }
              onClick={handleNext}
              disabled={
                activeStep === 0 && state.address
                  ? false
                  : activeStep === 1 && state.payment
                  ? false
                  : activeStep === 2
                  ? false
                  : true
              }
            >
              Next
            </SecondaryButton>
          </Box>
        </Box>
      </React.Fragment>
    </Box>
  );
}
