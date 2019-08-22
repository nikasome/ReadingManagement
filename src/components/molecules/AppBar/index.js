import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import UserIcon from '../../atoms/UserIcon/index.js';

export default function HeadBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Title
          </Typography>
          <IconButton color="inherit">
            <AddIcon />
          </IconButton>
          <IconButton
            style={{ margin: '3px' }}
            aria-controls="menu-account"
            aria-haspopup="true"
            color="inherit"
            onClick={handleMenu}
          >
            <UserIcon
              style={{
                minWidth: '30px',
                width: '15vh',
                height: 'auto'
              }}
            >
              {props.photoURL}
            </UserIcon>
          </IconButton>
          <Menu
            id="menu-account"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>プロフィール設定</MenuItem>
            <MenuItem onClick={handleClose}>ログアウト</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
