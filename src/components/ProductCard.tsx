import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux-toolkit/hooks/hook";
import { addtocart } from "../redux-toolkit/slices/cartSlice";
import type { Iproduct } from "../types/interfaces/product.interface";

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
  };
}

const ProductCard = ({ product }: ProductCardProps) => {

  const dispatch = useAppDispatch();

  // const handleAddtocart = (data:Iproduct)=>{
  //   dispatch(addtocart(data))
  // }

  return (
    <Card sx={{ maxWidth: 320, borderRadius: 3, boxShadow: 3 }}>
      
      <CardMedia
        component="img"
        height="200"
        image={product?.images[0]}
        alt={product.title}
      />

      <CardContent>
        <Typography gutterBottom variant="h6" fontWeight={600}>
          {product.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {product.description.slice(0, 80)}...
        </Typography>

        <Typography
          variant="h6"
          sx={{ mt: 1, fontWeight: "bold", color: "#e60e47" }}
        >
          ${product.price}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          fullWidth
         onClick={() => dispatch(addtocart(product))}
          variant="contained"
          sx={{
            backgroundColor: "#e60e47",
            "&:hover": {
              backgroundColor: "#c50c3c",
            },
            borderRadius: 2,
          }}
        >
          Add to Cart
        </Button>
      </CardActions>

    </Card>
  );
};

export default ProductCard;