import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchApi from '../../utils/FetchApi'
import { UseSelector,useDispatch, useSelector } from 'react-redux' 
import { addItem,removeItem } from '../../Store/Slices/CartSlice'
export default function ProductDetails() {
  const { id } = useParams()
  const productInCart=useSelector(state=>state.cart.list).filter(e=>e.id==id)[0]?.quantity
  const dispatch=useDispatch();

  const [product, setProduct] = useState()
  useEffect(() => {
    (async () => {
      const res = await fetchApi(
        process.env.REACT_APP_BASE_API + `products/${id}?populate=*`
      );
      setProduct(res.data);
    })();
  }, [id]);
  return (
    <Stack
    sx={{
      flexDirection: { xs: "column", md: "row" },
      width: { xs: "95%", md: "80%" },
      height: {md:'70vh',xs:'100vh'},
      justifyContent: "space-between",
      margin:'50px auto',
      boxShadow:'0 0 20px 5px rgba(0,0,0,.2)',
      borderRadius:'20px',
      overflow:'hidden'
    }}
  >
    <Box
      sx={{
        width: { xs: "100%", md: "40%" },
        height: { xs: "40%", md: "100%" },
      }}
    >
      <img
      style={{width:'100%',height:'100%'}}
        src={
          process.env.REACT_APP_BASE_URL +
          product?.attributes?.images?.data[0]?.attributes?.url
        }
        alt=""
      />
    </Box>
    <Stack sx={{height: { xs: "60%", md: "100%" },}} py={2} justifyContent={{md:'center',xs:'space-between'}} flexDirection={'column'} gap={{md:5,xs:0}} alignItems={'center'}px={2}>
        <Typography variant="h2">{product?.attributes?.name}</Typography>
        <Typography variant="body2">Description : {product?.attributes?.description}</Typography>
        <Typography variant="body2">Price : {product?.attributes?.price}</Typography>
        <Typography variant="body2">discountPrice : {product?.attributes?.price *(1-product?.attributes?.discount/100)}</Typography>
        <Box>
        <Button variant="contained" disabled={productInCart?false:true} onClick={()=>dispatch(removeItem(id))}  sx={{margin:'0px 20px'}} color="error">-</Button>
        { productInCart&&<Typography component={'span'} >{productInCart}</Typography>}
        <Button variant="contained" sx={{margin:'0px 20px'}} onClick={()=>dispatch(addItem(product))} color="success">+</Button>
        </Box>
    </Stack>
  </Stack>
  )
}
