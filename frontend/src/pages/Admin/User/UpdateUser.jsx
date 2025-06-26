import { Button, Form, Input, Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import "./UpdateUser.css";
const UpdateUser = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const params = useParams();
  const userId = params.id;

  const getUserById = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5100/api/users/${userId}`);
      if(response.ok){
        const data = await response.json();
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
          onFinish={{}}
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
            rules={[{ defaultValue: "user", message: "Please select a role!" }]}
          >
            <Select
              defaultValue="user"
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
