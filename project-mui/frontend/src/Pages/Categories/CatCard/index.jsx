import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryCard({ img, name, id }) {
      return (
            <Box sx={{
                  width: '250px',
                  height: '250px',
                  boxShadow: '0 0 20px 5px rgba(0,0,0,.2)',
                  position: 'relative',
                  "&:hover img": {
                        filter: 'blur(5px)'
                  },
                  "&:hover p": {
                        visibility: 'visible !important',
                        opacity: '1 !important'
                  }
            }}>
                  <img src={img} alt='' style={{ width: "100%", height: "100%", transition: 'all .5s' }} />
                  <Typography component={'p'} sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,50%)', transition: 'all .5s', zIndex: '1000', opacity: 0, visibility: 'hidden' }}>
                        <Link style={{ color: 'black', fontSize: '24px', fontWeight: 'bold' }} to={`/products/${id}`}>{name}</Link>
                  </Typography>
            </Box>
      )
}
