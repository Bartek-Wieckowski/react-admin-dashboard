export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cell-with-img">
          <img
            className="cell-img"
            src={params.row.img || "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
            alt="img"
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "address",
    headerName: "Address",
    width: 100,
  },
  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return <div className={`cell-with-status ${params.row.status}`}>{params.row.status}</div>;
    },
  },
];
export const userRows = [
  {
    id: 1,

    username: "Jon1 Snow1",
    age: 35,
    img: "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "lala1@lala.com",
  },
  {
    id: 2,
    username: "Jon2 Snow2",
    age: 25,
    img: "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "pending",
    email: "lala2@lala.com",
  },
  {
    id: 3,
    username: "Jon3 Snow3",
    age: 15,
    img: "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "passive",
    email: "lala3@lala.com",
  },
  {
    id: 4,
    username: "Jon4 Snow4",
    age: 65,
    img: "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "lala4@lala.com",
  },
  {
    id: 5,
    username: "Jon5 Snow5",
    age: 24,
    img: "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "pending",
    email: "lala5@lala.com",
  },
];
