import React from 'react';
import DashboardIcon from '@mui/icons-material/DashboardOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import './sidebar.scss';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">
          @<small>dmin</small>
        </div>
        <hr />
      </div>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <i className="icon">
              {' '}
              <DashboardIcon />
            </i>
            <span>Dashboard</span>
          </li>
          <li>
            <i className="icon">
              <AccountCircleOutlinedIcon />
            </i>
            <span>Users</span>
          </li>
          <li>
            <i className="icon">
              <InventoryOutlinedIcon />
            </i>
            <span>Products</span>
          </li>
          <li>
            {' '}
            <i className="icon">
              <LocalMallOutlinedIcon />
            </i>
            <span>Orders</span>
          </li>
          <li>
            {' '}
            <i className="icon">
              <LocalShippingOutlinedIcon />
            </i>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            {' '}
            <i className="icon">
              <QueryStatsOutlinedIcon />
            </i>
            <span>Stats</span>
          </li>
          <li>
            {' '}
            <i className="icon">
              <NotificationsOutlinedIcon />
            </i>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            {' '}
            <i className="icon">
              <HealthAndSafetyOutlinedIcon />
            </i>
            <span>System Health</span>
          </li>
          <li>
            {' '}
            <i className="icon">
              <BookOutlinedIcon />
            </i>
            <span>Logs</span>
          </li>
          <li>
            {' '}
            <i className="icon">
              <SettingsOutlinedIcon />
            </i>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            {' '}
            <i className="icon">
              <PermIdentityOutlinedIcon />
            </i>
            <span> Profile</span>
          </li>
          <li>
            {' '}
            <i className="icon">
              <LockOpenOutlinedIcon />
            </i>
            <span> Login</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  );
}
