import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './widgets.scss';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
export default function Widgets({ type }) {
  let data = {};

  const percentage = 20;
  const counter = 100;

  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'see all Users',
        icon: <PersonOutlineIcon className="icon" />,
      };
      break;
    case 'order':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'see all Orders',
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{ backgroundColor: 'magenta' }}
          />
        ),
      };
      break;
    case 'earning':
      data = {
        title: 'EARNINGS',
        isMoney: true,
        link: 'see all Earnings',
        icon: (
          <AttachMoneyOutlinedIcon
            className="icon"
            style={{ backgroundColor: 'teal' }}
          />
        ),
      };
      break;
    case 'balance':
      data = {
        title: 'DETAILS',
        isMoney: true,
        link: 'see all Details',
        icon: (
          <PersonOutlineIcon
            className="icon"
            style={{ backgroundColor: 'seagreen' }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <div className="title">{data.title}</div>
        <div className="counter">
          {data.isMoney ? '$' : ''}
          {counter}
        </div>
        <div className="link">{data.link}</div>
      </div>

      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {percentage}
        </div>
        {data.icon}
      </div>
    </div>
  );
}
