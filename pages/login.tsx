import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { FC, useState } from "react";
import RegistrationForm from "../src/components/registrationForm";
import { getAppCookies } from "../src/utils";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const LogIn: FC = () => {
  const [error, setError] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onLogin = async (values: { email: string; password: string }) => {
    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/auth/login`, values);
      if (response.data.success && response.data.token) {
        Cookies.set("token", response.data.token);
        router.push("/country");
      }
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <RegistrationForm
      isLogingPage={true}
      onSubmit={onLogin}
      error={error}
      loading={loading}
    />
  );
};

export const getServerSideProps = async (context: { req: any }) => {
  const { req } = context;

  const { token } = getAppCookies(req);

  if (token) {
    return {
      redirect: {
        destination: "/country",
        permanent: false,
      },
    };
  }

  return { props: {} };
};

export default LogIn;
