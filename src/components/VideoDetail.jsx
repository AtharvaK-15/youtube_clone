import React from 'react'
import { useState, useEffect } from 'react'
import {Link, useParams} from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import {Videos} from './Videos'
import { FetchFromAPI } from '../utils/FetchFromAPI'

const VideoDetail = () => {
  const {id} = useParams();
  const [videoDetail, setVideoDetail] = useState(null)
  // const {snippet} = videoDetail

  useEffect(()=>{
    FetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>{setVideoDetail(data.items[0])})
  },[id])

  if(!videoDetail) return <div>Loading...</div>
  const {snippet: {title, description, channelTitle, publishedAt}, statistics: {viewCount, likeCount, dislikeCount}} = videoDetail;

  return (
    <Box minHeight='95vh'>
      <Stack direction={{xs:'column', md:'row'}}>
        <Box flex={1}>
          <Box sx={{width:'100%', position:'sticky', top:'86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player" controls
            />
            <Typography color="#fff" variant='h5' fontWeight={'bold'} p={2}> 
              {title}
            </Typography>
            <Stack>
              <Box p={2} sx={{borderBottom:'1px solid #3d3d3d'}}>
                <Typography color="#fff" variant='body1' fontWeight={'bold'}> 
                  {viewCount} views • {publishedAt}
                </Typography>
              </Box>
              <Box p={2} sx={{borderBottom:'1px solid #3d3d3d'}}>
                <Stack direction='row' spacing={2}>
                  <Box>
                    <CheckCircle color='primary' />
                  </Box>
                  <Box>
                    <Typography color="#fff" variant='body1' fontWeight={'bold'}> 
                      {channelTitle}
                    </Typography>
                    <Typography color="#fff" variant='body2' fontWeight={'bold'}> 
                      {`${likeCount} likes`}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
              <Box p={2}>
                <Typography color="#fff" variant='body1'> 
                  {description}
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail