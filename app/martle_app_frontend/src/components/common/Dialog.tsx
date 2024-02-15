import { ReactNode } from "react";
import { Dialog, DialogTitle } from "@mui/material";

interface Props {
  title?: string;
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

export default function AppDialog({ children, title, open, onClose }: Props) {
  return (
    <Dialog fullWidth open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      {children}
    </Dialog>
  );
}
