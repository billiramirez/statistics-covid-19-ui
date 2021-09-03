import type { NextPage } from "next";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Button, Space } from "antd";
import DataTable from "../../src/components/table";
import SearchCountry from "../../src/components/search";
import useStatisticData from "../../src/hooks/useStatisticData";
import { Statistic } from "../../src/utils/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface HomePage {
  statistics: Statistic[];
}

const Home: NextPage<HomePage> = ({ statistics = [] }) => {
  const [searchText, setSearchText] = useState("");
  const [dataTable, setDataTable, setRawData] = useStatisticData(statistics);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searchCountry = async () => {
      try {
        setLoading(true);
        const endpoint = `${API_URL}/statistics/${searchText}`;
        const response = await axios.get(endpoint);
        console.log(response);
        const data = response.data;

        if (data.success && data.statistics) {
          setRawData([data.statistics]);
          setLoading(false);
        }
      } catch (err) {
        setRawData([]);
        setLoading(false);
      }
    };

    if (searchText) {
      searchCountry();
    }
  }, [searchText, setDataTable, setRawData]);

  const onSearch = (value: any) => {
    value ? setSearchText(value) : setRawData(statistics);
  };

  const syncData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/sync`);
      const syncData = response.data;
      if (syncData.message) {
        await fetchInitialData();
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  const fetchInitialData = async () => {
    try {
      const response = await axios.get(`${API_URL}/statistics`);
      const initialData = response.data;

      if (initialData.success && initialData.statistics) {
        setRawData(initialData.statistics);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="App">
      <SearchCountry onSearch={onSearch} loading={loading} />
      <div style={{ marginBottom: "20px" }}>
        <Button type="primary" onClick={syncData} disabled={loading}>
          Sync Data
        </Button>
      </div>
      <DataTable data={dataTable} loading={loading} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const statisticsResponse: AxiosResponse<any> = await axios.get(
    `${process.env.API_URL}/statistics`
  );

  const data = statisticsResponse.data.statistics;

  return {
    props: {
      layout: "APP",
      statistics: data || [],
    },
  };
};

export default Home;
