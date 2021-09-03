import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";
import { FC, useState } from "react";
import RegistrationForm from "../src/components/registrationForm";
import { getAppCookies } from "../src/utils";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const SignUp: FC = () => {
  const [error, setError] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onCreateAccount = async (values: {
    email: string;
    password: string;
  }) => {
    try {
      const response = await axios.post(`${API_URL}/auth/signup`, values);
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
      isLogingPage={false}
      onSubmit={onCreateAccount}
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

export default SignUp;
