import React, { useEffect, useState } from "react";
import Slider from "../../Components/Slider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Box, Typography, useScrollTrigger } from "@mui/material";
import fetchApi from "../../utils/FetchApi";
import Card from "../../Components/Card";
export default function Home() {
  const [discountPr, setDiscountPr] = useState();
 
  useEffect(()=>{
    (async () => {
      const data= await fetchApi(process.env.REACT_APP_BASE_API+`products?populate=*&filters[discount][$gt]=0&sort[0]=discount`)
      setDiscountPr(data?.data)
    })()

  },[])
  const discountItem = discountPr?.map((e, index) => (
    <SwiperSlide key={index}>
      <Card
        discount={e?.attributes.discount}
        price={e?.attributes.price}
        name={e?.attributes.name}
        id={e?.id}
        img={process.env.REACT_APP_BASE_URL+e?.attributes?.images?.data[0]?.attributes.url}
      />
    </SwiperSlide>
  ));
  return (
    <>
    <Slider/>
    <Box
        sx={{
          width: { xs: "100%", md: "90%" },
          height: "500px",
          boxShadow: "0px 0px 20px 5px rgba(0,0,0,.2)",
          borderRadius: "15px",
          margin: "80px auto",
        }}
      >
        <Typography variant="h2"  textAlign={"center"}>
          Discount Product
        </Typography>
        <Swiper
          style={{ width: "100%", height: "80%",paddingLeft:'40px' }}
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination,Autoplay]}
          className="mySwiper"
        >
          {discountItem}
        </Swiper>
      </Box>

    </>
  )
}
