'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { AiFillBug, AiOutlineLogout } from 'react-icons/ai';
import Link from 'next/link';
import IssuePage from './issues/page';
import Testpage from './test/page';
const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState('');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
 

  const drawer = (
    <>
    <div>
      <Toolbar />
      <Divider />
      <List>
          {[
            { text: 'Dashboard', link: '/issues', content: <IssuePage/> },
           { text: 'Issues', link: '/issues', content: <IssuePage/> },
           
           { text: 'Recently Solved', link: '/issues', content: <IssuePage/> },
           
           { text: 'Mongo Issues ', link: '/issues', content: <IssuePage/> },
           { text: 'NodeJs Issues', link: '/issues', content: <IssuePage/> },
           { text: 'Follow Users', link: '/issues', content: <IssuePage/> },
           
           { text: 'Logout', link: '/issues', content: <IssuePage/> },
          ].map(({ text, link }, index) => (
            <Link href={link} passHref key={text}>
              
                <ListItem button onClick={() => {
                      setSelectedItem(text);
                      
                    }}>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon /> }
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              
            </Link>
          ))}
        </List>
      <Divider />
      
    </div>
    </>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
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
          <Typography variant="h6" noWrap component="div" className='flex justify-center space-x-10'>
          <Link href="/">
        <AiFillBug className="text-2xl flex justify-center " />
          </Link>
          
            ssue Tracker
            
          
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <div className="flex-grow p-4">
        
        {selectedItem === '' && <Testpage />}
        {/* Conditionally render the selected content */}
        {selectedItem === 'Issues' && <IssuePage />}
        {selectedItem === 'Follow Users' && <IssuePage />}
        {selectedItem === 'Recently Solved' && <IssuePage />}
        {selectedItem === 'Mongo Issues' && <IssuePage />}
        {selectedItem === 'Nodejs Issues' && <IssuePage />}
        {selectedItem === 'Dashboard' && <IssuePage />}
        {selectedItem === 'Logout' && <IssuePage />}
      </div>
      </Box>
    </Box>
  );
}
