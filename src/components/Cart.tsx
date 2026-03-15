import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux-toolkit/hooks/hook";
import {
  decreaseQuantity,
  increaseQuantity,
  removecart,
  selectCartSummary,
} from "../redux-toolkit/slices/cartSlice";


const Cart = () => {
  const { cartItems } = useAppSelector((s) => s.cart);
  const dispatch = useAppDispatch();

const { total, discountedTotal } = useAppSelector(selectCartSummary);
 
  return (
    <Box sx={{ width: "600px", mx: "auto", mt: 4 }}>
      {cartItems.map((i) => (
        <Card key={i.id} sx={{ mb: 2 }}>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h6">{i.title}</Typography>
              <Typography color="text.secondary">${i.price}</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Button
                variant="contained"
                onClick={() => dispatch(increaseQuantity(i))}
              >
                +
              </Button>

              <Typography>{i.quantity}</Typography>

              <Button
                variant="contained"
                onClick={() => dispatch(decreaseQuantity(i))}
                disabled={i.quantity <= 1}
              >
                -
              </Button>
            </Box>

            <Button
              color="error"
              variant="outlined"
              onClick={() => dispatch(removecart(i))}
            >
              Remove
            </Button>
          </CardContent>
        </Card>
      ))}

     <Typography variant="h5">Total: ${total}</Typography>

<Typography variant="h5" color="success.main">
  Discounted Total: ${discountedTotal}
</Typography>
    </Box>
  );
};

export default Cart;
