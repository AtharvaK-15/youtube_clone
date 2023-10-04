import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { FetchFromAPI } from '../utils/FetchFromAPI'
import { Box } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex'

const ChannelDetail = () => {
  const {id} = useParams();
  const [ChannelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  // console.log(ChannelDetail,Videos)

  useEffect(()=>{
    FetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=>{setChannelDetail(data?.items[0])})

    FetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=>{setVideos(data?.items)})
  },[id])
  
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              'linear-gradient(90deg, rgba(7,54,160,1) 19%, rgba(4,255,248,1) 100%, rgba(181,1,240,1) 100%)',
            height: '300px',
            zIndex:10
          }}
        ></div>
        <ChannelCard channelDetail={ChannelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
          <Box sx={{mr:{sm:'100px'}}}/>
          <Videos videos={videos}/>
      </Box>
    </Box>
  );
};

export default ChannelDetail