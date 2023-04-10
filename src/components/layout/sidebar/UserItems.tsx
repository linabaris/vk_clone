import React from 'react';
import { Card, Box, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

export const UserItems:React.FC = () => {
  return (
    <Card sx={{
        padding:2,
        fontSize:20,
        backgroundColor:'#F6F6F6',
        borderRadius:3,

      }}>
        <Link to={'/profile'} style={{display:'flex', alignItems:'center', textDecoration:'none', color:'#111'}}>
          <Box sx={{
                position:'relative', 
                marginRight: 2, 
                overflow:'hidden',
                width:50,
                height:50 ,
            }}>
            <Avatar 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY2ahJliB6cPF2rMalfHlFmJuM7Tjgs1iGHO0279xD6Wyg_fPPB9UCXd0J5oPlSXcncN8&usqp=CAU" alt="avatar" 
                sx={{
                  width:48,
                  height:48,
                  borderRadius:'50%',
                }}
                />
          <Box 
          sx={{
            backgroundColor:'#4FB14F',
            width:10,
            height:10,
            position:'absolute',
            bottom:5,
            left:35,
            borderRadius:'50%',
            border:'2px solid #F6F6F6',
          }}/>
          </Box>
          <span>Dmitry Lyjin</span>
        </Link>
      </Card>
  )
}
