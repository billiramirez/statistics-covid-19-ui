import { Form, Input, Button, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Link from "next/link";
import { FC } from "react";

const Title = Typography.Title;
const Text = Typography.Text;

const RegistrationForm: FC<{
  isLogingPage: boolean;
  onSubmit: ({ email, password }: { email: string; password: string }) => void;
  error: boolean;
  loading: boolean;
}> = ({ isLogingPage, onSubmit, error, loading }) => {
  const onFinish = async (values: any) => {
    await onSubmit(values);
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "280px",
        marginTop: "300px",
        background: "#fff",
        justifyContent: "center",
      }}
    >
      <Form
        name="normal_login"
        className="login-form"
        style={{ maxWidth: "300px" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Title level={3} style={{ textAlign: "center" }}>
          Welcome
        </Title>
        <p style={{ textAlign: "center" }}>
          {isLogingPage
            ? "Please provide your crendentials"
            : "Please create your account"}
        </p>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            type="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ width: "100%" }}
            loading={loading}
          >
            {isLogingPage ? " Log in" : "Sign Up"}
          </Button>
          {isLogingPage ? (
            <Link href="/signup">
              <a>register now!</a>
            </Link>
          ) : (
            <Link href="/login">
              <a>Log In</a>
            </Link>
          )}
        </Form.Item>

        {error && (
          <div>
            <Text type="danger">Something went wront, please try again</Text>
          </div>
        )}
      </Form>
    </div>
  );
};

export default RegistrationForm;
