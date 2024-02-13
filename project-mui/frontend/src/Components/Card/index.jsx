import React from 'react'
import  { Typography,Box } from '@mui/material';
import { Link } from 'react-router-dom';
export default function Card({ img, id, name, price, discount }) {
      return (
            <>
                  <Box sx={{
                        width:'250px',
                        height:'300px',
                        boxShadow: "0px 0px 20px 2px rgba(0,0,0,.2)",
                  }}>
                        <img style={{width:'100%',height:'60%'}} src={img} alt={name} />
                        <Typography variant='body1' sx={{textDecoration:'lineThrough'}}>{price}</Typography>
                        <Typography variant='h3'>{price*(1-discount/100)}</Typography>
                        <Link to={`/product-details/${id}/${name.split(' ').join('-')}`}>More information</Link>
                  </Box>

            </>
      )
}
