import { ReactNode } from "react";
import { Dialog, DialogTitle, SxProps } from "@mui/material";

interface Props {
  title?: string;
  children: ReactNode;
  open: boolean;
  titleStyle?: SxProps;
  onClose: () => void;
}

export default function AppDialog({
  children,
  title,
  open,
  onClose,
  titleStyle,
}: Props) {
  return (
    <Dialog sx={{ p: 0, m: 0 }} fullWidth open={open} onClose={onClose}>
      <DialogTitle sx={{ ...titleStyle }}>{title}</DialogTitle>
      {children}
    </Dialog>
  );
}
