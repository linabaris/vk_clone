import React from 'react';
import Header from './header/Header';
import { Grid } from '@mui/material';
import Sidebar from './sidebar/Sidebar';
import { Outlet } from 'react-router-dom';


// type ContainerProps = {
//   children: React.ReactNode
// };

function Layout() {
  return (
    <>
      <Header/>
      <Grid container spacing={2} marginX={5} marginTop={2}>
        <Grid item md={2}>
          <Sidebar/>
        </Grid>
        <Grid item md={10}>
          <Outlet/>
        </Grid>
      </Grid>      
    </>
  )
}

export default Layout