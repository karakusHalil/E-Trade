import { Table, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./CategoryList.css";

const CategoryList = () => {
  const navigate = useNavigate();
  const [dataCategory, setDataCategory] = useState([]);

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "img",
      width: "30%",
      render: (img, record) => (
        <img
          style={{
            width: "100px",
            height: "120px",
            boxShadow: "0 1px 4px rgba(0, 0, 0, 0.3)",
          }}
          src={`/${record.img}`}
          alt={`/${record.img}`}
        />
      ),
    },
    {
      title: "Category Name",
      dataIndex: "name",
      key: "name",
      width: "45%",
      align: "center",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Process",
      key: "process",
      width: "25%",
      render: (record) => (
        <>
          <Button
            onClick={() => {
              navigate(`/admin/categories/update/${record._id}`);
            }}
            color="cylan"
            variant="solid"
            style={{ marginRight: "5px" }}
          >
            Update
          </Button>
          <Button
            color="danger"
            variant="solid"
            onClick={() => deleteCategory(record._id)}
          >
            Remove
          </Button>
        </>
      ),
    },
  ];

  const getCategories = async () => {
    try {
      const response = await fetch("http://localhost:5100/api/categories");
      if (response.ok) {
        const data = await response.json();
        setDataCategory(data);
      } else {
        console.log("Kategoriler getirilirken bir hata oldu !");
      }
    } catch (error) {
      console.log("Sunucu Hatası !");
    }
  };

  const deleteCategory = async (categoryId) => {
    try {
      const response = await fetch(
        `http://localhost:5100/api/categories/${categoryId}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ _id: categoryId }),
        }
      );
      if (response.ok) {
        await getCategories();
        navigate("/admin/categories/list");
      } else {
        console.log("Kategori Silme İşlemi Gerçekleştirilemedi !");
      }
    } catch (error) {
      console.log("Sunucu Hatası !");
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <Table
        columns={columns}
        dataSource={dataCategory}
        rowKey={(item) => item._id}
      />
      ;
    </>
  );
};

export default CategoryList;
