import React from 'react'
import { Stack } from '@mui/material'
import {categories} from '../utils/constants'


const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack direction="row"
    sx={{
      overflow:'auto',
      height:{sx:'auto', md:'95%'},
      flexDirection:{md:'column'}  
    }}
    >
        {categories.map((category)=>(
            <button
                className='category-btn'
                onClick={()=>setSelectedCategory(category.name)}
                style={{
                    background:category.name === selectedCategory && '#FC1503',
                    color:'white',
                    backgroundColor:'#1c1c1c',
                    border: '1px solid #1c1c1c',
                    borderRadius:'10px'
                }}
                key={category.name}
                >
                <span
                style={{color:category.name === selectedCategory ? 'white' : 'red' , marginRight:'15px'}}
                >{category.icon}</span>
                <span>{category.name}</span>
            </button>
        ))} 
    </Stack>
  )
}

export default SideBar