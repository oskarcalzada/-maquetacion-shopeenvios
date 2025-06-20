import { Avatar, Button, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import { AccountCircle, Logout } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TopMenu() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    
    const userData = localStorage.getItem("user");
    if (!userData) {
        return null; // or return a placeholder if user data is not available
    }
    
    const user = JSON.parse(userData);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMyAccount = () => {
        navigate('/cuenta');
        handleClose();
    };

    const handleLogout = () => {
        console.log("Cerrar sesión clicked");
        localStorage.removeItem("user");
        localStorage.removeItem("ltkn");
        navigate('/login');
        window.location.reload(); // Reload the page to reflect the logout
        // Add logout logic here (redirect to login, clear auth state, etc.)
    };

    return (
        <>
            <Button
                variant="text"
                sx={{ color: 'white', textTransform: 'none', display: 'flex', alignItems: 'center' }}
                onClick={handleClick}
                className="top-menu-button"
                endIcon={<Avatar alt="User Avatar" src={user.avatarUrl} sx={{ width: 30, height: 30 }} />}
                aria-controls={open ? 'user-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                <span>
                    {user.firstName} {user.lastName}
                </span>
            </Button>
            
            <Menu
                id="user-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'user-menu-button',
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleMyAccount}>
                    <ListItemIcon>
                        <AccountCircle fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Mi cuenta</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Cerrar sesión</ListItemText>
                </MenuItem>
            </Menu>
        </>
    );
}