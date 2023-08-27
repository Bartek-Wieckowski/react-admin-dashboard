import React, { useState } from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatableusers";
import { Link } from "react-router-dom";

export default function DataTable() {
  const [data, setData] = useState(userRows);

  function handleDelete(id) {
    setData(data.filter((item) => item.id !== id));
  }

  const columnsWithAction = [...userColumns, {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cell-action">
          <Link to="/users/test" style={{ textDecoration: "none" }}>
            <div className="view-button">View</div>
          </Link>
          <div className="delete-button" onClick={() => handleDelete(params.id)}>
            Delete
          </div>
        </div>
      );
    },
  }];

  return (
    <div className="datatable">
      <div className="datatable-title">
        Add new User
        <Link to="/users/new" style={{ textDecoration: "none" }} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="data-grid"
        rows={data}
        columns={columnsWithAction}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
}
