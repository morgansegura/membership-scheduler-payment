import React from 'react'
// [Components]
import { ToggleColorMode } from 'components'
// [Hooks]
import { useStorage } from 'hooks'
// [Mui]
import {
  Box,
  IconButton,
  MenuItem,
  Menu,
  Tooltip,
  Divider,
  ListItemIcon,
  Avatar,
  useTheme,
} from '@mui/material'
import SettingsAccessibilityOutlinedIcon from '@mui/icons-material/SettingsAccessibilityOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import PersonAdd from '@mui/icons-material/PersonAdd'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined'
import BuildCircleOutlinedIcon from '@mui/icons-material/BuildCircleOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined'

type Props = {
  children?: React.ReactChild | React.ReactChild[]
}

const ProfileMenu: React.FC<Props> = ({ children }) => {
  const { getStorage } = useStorage()
  const theme = useTheme()
  const [user, setUser] = React.useState(Boolean(getStorage('user')))
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  React.useEffect(() => {
    if (user) {
      setUser(true)
    }
  }, [user])

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        {user ? (
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
          </Tooltip>
        ) : (
          <IconButton onClick={handleClick} edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        )}
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            minWidth: 250,
            overflow: 'visible',
            boxShadow: theme.shadows[24],
            my: 0,
            fontWeight: 700,
            py: 2.5,
            px: 2,
            '& .MuiList-root': {
              p: 0,
            },
            '& .MuiMenuItem-root': {
              display: 'flex',
              alignItems: 'center',
              px: 1,
              fontWeight: 600,
              // cursor: 'pointer',
              color: theme.palette.grey[600],
              transition: `background-color 0.3s ${theme.transitions.easing.easeOut}, color 0.3s ${theme.transitions.easing.easeOut}`,
              '& .MuiSvgIcon-root': {
                transition: `background-color 0.3s ${theme.transitions.easing.easeOut}, fill 0.3s ${theme.transitions.easing.easeOut}`,
              },
            },
            '& .MuiMenuItem-root:hover': {
              color: theme.palette.grey[900],
              borderRadius: 1,
              '& .MuiSvgIcon-root': {
                backgroundColor: theme.palette.primary.main,
                fill: theme.palette.common.white,
              },
            },
            '& .MuiSvgIcon-root': {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 37,
              height: 37,
              p: 1,
              mr: 2.5,
              backgroundColor: theme.palette.grey[200],
              borderRadius: 1,
              fill: theme.palette.grey[600],
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <BadgeOutlinedIcon fontSize="small" /> Profile
        </MenuItem>
        <MenuItem>
          <AccountCircleOutlinedIcon fontSize="small" /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <BuildCircleOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <ToggleColorMode />
        <MenuItem>
          <ListItemIcon>
            <LogoutOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Signout
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <LoginOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Signin
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ExitToAppOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Register
        </MenuItem>
      </Menu>
    </>
  )
}

export default ProfileMenu
