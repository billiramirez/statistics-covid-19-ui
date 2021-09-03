import type { NextPage } from "next";
import { Button } from "antd";
import DataTable from "../../src/components/table";
import SearchCountry from "../../src/components/search";

const Home: NextPage = () => {
  return (
    <div className="App">
      <SearchCountry />
      <div style={{ marginBottom: "20px" }}>
        <Button type="primary">Sync Data</Button>
      </div>
      <DataTable />
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
