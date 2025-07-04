import { Button, Form, Input, InputNumber, Checkbox, Select } from "antd";
import "./CreateProduct.css";
import { useEffect, useState } from "react";

const CreateProduct = () => {
  const [form] = Form.useForm();
  const formLayout = "vertical";
  const [categories, setCategories] = useState([]);
  const colorOptions = [
    "Black",
    "White",
    "Gray",
    "Red",
    "Yellow",
    "Blue",
    "Pink",
  ];
  const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL"];

  const addProduct = async (values) => {
    const { colors, sizes, ...restValue } = values;
    const imageLinks = values.images.split("\n").map((link) => link.trim());
    console.log(imageLinks, colors, sizes, restValue);
    try {
      const response = await fetch("http://localhost:5100/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...restValue,
          images: imageLinks,
          colors,
          sizes,
        }),
      });
      if (response.ok) {
        form.resetFields();
      } else {
        console.log("Ürün Oluşturulurken Hata Meydana Geldi !");
      }
    } catch (error) {
      console.log("Sunucu Hatası !");
    }
  };

  const getCategories = async () => {
    try {
      const response = await fetch("http://localhost:5100/api/categories");
      if (response.ok) {
        const data = await response.json();
        setCategories(data);
      } else {
        console.log("Kategori Getirilirken Bir Hata Meydana Geldi !");
      }
    } catch (error) {
      console.log("Sunucu Hatası !");
    }
  };

  useEffect(() => {
    getCategories();
  }, [categories]);

  return (
    <>
      <div className="product-form-wrapper">
        <Form
          layout={formLayout}
          form={form}
          initialValues={{
            layout: formLayout,
            colors: ["Black", "White"],
            sizes: ["S", "M", "L"],
            price: 0,
            discount: 0,
          }}
          onFinish={addProduct}
        >
          <Form.Item
            label="Product Name"
            name="name"
            rules={[
              { required: true, message: "Lütfen Ürün ismi ekleyiniz !" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="images"
            label="Image Url"
            rules={[{ required: true, message: "Lütfen İmg Url ekleyiniz !" }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: "Lütfen açıklama ekleyiniz !" }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            label="Categories"
            name="category"
            rules={[{ required: true, message: "Lütfen kategori seçiniz !" }]}
          >
            <Select placeholder="Select a category...">
              {categories.map((category) => (
                <Select.Option key={category._id} value={category._id}>
                  {category.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Stock Code"
            name="stockCode"
            rules={[{ required: true, message: "Stok kod ekleyiniz !" }]}
          >
            <Input placeholder="Product Stock Code enter..." />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Lütfen fiyat giriniz !" }]}
          >
            <InputNumber
              placeholder="Enter..."
              min={0}
              step={0.01}
              max={100000}
            />
          </Form.Item>

          <Form.Item label="Discount" name="discount">
            <InputNumber placeholder="Enter..." min={0} step={0.01} max={100} />
          </Form.Item>

          <Form.Item
            label="Colors"
            name="colors"
            rules={[{ required: true, message: "Lütfen renk seçiniz !" }]}
          >
            <Checkbox.Group options={colorOptions} />
          </Form.Item>

          <Form.Item
            label="Sizes"
            name="sizes"
            rules={[{ required: true, message: "Lütfen beden seçiniz !" }]}
          >
            <Checkbox.Group options={sizeOptions} />
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default CreateProduct;
