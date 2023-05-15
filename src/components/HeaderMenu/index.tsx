import React, { useRef, useState } from 'react';
// import Style from './style';
import './style.css';
import { AppBar, Box, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { ExitToApp, Home, Lock, PersonPin } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
export interface Props {
  children?: React.ReactNode;
  [name: string]: any;
}

const HeaderMenu: React.FC<Props> = ({ name }: Props) => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [menuAnchor, setMenuAnchor] = useState<any>(null);
  const menuBtn = useRef<HTMLButtonElement>(null);

  return (
    <AppBar position='sticky'>
      <Box className='header-container'>
        <Toolbar classes={{ root: 'header-toolbar' }} disableGutters>
          <Box className='header-action-container'>
            <img className='header-image' src='/dmart.png' alt='dmart logo' onClick={() => console.log('ma')} />
          </Box>

          <Typography color='primary' className='header-title'>
            POS Admin
          </Typography>
          <Box className='header-action-container'>
            <IconButton
              ref={menuBtn}
              aria-label='drop-down-menu'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={(e) => {
                setOpenMenu(true);
                setMenuAnchor(e.target);
              }}>
              <PersonPin color='primary' fontSize='large' />
            </IconButton>
            <Menu
              id='menu-appbar'
              classes={{ paper: 'header-menu-paper' }}
              anchorEl={menuAnchor}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={openMenu}
              onClose={() => {
                setOpenMenu(false);
                setMenuAnchor(null);
              }}>
              <MenuItem
                onClick={() => {
                  // dispatch(TOGGLE_SCREEN_LOCK.action(true));
                  setOpenMenu(false);
                  setMenuAnchor(null);
                }}>
                <ListItemIcon>
                  <Lock fontSize='small' />
                </ListItemIcon>
                <ListItemText>
                  <Typography fontSize={15} fontWeight={600}>
                    SETTING
                  </Typography>
                </ListItemText>
              </MenuItem>
              {location.pathname != '/login' && (
                <MenuItem
                  classes={{ selected: 'header-menu-item-text' }}
                  onClick={() => {
                    navigate('/login');
                    // dispatch(CREATE_NEW_CART.action());
                    setOpenMenu(false);
                    setMenuAnchor(null);
                  }}>
                  <ListItemIcon>
                    <ExitToApp fontSize='small' />
                  </ListItemIcon>
                  <ListItemText classes={{ root: 'header-menu-item-text' }}>
                    <Typography fontSize={15} fontWeight={600}>
                      LOGOUT
                    </Typography>
                  </ListItemText>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default HeaderMenu;
