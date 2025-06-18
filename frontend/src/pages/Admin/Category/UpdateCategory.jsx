import { Button, Form, Input } from "antd";
import "./UpdateCategory.css";

const UpdateCategory = () => {
  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Category Name"
          name="username"
          rules={[
            { required: true, message: "Please input your Category Name!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="img"
          label="Image Url"
          rules={[{ required: true, message: "Please input your Image Url!" }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default UpdateCategory;
