import { Table, Tooltip } from "antd";
import { useEffect, useState } from "react";

const ProductList = () => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const columns = [
    {
      title: "İmage",
      dataIndex: "images",
      witdth: "20%",
      render: (images, record) => (
        <img
          alt={`/${record.images}`}
          src={`/${record.images[0]}`}
          style={{
            width: "100px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            border: "1px solid #eee",
            padding: "1px",
            backgroundColor: "#fff",
          }}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category",
      dataIndex: "categoryName",
      key: "categoryName",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => <p style={{ fontWeight: "500" }}>{price}$</p>,
    },
    {
      title: "Discount",
      dataIndex: "discount",
      key: "discount",
    },
    {
      title: "Size",
      dataIndex: "sizes",
      key: "sizes",
      render: (sizes) => (
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {sizes.map((size, index) => (
            <div
              key={index}
              style={{
                width: "32px",
                height: "32px",
                lineHeight: "32px",
                textAlign: "center",
                backgroundColor: "#e0e0e0 ",
                borderRadius: "4px",
                border: "1 px solid #dcdcdc",
                fontSize: "12px",
                fontWeight: 500,
              }}
            >
              {size}
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Color",
      dataIndex: "colors",
      key: "colors",
      render: (colors) => (
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {colors.map((color, index) => (
            <Tooltip key={index} title={color}>
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  backgroundColor: color,
                  border: "1px solid #ccc",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              />
            </Tooltip>
          ))}
        </div>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Process",
      key: "process",
    },
  ];

  const getProducts = async () => {
    try {
      const [categoryResponse, productResponse] = await Promise.all([
        fetch("http://localhost:5100/api/categories"),
        fetch("http://localhost:5100/api/products"),
      ]);
      if (!categoryResponse.ok || !productResponse.ok) {
        console.log("Veri Getirilirken Bir Hata Oldu !");
      } else {
        const [products, categories] = await Promise.all([
          productResponse.json(),
          categoryResponse.json(),
        ]);
        const data = products.map((product) => {
          const categoryId = product.category;
          const category = categories.find(
            (item) => item._id.toString() === categoryId
          );

          console.log(category);
          return { ...product, categoryName: category ? category.name : "Yok" };
        });
        setDataSource(data);
      }
    } catch (error) {
      console.log("Sunucu Hatası !");
    }
  };

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

export default ProductList;
