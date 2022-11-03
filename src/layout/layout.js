import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { withStyles } from '@mui/styles';
import logo from '../assets/svg/KotakLogo.png';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';

const drawerWidth = 240;
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.common.white,
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
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
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function Layout(props) {
  const theme = useTheme();
  const { classes } = props;

  const [open, setOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  let menu = [{ name: 'My Dashboard', id: 0, icon: "dashboard" }, { name: 'Exposure Issuerwise', id: 1, icon: "ExposureIssuerwise" }, { name: 'AMC Report', id: 1, icon: 'AMCReport' }, { name: 'Fund Accounting Report', id: 1, icon: 'FundAccountingReport' }]

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}
      <AppBar color="default" position="fixed" sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        boxShadow: 0,
        backgroundColor: (theme) => theme.palette.default.main,
        top: 0,
        width: "100%",
        margin: "auto",
        position: "fixed",
        flexGrow: 1,
      }}>
        <Toolbar sx={{
          marginLeft: "1% !important",
          paddingLeft: "0 !important",
          paddingRight: "0 !important",
        }}>
          <IconButton onClick={handleDrawerClose} sx={{
            padding: 1,
            ...(!open && { display: 'none' }),
          }}>
            <MenuOpenIcon sx={{ width: 25, height: 25 }} />
          </IconButton>
          <IconButton onClick={handleDrawerOpen} sx={{
            padding: 1,
            ...(open && { display: 'none' }),
          }}>
            <MenuIcon sx={{ width: 25, height: 25 }} />
          </IconButton>
          <div className={classes.menuButton}>
            <img src={logo} style={{ width: "8%" }} />
          </div>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 , marginRight:1 }}>
              <Avatar color="primary" sx={{width:30,height:30}} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer className='draw-menu' variant="permanent" open={open} sx={{
        boxShadow: 0,
        backgroundColor : (theme) => theme.palette.default
      }}>
        <DrawerHeader>
        </DrawerHeader>
        <List sx={{ boxShadowLeft: 0 }}>
          {menu.map((e, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <ListItem
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center'
                  }}
                >
                  <IconButton sx={{
                    padding: 1
                  }}>
                    {index % 2 === 0 ? <InboxIcon sx={{ width: 25, height: 25 }} /> : <MailIcon sx={{ width: 25, height: 25 }} />}
                  </IconButton>
                </ListItemIcon>
                <ListItemText primary={e.name} sx={{ opacity: open ? 1 : 0 }} />
              </ListItem>
            </ListItem>
          ))}
        </List>

      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {props.children}
      </Box>
    </Box>
  );
}

const styles = theme => {
  return {
    link: {
      textDecoration: "none",
      "&:hover, &:focus": {
        backgroundColor: theme.palette.background.light,
      },
    },
    linkActive: {
      backgroundColor: theme.palette.background.light,
    },
    linkNested: {
      paddingLeft: 0,
      "&:hover, &:focus": {
        backgroundColor: "#FFFFFF",
      },
    },
    linkIcon: {
      marginRight: theme.spacing(1),
      color: theme.palette.text.secondary + "99",
      transition: theme.transitions.create("color"),
      width: 24,
      display: "flex",
      justifyContent: "center",
    },
    linkIconActive: {
      color: theme.palette.primary.main,
    },
    linkText: {
      padding: 0,
      color: theme.palette.text.secondary + "CC",
      transition: theme.transitions.create(["opacity", "color"]),
      fontSize: 16,
    },
    linkTextActive: {
      color: theme.palette.text.primary,
    },
    linkTextHidden: {
      opacity: 0,
    },
    nestedList: {
      paddingLeft: theme.spacing(2) + 30,
    },
    sectionTitle: {
      marginLeft: theme.spacing(4.5),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    divider: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(4),
      height: 1,
      backgroundColor: "#D8D8D880",
    },
    filterArrow: {
      float: 'right',
      margin: '10px 1px 3px 1px',
      cursor: 'pointer',
      alignSelf: 'center',
    },
    value: {
      fontSize: "15px !important",
      textAlign: 'left',
      alignSelf: 'center !important',
      fontWeight: 'bold',
      padding: '10px 0px 0px 20px'
    },
    optionsCotainer: {
      paddingTop: 20
    },
    filterContainer: {
      padding: '0px 20px 20px 20px',
      height: '450px',
      overflowY: 'scroll'
    },
    buttonContainer: {
      display: 'flex',
      paddingTop: 20,
      padding: 20,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    grow: {
      flexGrow: 1,
    },
    notificationIcon: {
      marginTop: "10px",
      marginRight: "30px",
      width: "30px !important",
      height: "30px !important"
    },
    quickMenuIcon: {
      marginTop: "13px",
      marginRight: "20px",
      width: "25px !important",
      height: "25px !important"
    },
    menuButton: {
      justifyContent: 'left',
      display: 'flex',
      marginRight: theme.spacing(2),
      flex: 1,
      cursor: 'pointer'
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flex: 1
      },
    },
    sectionMobile: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      flex: 1,
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    appBar: {
      position: "fixed",
      zIndex: "1201 !important",
      backgroundColor: "#ED1C24 !important",
      backgroundImage: "linear-gradient(to right, #ED1C24  60% 80%,#003874 80%) ",
      // boxShadow:'none'
      boxShadow: '0px 0px 0px 0.5px rgb(0 0 0 / 9%) !important',
    },
    popup: {
      boxShadow: '7px 7px 10px 0 rgba(0, 0, 0, 0.1)',
      backgroundColor: '#ffffff',
      fontSize: 10,
      width: 200,
      cursor: "pointer"
    },
    protxt: {
      display: 'block',
      "&:hover": {
        background: theme.palette.action.hover
      }
    },
    protext: {
      display: 'block',
      fontSize: 14,
    },
    leftSidebar: {
      color: "#003874 !important"
    },
    link: {
      textDecoration: 'none',
    },
    image: {
      alignSelf: 'center',
      // width: 200,
      // height: 30
      height: 44,
      [theme.breakpoints.only('xs')]: {
        height: 30,
      }
    },
    marginLeft20: {
      marginLeft: 20
    },
    protextlist: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'start',
      fontSize: 14,
      color: "#003875"
    },

    licenseContainer: {
      display: 'flex',
      flexDirection: 'row',
      // flex: 1,
      marginLeft: -16
    },
    fullScreen: {
      paddingLeft: 20,
      paddingTop: 8,
      [theme.breakpoints.only('xs')]: {
        paddingLeft: 0, marginLeft: -20,
        '& div..MuiIconButton-root': {
          padding: "0px 8px",
        }
      }
    },
    myTeamHeader: {
      // marginLeft: '-16px',
      position: 'fixed',
      // backgroundColor: '#fff',
      justifyContent: 'center',
      display: 'flex',
      height: "48px",
    },
    headerBack: {

      // marginLeft: "-17px !important",
      // padding: "15px 20px 8px 20px",
      display: 'flex',
      alignItems: "center",
      // position: "fixed",
      width: "100%",
      background: "#fff",
      // zIndex: 3,
      [theme.breakpoints.only('xs')]: {
        top: "4.35rem",
      },

      [theme.breakpoints.only('sm')]: {
        top: "5rem"
      },
    },
    header: {
      // marginLeft: "-17px !important",
      padding: "13px 20px 8px 20px",
      alignItems: "center",
      justifyContent: 'center',
      // position: "fixed",
      width: "100%",
      background: "#fff",
      // zIndex: 3,
      [theme.breakpoints.only('xs')]: {
        top: "4.35rem",
      },

      [theme.breakpoints.only('sm')]: {
        top: "5rem"
      },
    },
    backArrowIcon: {
      float: 'right',
      margin: '10px',
      cursor: 'pointer',
      width: 12,
      alignSelf: 'center'
    }
  }
};

export default withStyles(styles)(Layout);