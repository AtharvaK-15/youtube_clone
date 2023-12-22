import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import Videos from './Videos'
import { FetchFromAPI } from '../utils/FetchFromAPI'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {

  const [videos,setVideos] = useState([]);
  const {searchTerm} = useParams();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FetchFromAPI(`search?part=snippet&q=${searchTerm}`);
        setVideos(data.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [searchTerm]);

  return (
    <Box p={2} sx={{overflowY:"auto", height:'90vh', flex:'2'}}>
      <Typography variant='h4' fontWeight='bold' mb='2' sx={{color:"White"}}>
        Search Results for:  <span style={{color:"#F31503"}}>{searchTerm}</span> videos
      </Typography>
        <Videos videos={videos} />
  </Box>
  )
}

export default SearchFeed;