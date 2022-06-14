import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import './navbar.scss';
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wraper">
        <div className="search">
          {' '}
          <input type="text" placeholder="search" />
          <SearchOutlinedIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <LunchDiningIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <EmailOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <img
              src="https://www.thefamouspeople.com/profiles/images/mahesh-babu-1.jpg"
              alt="avatar"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
