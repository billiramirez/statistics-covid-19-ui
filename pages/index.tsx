import type { NextPage } from "next";
import { Button } from "antd";

const Home: NextPage = () => {
  return (
    <div className="App">
      <Button type="primary">Button for Index</Button>
    </div>
  );
};

export const getServerSideProps = () => {
  return {
    props: {
      layout: "APP",
    },
  };
};

export default Home;
