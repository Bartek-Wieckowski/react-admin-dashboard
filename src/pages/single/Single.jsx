import React from "react";
import "./single.scss";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import { Chart } from "../../components/chart/Chart";
import List from "../../components/table/Table";

export const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="single-container">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="edit-button">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg"
                alt=""
                className="item-img"
              />
              <div className="details">
                <h1 className="item-title">Jane Doe</h1>
                <div className="detail-item">
                  <span className="detail-key">Email:</span>
                  <span className="detail-key">janedoe@gmail.com</span>
                </div>
                <div className="detail-item">
                  <span className="detail-key">Phone:</span>
                  <span className="detail-key">+12345432</span>
                </div>
                <div className="detail-item">
                  <span className="detail-key">Address:</span>
                  <span className="detail-key">St.Loius 203812 </span>
                </div>
                <div className="detail-item">
                  <span className="detail-key">Country:</span>
                  <span className="detail-key">Forgotten Realms</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title={"User Spending ( Last 6 Months )"} />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};
