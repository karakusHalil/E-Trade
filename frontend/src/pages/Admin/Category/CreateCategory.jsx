import { Button, Form, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateCategory.css";

const CreateCategory = () => {
  const navigate = useNavigate();
  const handleCreateCategory = async (values) => {
    try {
      const response = await fetch("http://localhost:5100/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      console.log(values);
      if (response.ok) {
        navigate("/admin/categories/list");
      } else {
        console.log("Kategori Oluşturulurken Hata Oldu !");
      }
    } catch (error) {
      console.log("Sunucu Hatası !", error);
    }
  };

  return (
    <>
      <div className="category-form-wrapper">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={handleCreateCategory}
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
            <Input />
          </Form.Item>

          <Form.Item
            name="img"
            label="Image Url"
            rules={[
              { required: true, message: "Please input your Image Url!" },
            ]}
          >
            <Input.TextArea />
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

export default CreateCategory;
