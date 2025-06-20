import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';

import MuiDrawer from '@mui/material/Drawer';

import List from '@mui/material/List';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { PiCashRegister } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { CiBoxes } from "react-icons/ci";
import { LiaHomeSolid } from "react-icons/lia";
import { GrMapLocation } from "react-icons/gr";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { CiWallet } from "react-icons/ci";
import { PiUserCircleCheck } from "react-icons/pi";
import { MdOutlinePendingActions } from "react-icons/md";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { VscDashboard } from "react-icons/vsc";
import { AiOutlineApi } from "react-icons/ai";


import logo from './assets/img/logo.png';


const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// Create a styled version of IconButton with background color
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: '#ffffff', // Light gray background color
  '&:hover': {
    backgroundColor: '#ededed', // Slightly darker on hover
  },
  margin: theme.spacing(1),
  borderRadius: '50%',
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

export default function Menu() {
  const [open, setOpen] = React.useState(true);
  const location = useLocation();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Function to check if a route is active
  const isActiveRoute = (path: any) => {
    return location.pathname === path;
  };

  return (
      <Drawer variant="permanent" open={open} className='drawer'>
        <DrawerHeader>
          <img src={logo} alt="Logo" className='logo' style={open ? {opacity: 1} : {opacity: 0}} />
        
        </DrawerHeader>

        <div className="open-menu-icon">
          {open ? (
              <StyledIconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </StyledIconButton>
          ) : (
            <StyledIconButton onClick={handleDrawerOpen}>
              <ChevronRightIcon />
            </StyledIconButton>
          )}
        </div>
        
        <List className={`menu-list ${open ? 'opened' : 'closed'}`}>
            
          <ListItem disablePadding className="menu-item">
            <ListItemButton 
              className={`menu-item-button ${isActiveRoute('/dashboard') ? 'menu_active' : ''}`}
              component={Link}
              to="/dashboard"
            >
              <ListItemIcon className="menu-item-icon">
                <VscDashboard size={24} />
              </ListItemIcon>
              <ListItemText primary={"Dashboard"} className="menu-item-text" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding className="menu-item">
                <ListItemButton 
                  className={`menu-item-button ${isActiveRoute('/api') ? 'menu_active' : ''}`} 
                  component={Link} 
                  to="/api"
                >
                    <ListItemIcon className="menu-item-icon">
                        <AiOutlineApi size={24} />
                    </ListItemIcon>
                    <ListItemText primary={"API"} className="menu-item-text"/>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding className="menu-item">
                <ListItemButton 
                  className={`menu-item-button ${isActiveRoute('/cotizar') ? 'menu_active' : ''}`}
                  component={Link}
                  to="/cotizar"
                >
                    <ListItemIcon className="menu-item-icon">
                        <PiCashRegister size={24} />
                    </ListItemIcon>
                    <ListItemText primary={"Cotiza rápido"} className="menu-item-text" />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding className="menu-item">
                <ListItemButton 
                  className={`menu-item-button ${isActiveRoute('/nuevo-envio') ? 'menu_active' : ''}`}
                  component={Link}
                  to="/nuevo-envio"
                >
                    <ListItemIcon className="menu-item-icon">
                        <TbTruckDelivery size={24} />
                    </ListItemIcon>
                    <ListItemText primary={"Nuevo envío"} className="menu-item-text" />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding className="menu-item">
                <ListItemButton 
                  className={`menu-item-button ${isActiveRoute('/envios') ? 'menu_active' : ''}`}
                  component={Link}
                  to="/envios"
                >
                    <ListItemIcon className="menu-item-icon">
                        <CiBoxes size={24} />
                    </ListItemIcon>
                    <ListItemText primary={"Envíos"} className="menu-item-text" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding className="menu-item">
              <ListItemButton 
                className={`menu-item-button ${isActiveRoute('/direcciones') ? 'menu_active' : ''}`}
                component={Link}
                to="/direcciones"
              >
                <ListItemIcon className="menu-item-icon">
                  <LiaHomeSolid size={24} />
                </ListItemIcon>
                <ListItemText primary={"Direcciones"} className="menu-item-text" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding className="menu-item">
              <ListItemButton 
                className={`menu-item-button ${isActiveRoute('/rastreo') ? 'menu_active' : ''}`}
                component={Link}
                to="/rastreo"
              >
                <ListItemIcon className="menu-item-icon">
                  <GrMapLocation size={24} />
                </ListItemIcon>
                <ListItemText primary={"Rastreo"} className="menu-item-text" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding className="menu-item">
              <ListItemButton 
                className={`menu-item-button ${isActiveRoute('/recoleccion') ? 'menu_active' : ''}`}
                component={Link}
                to="/recoleccion"
              >
                <ListItemIcon className="menu-item-icon">
                  <LiaPeopleCarrySolid size={24} />
                </ListItemIcon>
                <ListItemText primary={"Recolección"} className="menu-item-text" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding className="menu-item">
              <ListItemButton 
                className={`menu-item-button ${isActiveRoute('/estado-cuenta') ? 'menu_active' : ''}`}
                component={Link}
                to="/estado-cuenta"
              >
                <ListItemIcon className="menu-item-icon">
                  <CiWallet size={24} />
                </ListItemIcon>
                <ListItemText primary={"Estado de cuenta"} className="menu-item-text" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding className="menu-item">
              <ListItemButton 
                className={`menu-item-button ${isActiveRoute('/usuarios') ? 'menu_active' : ''}`}
                component={Link}
                to="/usuarios"
              >
                <ListItemIcon className="menu-item-icon">
                  <PiUserCircleCheck size={24} />
                </ListItemIcon>
                <ListItemText primary={"Usuarios"} className="menu-item-text" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding className="menu-item">
              <ListItemButton 
                className={`menu-item-button ${isActiveRoute('/envios-pendientes') ? 'menu_active' : ''}`}
                component={Link}
                to="/envios-pendientes"
              >
                <ListItemIcon className="menu-item-icon">
                  <MdOutlinePendingActions size={24} />
                </ListItemIcon>
                <ListItemText primary={"Envíos pendientes"} className="menu-item-text" />
              </ListItemButton>
            </ListItem>

            
        </List>
      </Drawer>
  );
}