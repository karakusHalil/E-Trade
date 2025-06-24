import { Button, Form, Input } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import "./UpdateCategory.css";
import { useEffect } from "react";

const UpdateCategory = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const params = useParams();
  const categoryId = params.id;
  // console.log(categoryId);

  useEffect(() => {
    const getCategoryById = async () => {
      try {
        const response = await fetch(
          `http://localhost:5100/api/categories/${categoryId}`
        );
        if (response.ok) {
          const data = await response.json();
          if (data) {
            form.setFieldsValue({
              name: data.name,
              img: data.img,
              id: categoryId,
            });
            console.log(form.getFieldValue);
          }
        }
      } catch (error) {
        console.log("Sunucu Hatası !");
      }
    };

    getCategoryById();
  }, [categoryId, form]);

  const handleUpdateCategory = async (values) => {
    try {
      const response = await fetch(
        `http://localhost:5100/api/categories/${categoryId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );
      if (response.ok) {
        console.log("Kategori Güncellendi !");
      } else {
        console.log("Kategori Güncellenirken Hata Oluştu !");
      }
    } catch (error) {
      console.log("Sunucu Hatası !");
    }
  };
  return (
    <>
      <div className="category-update-wrapper">
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={handleUpdateCategory}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Category Name"
            name="name"
            rules={[
              { required: true, message: "Please input your Category Name!" },
            ]}
          >
            <Input placeholder="Category Name enter..." />
          </Form.Item>

          <Form.Item
            name="img"
            label="Image Url"
            rules={[
              { required: true, message: "Please input your Image Url!" },
            ]}
          >
            <Input placeholder="Category Image enter..." />
          </Form.Item>

          <Form.Item label={null}>
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => navigate("/admin/categories/list")}
            >
              Update
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default UpdateCategory;
