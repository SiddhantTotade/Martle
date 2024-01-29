import {
  FormControl,
  DialogContent,
  DialogActions,
  CircularProgress,
} from "@mui/material";

import ActionContainer from "../../ActionContainer";
import SecondaryButton from "../../SecondaryButton";
import PrirmaryButton from "../../PrirmaryButton";
import InputField from "../../Input";
import { useUpdateAddress } from "@/hooks/app/updateAddress";

interface Props {
  userAddress: any;
  handleClose: any;
}

export default function AddressForm({ userAddress, handleClose }: Props) {
  const { handleSubmit, onSubmit, control, isLoading } = useUpdateAddress();

  return (
    <FormControl fullWidth component="form" onSubmit={handleSubmit(onSubmit)}>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
        }}
      >
        {["address", "locality", "city", "state", "country", "zipcode"].map(
          (address, index) => (
            <InputField
              key={index}
              name={address}
              size="small"
              defaultOutsideValue={userAddress[`${address}`]}
              control={control}
              type={address === "zipcode" ? "number" : "text"}
              label={address.charAt(0).toUpperCase() + address.slice(1)}
            />
          )
        )}
      </DialogContent>
      <DialogActions
        sx={{ width: "100%", display: "flex", justifyContent: "start" }}
      >
        <SecondaryButton variant="outlined" onClick={handleClose}>
          Cancel
        </SecondaryButton>
        <ActionContainer sx={{ display: "flex", justifyContent: "center" }}>
          {isLoading ? (
            <CircularProgress
              size="small"
              sx={{
                width: "39px",
                justifyContent: "center",
                display: "flex",
              }}
            />
          ) : (
            <PrirmaryButton type="submit" label="Submit" variant="contained" />
          )}
        </ActionContainer>
      </DialogActions>
    </FormControl>
  );
}
