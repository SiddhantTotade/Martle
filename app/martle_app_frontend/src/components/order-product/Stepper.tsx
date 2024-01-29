import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import BusinessIcon from "@mui/icons-material/Business";
import PaymentsIcon from "@mui/icons-material/Payments";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SecondaryButton from "../common/SecondaryButton";
import Address from "../common/order-product/Address";

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
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={index} {...stepProps}>
              <StepLabel {...labelProps}>{label.lable}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {activeStep + 1 && <Address />}
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
      )}
    </Box>
  );
}
