import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import {Sidebar , Videos} from './';
import { fetchFromAPI } from "../utils/fetchFromAPI";
const Feed = ()=> {

  useEffect(()=>{
    const [selectedCategory, setselectedCategory] = useState('New');

    fetchFromAPI( `search?part=snippet&q=$
    {selectedCategory}`);
  },[selectedCategory] );  
  return (
    <Stack sx={{flexDirection:{
      sx:"column", md:"row"    } }}>
        <Box sx={{ height:{ sx: "auto", md:"92vh"},
        borderRight:'1px solid #3d3d3d', px:{ sx: 0, md: 2}}}>
          <Sidebar
          selectedCategory=
          {selectedCategory}
          setselectedCategory=
          {setselectedCategory}/>
        
        <Typography className="copyright"
        variant="body2" sx={{mt:1.5,color:"#fff"}}> 
           copyright 2022 
        </Typography>
        </Box>

        <Box p={2} sx={{ overflowY:'auto',
        height:'90vh',flex:2}}>
          <Typography varient="h4"
          fontWeight="bold" mb={2} sx={{
            color:'white' }}>
              New <span style={{ color:
              '#F31503'}}>Videos</span>
            </Typography>
            <Videos videos={[]}/>
        </Box>

    </Stack>
  )
}
export default Feed
