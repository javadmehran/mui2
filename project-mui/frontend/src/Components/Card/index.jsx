import React, { Component } from 'react'
import  { Typography,Box } from '@mui/material';
import { Link } from 'react-router-dom';
export default function Card({ img, id, name, price, discount }) {
      return (
            <>
                  <Box sx={{
                        width:'250px',
                        height:'300px',
                        boxShadow: "0px 0px 20px 2px rgba(0,0,0,.2)",
                        borderRadius:'25px',
                        overflow:'hidden',
                  }}>
                        <img style={{width:'100%',height:'60%',padding:'0'}} src={img} alt={name} />
                        <Typography textAlign={'center'} variant='body1' color={'red'}  sx={{textDecoration:'line-through',overflow:'hidden', padding:'0 10px',} }>{price}</Typography>
                        <Typography textAlign={'center'} variant='h3' sx={{ padding:'0 10px'}}>{price*(1-discount/100)}</Typography>
                        <Link style={{padding:'0 10px'}} to={`/product-details/${id}/${name.split(' ').join('-')}`}>More information</Link>
                  </Box>

            </>
      )
}
