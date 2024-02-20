import { Box, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import Slider from '@mui/material/Slider';
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useParams } from 'react-router-dom';
import fetchApi from '../../utils/FetchApi';


export function MediaCard({ img, name, price, id, desc }) {
      return (
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={img} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc.split(" ").slice(0, 10).join(" ")}....
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{price}</Button>
        <Button size="small">
          <Link to={`/product-details/${id}/${name.split(' ').join('-')}`}>more information</Link>
        </Button>
      </CardActions>
    </Card>
      );
}



export default function Products() {
      const { categoryId } = useParams();
  const [products, setProducts] = useState();
  const [price, setPrice] = useState([0, 10000]);
  const [sort, setSort] = useState("price:desc");
  const sortChange = (e) => {
    setSort(e.target.value);
  };
  const handleChange = (event, newValue) => {
    setPrice(newValue);
  };
  useEffect(() => {
    (async () => {
      try {
        const res = await fetchApi(
          process.env.REACT_APP_BASE_API +
            `products?populate=*&${
              categoryId !== "all-category" &&
              `filters[categories][id][$eq]=${categoryId}`
            }&sort[0]=${sort}&filters[price][$gte]=${
              price[0]
            }&filters[price][$lte]=${price[1]}`
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [sort, price]);
  const items = products?.map((e, index) => (
    <MediaCard
      key={index}
      img={
        process.env.REACT_APP_BASE_URL +
        e?.attributes?.images?.data[0]?.attributes?.url
      }
      name={e?.attributes?.name}
      desc={e?.attributes?.description}
      id={e?.id}
      price={e?.attributes?.price}
    ></MediaCard>
  ));
      return (
           
            <Box component={"section"} px={5}>
            <Box>
              <Slider
                getAriaLabel={() => "price"}
                value={price}
                step={50}
                min={0}
                max={10000}
                onChange={handleChange}
                valueLabelDisplay="auto"
              />
              <FormControl
                sx={{
                  width: "100px",
                  display: "block",
                  color: "black",
                  margin: "50px auto",
                }}
              >
                <InputLabel id="demo-simple-select-label">SORT</InputLabel>
      
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  sx={{ width: "100px", display: "block", color: "black" }}
                  value={sort}
                  label="Sort-By"
                  onChange={sortChange}
                >
                  <MenuItem value={"price:desc"}>max Price</MenuItem>
                  <MenuItem value={"price:asc"}>min price</MenuItem>
                  <MenuItem value={"createdAt:desc"}>newest</MenuItem>
                  <MenuItem value={"createdAt:asc"}>oldest</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Stack direction={'row'} gap={'10px'} flexWrap={'wrap'} justifyContent={'space-between'}>
              {items}
      
            </Stack>
          </Box>
      );
}

