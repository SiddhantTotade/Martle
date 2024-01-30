import { Box, Card, Radio, RadioGroup, Typography } from "@mui/material";

import AppContainer from "../common/Container";

export default function PaymentOptions() {
  return (
    <AppContainer>
      <RadioGroup sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <Card
          elevation={5}
          sx={{ display: "flex", p: 1, alignItems: "center" }}
        >
          <Box>
            <Radio value="martle_pay" size="small" />
          </Box>
          <Box>
            <Typography fontSize="small" fontWeight="bold">
              Martle Pay - ₹0.00
            </Typography>
            <Typography fontSize="small">
              Pay via Martle Pay and get upto ₹100 cashback. Orders above ₹2000
            </Typography>
          </Box>
        </Card>
        <Card
          elevation={5}
          sx={{ display: "flex", p: 1, alignItems: "center" }}
        >
          <Box>
            <Radio value="no_cost_emi" size="small" />
          </Box>
          <Box>
            <Typography fontSize="small" fontWeight="bold">
              No Cost EMI
            </Typography>
            <Typography fontSize="small">
              EMI interest saving on selected credit cards. Orders above ₹6000
            </Typography>
          </Box>
        </Card>
        <Card
          elevation={5}
          sx={{ display: "flex", p: 1, alignItems: "center" }}
        >
          <Box>
            <Radio value="cash_on_delivery" size="small" />
          </Box>
          <Box>
            <Typography fontSize="small" fontWeight="bold">
              Cash on Delivery / Pay on Delivery
            </Typography>
            <Typography fontSize="small">Cash, UPI, Cards accepted</Typography>
          </Box>
        </Card>
      </RadioGroup>
    </AppContainer>
  );
}
