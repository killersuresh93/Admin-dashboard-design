import React from 'react';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import './featured.scss';
import { CircularProgressbar } from 'react-circular-progressbar';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import 'react-circular-progressbar/dist/styles.css';
export default function Featured() {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Top Revenue</h1>
        <MoreVertOutlinedIcon />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text="70%" strokeWidth="5" />
        </div>
        <p className="title">Total sale made Today</p>
        <p className="amount">$ 390</p>
        <p className="dec">The switch expression is evaluated once</p>
        <div className="summary">
          <div className="items">
            <p className="itemTitle">Target</p>
            <div className="itemResult negative">
              <KeyboardArrowUpOutlinedIcon />
              <div className="Result">12%</div>
            </div>
          </div>
          <div className="items">
            <p className="itemTitle ">Last Week</p>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon />
              <div className="Result">12%</div>
            </div>
          </div>
          <div className="items">
            <p className="itemTitle">Last Month</p>
            <div className="itemResult positive">
              <KeyboardArrowDownOutlinedIcon className="" />
              <div className="Result">12%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
