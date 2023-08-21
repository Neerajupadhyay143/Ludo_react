
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Divider from '@mui/material/Divider';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import { Avatar } from '@mui/material';
import Challenge from './Challenge';
import AdminEarning from './AdminEarning';
import UserManager from './UserManager';
import AdminManager from './AdminManager';
import TransactionManager from './TransactionManager';
import EditPermission from './Permissions/EditPermission';
import AdminProfile from './AdminProfile';
import NewChallenges from './NewChallenges';
import NewTransaction from './NewTransaction';
import NewAdminEarning from './NewAdminEarning';
import NewUserManager from './NewUserManager';
import Hidden from '@mui/material/Hidden';
import { useState } from 'react';


const drawerWidth = 240;

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

export default function Header() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    // const [selectedOption, setSelectedOption] = React.useState('View all users');

    // const options = [
    //     'View all users',
    //     'Add new users',
    //     'Pending KYC',
    //     'Completed KYC',
    //     'Reject KYC',
    // ];

    // const handleOptionChange = (event) => {
    //     setSelectedOption(event.target.value);
    // };
    const navigate = useNavigate();





    const handleDrawerOpen = () => {
        setOpenDrawer(!openDrawer);
        setOpen(true);
    };

    const handleDrawerClose = () => {
    
        setOpenDrawer(false);
        setOpen(false);
    };


    return (
        <div className="container-section">


            <Box sx={{
                display: 'flex', animation: `$fadeInOut} 1s`,
                transition: '0.8s !important',
                transitionDuration: '0.9s !important',
                transitionTimingFunction: 'ease !important',
            }}>
                <CssBaseline />
                <AppBar sx={{ justifyContent: "space-between" }} position="fixed" open={open}>
                    <Toolbar sx={{ justifyContent: "space-between", background: " #00064b " }}>

                        <IconButton
                            color="white"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                color: "white",
                                marginRight: 5,
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />

                        </IconButton>


                        <Avatar sx={{ position: "inherit", color: "lightBlue", background: "#22009b" }} />






                    </Toolbar>
                </AppBar>
               
                <Drawer sx={{  background: '#00064b' }} variant="permanent" open={open}>
                        <DrawerHeader>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon sx={{ color: "white" }} />}
                            </IconButton>
                        </DrawerHeader>
                        <Divider sx={{ background: 'black' }} />
                        <List>

                        </List>
                        <Divider />
                        <List className='main-list' sx={{ color: "white", fontWeight: "500", backgroundColor: "#00064b" }}>


                            <ListItem disablePadding sx={{ display: 'block' }} >
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                    onClick={() => navigate("/")}  >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}

                                    >
                                        <LineStyleIcon sx={{ color: "blue", fontSize: "30px" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding sx={{ display: 'block' }} >
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                    onClick={() => navigate('/AdminProfile')}  >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >

                                        <ManageAccountsIcon sx={{ color: "#00eaff", fontSize: "30px" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Admin Profile" sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding sx={{ display: 'block' }} >
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                    onClick={() => navigate('/NewChallenges')} >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <SportsEsportsIcon sx={{ color: "lightGreen", fontSize: "30px" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Challenge Manager" sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding sx={{ display: 'block' }} >
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                    onClick={() => navigate('/NewUserManager')}  >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >

                                        <AccountCircleIcon sx={{ color: "lightBlue", fontSize: "30px" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="User Manager" sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding sx={{ display: 'block' }} >
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                    onClick={() => navigate('/AdminManager')}  >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >

                                        <AdminPanelSettingsIcon sx={{ color: "red", fontSize: "30px" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Admin Manager" sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding sx={{ display: 'block' }} >
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                    onClick={() => navigate('/NewTransaction')}  >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >

                                        <AccountBalanceWalletIcon sx={{ color: "orange", fontSize: "30px" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Transcation Manager" sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding sx={{ display: 'block' }} >
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                    onClick={() => navigate('/NewAdminEarning')}  >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >

                                        <AttachMoneyIcon sx={{ color: "yellow", fontSize: "30px" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Admin Earning" sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>

                        </List>
                    </Drawer>
               
                
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        overflow: 'auto',
                        '@media (max-width:600px)': {
                            p: 2, // Adjust padding for smaller screens
                        },
                        '@media (max-width:960px)': {
                            p: 2, // Further adjust padding for medium screens
                        },
                    }}
                >



                    <Routes>
                        <Route exact path='/' element={<Dashboard />}></Route>
                        
                        <Route exact path='/NewChallenges' element={<NewChallenges />}></Route>
                        <Route exact path='/NewUserManager' element={<NewUserManager />}></Route>
                        <Route exact path='/AdminManager' element={<AdminManager />}></Route>
                        <Route exact path='/NewTransaction' element={<NewTransaction />}></Route>
                        <Route exact path='/EditPermissionr' element={<EditPermission />}></Route>
                        <Route exact path='/NewAdminEarning' element={<NewAdminEarning />}></Route>
                        <Route exact path='/AdminProfile' element={<AdminProfile />}></Route>

                    </Routes>

                    {/* <Dashboard /> */}
                </Box>
            </Box>
        </div>
    );
}