import React from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatableusers";
import { Link } from "react-router-dom";

export default function DataTable() {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cell-action">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="view-button">View</div>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className="delete-button">Delete</div>
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatable-title">
        Add new User
        <Link to="/users/new" style={{ textDecoration: "none" }} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
