import React, {FC} from 'react';
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Toolbar, IconButton, Typography, Box, Badge, InputBase } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';

const Header:FC = () => {

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 25,
    backgroundColor: '#1d4770',
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  return (
    <div className="header">
      <AppBar position="static" sx={{ backgroundColor: '#276099'}}>
        <Toolbar variant="dense">
          <Box sx={{ flexGrow: 1 }}>
            <img src="" alt="" />
          </Box>
          <Search sx={{ flexGrow: 2 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems:'center' }}>
            <Typography variant="h6" color="inherit" component="div">
              Уведомления
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={1} color="error">
                  <NotificationsIcon sx={{width:20, height:20}} />
                </Badge>
              </IconButton>
          </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header