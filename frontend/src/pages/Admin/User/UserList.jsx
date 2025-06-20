import { Table } from "antd";
import { useEffect, useState } from "react";

const UserList = () => {
  const [dataSource, setDataSource] = useState([]);
  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      with: "30%",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      with: "40%",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      with: "%30",
      fixed: "right",
      filters: [
        {
          text: "admin",
          value: "admin",
        },
      ],
      onFilter: (value, record) => record.role.indexOf(value) === 0,
    },
  ];

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:5100/api/users");
      if (response.ok) {
        const data = await response.json();
        setDataSource(data);
      } else {
        console.log("Üyeler getirilirken bir sorun meydana geldi !");
      }
    } catch (error) {
      console.log("Sunucu Hatası !");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowKey={(item) => item._id}
      />
    </>
  );
};

export default UserList;
