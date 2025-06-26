import {
  Button,
  Form,
  Input,
  InputNumber,
  Checkbox,
  Select,
  message,
} from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const UpdateProduct = () => {
  const [form] = Form.useForm();
  const formLayout = "vertical";
  const navigate = useNavigate();
  const params = useParams();
  const productId = params.id;
  const [categories, setCategories] = useState([]);
  const colorOptions = [
    "Black",
    "White",
    "Gray",
    "Red",
    "Yellow",
    "Blue",
    "Pink",
    "Aqua",
    "Lime",
    "Navy",
  ];
  const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL"];

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

  const updateProduct = async (values) => {
    const { colors, sizes, ...restValue } = values;
    try {
      const response = await fetch(
        `http://localhost:5100/api/products/${productId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...restValue, colors, sizes }),
        }
      );
      if (response.ok) {
        message.success("Ürün başarıyla güncellendi");
        navigate("/admin/products/list");
      } else {
        message.warning("Ürün güncellenirken hata oldu");
      }
    } catch (error) {
      console.log("Sunucu Hatası !");
    }
  };

  const getProductbyId = async () => {
    try {
      const response = await fetch(
        `http://localhost:5100/api/products/${productId}`
      );
      if (response.ok) {
        const data = await response.json();
        const formattedColors = data.colors.map(
          (c) => c.charAt(0).toUpperCase() + c.slice(1).toLowerCase()
        );
        if (data) {
          form.setFieldsValue({
            id: data._id,
            name: data.name,
            images: data.images,
            price: data.price,
            description: data.description,
            colors: formattedColors,
            sizes: data.sizes,
            category: data.category,
            stockCode: data.stockCode,
            discount: data.discount,
          });
        }
      } else {
        message.error("Ürün getirme başarısız !");
        return;
      }
    } catch (error) {
      console.log("Sunucu hatası !");
    }
  };

  useEffect(() => {
    getProductbyId();
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);
  return (
    <>
      <div className="product-form-wrapper">
        <Form layout={formLayout} form={form} onFinish={updateProduct}>
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

export default UpdateProduct;
