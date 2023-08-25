import React from "react";
import "./home.scss";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import { Widget } from "../../components/widget/Widget";
import { Featured } from "../../components/featured/Featured";
import { Chart } from "../../components/chart/Chart";

export const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
  );
};
