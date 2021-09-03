import type { NextPage } from "next";
import { Button } from "antd";
import { getAppCookies } from "../src/utils";

const Home: NextPage = () => {
  return (
    <div className="App">
      <Button type="primary">Button for Index</Button>
    </div>
  );
};

export const getServerSideProps = async (context: { req: any }) => {
  const { req } = context;

  const { token } = getAppCookies(req);

  return {
    redirect: {
      destination: !token ? "/login" : "/country",
      permanent: false,
    },
  };
};

export default Home;
