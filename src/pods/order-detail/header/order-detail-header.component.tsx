import { SnackBar } from "@/core/components/snackbar";
import { Order } from "@/core/model";
import { formatDate } from "@/core/utils/date";
import {
  Box,
  Button,
  Divider,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { FC } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

interface Props {
  selectedOrder?: Order;
  statusPercentage: number;
  openSnackbar: boolean;
  setOpenSnackbar: (value: boolean) => void;
  handleSend: () => void;
}

export const OrderDetailHeaderComponent: FC<Props> = (props) => {
  const {
    selectedOrder,
    statusPercentage,
    openSnackbar,
    setOpenSnackbar,
    handleSend,
  } = props;

  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ m: "20px 25px 0px 25px" }}>
          <IconButton onClick={() => navigate("/")} disableRipple>
            <ArrowBackIosIcon />
            <Typography>Back to Orders</Typography>
          </IconButton>
        </Box>

        <Box
          sx={{
            m: "30px",
            gap: "30px",
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
        >
          <TextField
            disabled
            value={selectedOrder?.orderNumber ?? ""}
            label="Order Nº"
          ></TextField>
          <TextField
            disabled
            value={selectedOrder?.supplier ?? ""}
            label="Supplier"
          ></TextField>
          <TextField
            disabled
            value={formatDate(selectedOrder?.date)}
            label="Date"
          ></TextField>
        </Box>
        <Box
          sx={{
            m: "30px",
            display: "flex",
            gap: "30px",
          }}
        >
          <TextField
            disabled
            value={selectedOrder?.totalAmount ?? ""}
            label="Total amount"
          ></TextField>
          <TextField
            disabled
            sx={{ width: "150px" }}
            value={`${Math.round(statusPercentage) ?? 0}%`}
            label="Status"
          ></TextField>
          <Button
            variant="contained"
            disabled={
              !selectedOrder?.items.every((item) => item.status === true)
            }
            onClick={handleSend}
          >
            Send
          </Button>
        </Box>
      </Box>
      <SnackBar openSnackbar={openSnackbar} setOpenSnackbar={setOpenSnackbar} />
      <Divider />
    </>
  );
};
