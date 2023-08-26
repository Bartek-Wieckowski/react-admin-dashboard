import React from "react";
import "./list.scss";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import DataTable from "../../components/datatable/Datatable";


export const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="list-container">
        <Navbar />
        <DataTable/>
      </div>
    </div>
  );
};
