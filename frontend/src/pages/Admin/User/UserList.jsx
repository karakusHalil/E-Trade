import { Table, Button } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const [dataSource, setDataSource] = useState([]);
  const navigate = useNavigate();
  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      width: "32%",
      render: (text) => <div style={{ marginLeft: "10px" }}>{text}</div>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "33%",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      width: "15%",
      filters: [
        {
          text: "admin",
          value: "admin",
        },
      ],
      onFilter: (value, record) => record.role.indexOf(value) === 0,
    },
    {
      title: "Process",
      key: "process",
      width: "20%",
      fixed: "right",
      render: (record) => (
        <>
          <Button
            onClick={() => {
              navigate("/admin/users/update");
            }}
            color="cylan"
            variant="solid"
            style={{ marginRight: "5px" }}
          >
            Update
          </Button>
          <Button color="danger" variant="solid">
            Remove
          </Button>
        </>
      ),
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
        scroll={{ x: "max-content" }}
      />
    </>
  );
};

export default UserList;
