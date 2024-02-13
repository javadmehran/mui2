import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
export default function Slider() {
  const [slide, setSlide] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          process.env.REACT_APP_BASE_API + "sliders?populate=*"
        );
        const data = await res.json();
        setSlide(data?.data);
        console.log(data);
      } catch (err) {
        alert(err);
       
      } 
    })();
  }, []);

  const sliderItems=slide?.map((e,index)=><SwiperSlide ><img src={process.env.REACT_APP_BASE_URL+e?.attributes?.image?.data?.attributes?.url} style={{width:'100%',height:'100%'}} alt=""/></SwiperSlide>)
  return (
   <Box sx={{height:'80vh'}}>
<Swiper modules={[Navigation]} navigation style={{height:'100%',width:'100%'}}>
  {sliderItems}
</Swiper>
   </Box>
  )
}
