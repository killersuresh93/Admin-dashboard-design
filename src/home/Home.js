import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/navbar';
import Widgets from '../components/widgets/widgets';
import Featured from '../components/featured/featured';
import Charts from '../components/charts/charts';
import './home.scss';

export default function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgets type="user" />
          <Widgets type="order" />
          <Widgets type="earning" />
          <Widgets type="balance" />
        </div>
        <div className="chart">
          <Featured />
          <Charts />
        </div>
      </div>
    </div>
  );
}
