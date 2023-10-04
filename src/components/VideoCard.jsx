import React from 'react'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl, demoChannelTitle, demoChannelUrl } from '../utils/constants'

const VideoCard = ({video: {id: {videoId} , snippet} }) => {
  return (
    <Card sx={{width:{lg:'300px',md:'320px', xs:'100%'},boxShadow:'none',borderRadius:'10px'}}>
      <Link to={videoId? `/video/${videoId}`:demoVideoUrl}>
        <CardMedia
          image ={snippet?.thumbnails?.high?.url} 
          alt = {snippet?.title}
          sx = {{width:330, height:180}}
          />
      </Link>
      <CardContent sx={{backgroundColor:"#1e1e1e", height:"90px" }}>
        <Link to={videoId? `/video/${videoId}`:demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0,60)||demoVideoTitle.slice(0,60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId? `/channel/${snippet?.channelId}`:demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle ||demoChannelTitle}
            <CheckCircle sx={{fontSize: 14, color:"gray", ml:'5px' }}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard