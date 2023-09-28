import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import SideBar from './SideBar'
import Videos from './Videos'

import { FetchFromAPI } from '../utils/FetchFromAPI'

const Feed = () => {

  const [selectedCategory,setSelectedCategory] = useState('New');
  const [videos,setVideos] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await FetchFromAPI(`search?part=snippet&q=${selectedCategory}`);
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedCategory]);

  return (
    <Stack sx={{flexDirection:{sx:"column",md:"row"}}}>
    
      <Box sx={{height:{sx:'auto',md:'92vh'},
           borderRight:'1px solid #3d3d3d',
           px:{sx:0,md:2}
    }}>
      <SideBar
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      />
      </Box>

      <Box p={2} sx={{overflowY:"auto", height:'90vh', flex:'2'}}>
        <Typography variant='h4' fontWeight='bold' mb='2' sx={{color:"White"}}>
          {selectedCategory} <span style={{color:"#F31503"}}>Videos</span>
        </Typography>

        <Videos videos={[videos]} />
      </Box>
    </Stack>
  )
}

export default Feed