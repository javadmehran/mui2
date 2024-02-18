import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchApi from '../../utils/FetchApi'

export default function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState()
  useEffect(() => {
    (async () => {
      try {
        const res = await fetchApi(process.env.REACT_APP_BASE_API + `/products/${id}?populate=*`)
        setProduct(res.data)
      } catch (err) {

      }
    })()
  }, [id])
  return (
    <Stack sx={{
      flexDirection:{xs:'column',md:'row'},
      width:{xs:'95%',md:'80%'},
      height:'70vh',
      justifyContent:'space-between',


    }}>
<Box sx={{width:{xs:'100%',md:'40%'},height:{xs:'40%',md:'100%'}}}>
  <img src='' alt=''/>
</Box>
<Box></Box>
    </Stack>
  )
}
