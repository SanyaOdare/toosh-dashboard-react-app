export const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 }, 
  {
    field: "user", 
    headerName: "User", 
    width: 230, 
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
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
    field: "age",
    headerName: "Age",
    width: 100
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
        );      
    },
  },
];

// demo data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/6135340/pexels-photo-6135340.jpeg?auto=compress&cs=tinysrgb&w=1600",
    email: "1snow@gmail.com",
    status: "active",
    age: 35,
  },
  {
    id: 2,
    username: "Jaime Lannister",
    img: "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1600",
    email: "2snow@gmail.com",
    status: "active",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1822464/pexels-photo-1822464.jpeg?auto=compress&cs=tinysrgb&w=1600",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/2547972/pexels-photo-2547972.jpeg?auto=compress&cs=tinysrgb&w=1600",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Stark",
    img: "https://images.pexels.com/photos/704241/pexels-photo-704241.jpeg?auto=compress&cs=tinysrgb&w=1600",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/3932929/pexels-photo-3932929.jpeg?auto=compress&cs=tinysrgb&w=1600",
    email: "6snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/248952/pexels-photo-248952.jpeg?auto=compress&cs=tinysrgb&w=1600",
    email: "7snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/4916226/pexels-photo-4916226.jpeg?auto=compress&cs=tinysrgb&w=1600",
    email: "8snow@gmail.com",
    status: "passive",
    age: 38,
  },
  {
    id: 9,
    username: "Stark",
    img: "https://images.pexels.com/photos/4481257/pexels-photo-4481257.jpeg?auto=compress&cs=tinysrgb&w=1600",
    email: "9snow@gmail.com",
    status: "passive",
    age: 22,
  },
]