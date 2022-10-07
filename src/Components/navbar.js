import * as React from 'react';
import "./style.css"
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from './Images/top-images.webp'
import { Link } from 'react-router-dom'
const drawerWidth = 240;
const navItems = ['Home', 'About', 'Projects', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} style={{ backgroundColor: 'black', }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      </Typography>
      <Divider />
      <div style={{backgroundColor : 'white',marginTop:'-25px'}}>
        <Link className='second_header_links' to='/' >HOME</Link>
        <Link color={props.color} className='second_header_links' to='/about' >ABOUT</Link>
        <Link className='second_header_links' to='/project'>PROJECTS</Link>
        <Link className='second_header_links' to='/Contact'>CONTACT</Link>
      </div>
      {/* <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding >
            <Button style={{ color: "black" }} >
              <Typography component={"p"} variant={"p"}>{item}</Typography>
            </Button>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>

      <AppBar color={"transparent"} style={{ boxShadow: 'none' }} component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 0.4 }}
          >
            {/* <div className='logo_div'>
              <img/>
            </div> */}
            <img className='header_logo' src={logo} />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Link style={{color:props?.color,}} className='header_links' to='/'>HOME</Link>
            <Link style={{color:props?.color,}}  className='header_links' to='/about'>ABOUT</Link>
            <Link style={{color:props?.color,}}  className='header_links' to='/project'>PROJECTS</Link>
            <Link style={{color:props?.color,}}  className='header_links' to='/Contact'>CONTACT</Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />

      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
