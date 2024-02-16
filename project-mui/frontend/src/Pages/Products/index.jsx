
import { Box, MenuItem, Select } from '@mui/material';
import Slider from '@mui/material/Slider';
import React, { useState } from 'react';


export default function Products() {
  const [products, setProducts] = useState();
  const [value, setValue] = useState([0, 10000]);
const [sort,setSort]=useState()
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box component={'section'} sx={{ width: 500, alignItems: "center", margin: '0 auto' }}>
        <Box>
          <Slider
            getAriaLabel={() => 'price'}
            value={value}
            step={50}
            min={0}
            max={10000}
            onChange={handleChange}
            valueLabelDisplay="auto" />

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sort}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Box>
        <Box>
        
        </Box>
      </Box>
    </>
  );
}

