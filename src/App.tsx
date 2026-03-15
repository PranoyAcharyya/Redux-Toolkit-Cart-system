
import { useEffect, useState } from 'react'
import './App.css'
import { fetchProducts } from "./redux-toolkit/slices/productlistSlice";
import { useAppDispatch, useAppSelector } from './redux-toolkit/hooks/hook';
import Grid from '@mui/material/Grid';
import ProductCard from "./components/ProductCard";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import DialogCart from './components/DialogCart';

function App() {
  const [open,setOpen] = useState(false);
  const {products,status} = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const {cartItems} = useAppSelector(s => s.cart);


  
    const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [])

  if(status === "pending"){
    return <h2>Loading...</h2>
  }

  

  return (
    <>
      <Grid container spacing={3} padding={3}>

      {products.map((product) => (
        <Grid  size={{ xs: 12, sm: 6 ,lg:4}} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}

    </Grid>

    <Badge onClick={handleClickOpen} color="secondary" badgeContent={cartItems.length} max={999} sx={{position:'fixed',bottom:'20px',right:'120px'}}>
 <ShoppingCartIcon />
</Badge>
<DialogCart open={open} handleClose={handleClose}/>
    </>
  )
}

export default App
