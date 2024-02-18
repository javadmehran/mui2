import React, { useEffect, useState } from 'react'
import fetchApi from '../../utils/FetchApi'
import CategoryCard from './CatCard'
import { Stack } from '@mui/material'
export default function Categories() {
  const [categories, setCategories] = useState()
  useEffect(() => {
    (async () => {
      try {
        const res = await fetchApi(process.env.REACT_APP_BASE_API + "categories?populate=*");
        setCategories(res.data)
      } catch (err) {
        console.log(err)
      }
    })();
  }, [])
  const items=categories?.map((e,index)=><CategoryCard key={index} img={process.env.REACT_APP_BASE_URL +
   e.attributes?.images?.data[0]?.attributes?.url}
   name={ e.attributes?.name}
   id={e?.id}

   >

   </CategoryCard>)
  return (
    <Stack gap={5} justifyContent={'center'} flexDirection={'row'}>{items}</Stack>
  )
}
