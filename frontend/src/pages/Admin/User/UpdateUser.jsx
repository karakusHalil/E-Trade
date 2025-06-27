import { Button, Form, Input, message, Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import "./UpdateUser.css";
import { useEffect } from "react";
const UpdateUser = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const params = useParams();
  const userId = params.id;

  useEffect(() => {
    const getUserById = async () => {
      try {
        const response = await fetch(
          `http://localhost:5100/api/users/${userId}`
        );
        if (response.ok) {
          const data = await response.json();
          //   console.log(data);
          if (data) {
            form.setFieldsValue({
              id: userId,
              username: data.username,
              email: data.email,
              role: data.role,
            });
            // console.log(form.getFieldsValue());
          }
        }
      } catch (error) {
        console.log("Sunucu Hatası !");
      }
    };
    getUserById();
  }, [userId, form]);

  const handleUpdateUser = async (values) => {
    try {
      const response = await fetch(
        `http://localhost:5100/api/users/${userId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );
      if (response.ok) {
        message.success("Kullanıcı başarıyla güncellendi");
        navigate("/admin/users/list");
      } else {
        message.error("Kullanıcı güncellenirken hata oldu !");
      }
    } catch (error) {
      console.log("Sunucu Hatası !");
    }
  };

  return (
    <>
      <div className="user-update-wrapper">
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={handleUpdateUser}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Role"
            name="role"
            rules={[
              { initialValues: "user", message: "Please select a role!" },
            ]}
          >
            <Select
              initialValues="user"
              style={{ width: "100%" }}
              options={[
                { value: "user", label: "user" },
                { value: "admin", label: "admin" },
              ]}
            />
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default UpdateUser;
