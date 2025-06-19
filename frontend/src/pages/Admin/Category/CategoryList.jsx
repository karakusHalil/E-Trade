import { Table, Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./CategoryList.css";

const CategoryList = () => {
  const navigate = useNavigate();
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "img",
      with: "25%",
      render: (imgUrl) => <img src={imgUrl} alt="Category" />,
    },
    {
      title: "Category Name",
      dataIndex: "name",
      key: "name",
      with: "50%",
      align: "center",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Process",
      key: "process",
      with: "%25",
      render: (record) => (
        <>
          <Button
            onClick={() => {
              navigate("/admin/categories/update");
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
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={data} />;
    </>
  );
};

export default CategoryList;
