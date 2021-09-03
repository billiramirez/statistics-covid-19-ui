import _ from "lodash";
import type { NextPage } from "next";
import { useEffect, useState, useReducer } from "react";
import axios, { AxiosResponse } from "axios";
import { Button, Space } from "antd";
import DataTable from "../../src/components/table";
import SearchCountry from "../../src/components/search";
import StatisticModal from "../../src/components/modal";
import useStatisticData from "../../src/hooks/useStatisticData";
import { Statistic } from "../../src/utils/types";
import formReducer from "../../src/reducers/formReducer";
import { getAppCookies, getPayload } from "../../src/utils";
import { useRouter } from "next/router";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface HomePage {
  statistics: Statistic[];
  token: string;
}

export const initialFormValues = {
  newCases: 0,
  activeCases: 0,
  criticalCases: 0,
  recoveredCases: 0,
  deaths: 0,
  tests: 0,
};

const Home: NextPage<HomePage> = ({ statistics = [], token }) => {
  const [searchText, setSearchText] = useState("");
  const [dataTable, setDataTable, setRawData] = useStatisticData(statistics);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentCountry, setCurrentCountry] = useState("");
  const [state, dispatch] = useReducer(formReducer, initialFormValues);
  const router = useRouter();

  useEffect(() => {
    const searchCountry = async () => {
      try {
        setLoading(true);
        const endpoint = `${API_URL}/statistics/${searchText}`;
        const response = await axios.get(endpoint, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = response.data;

        if (data.success && data.statistics) {
          setRawData([data.statistics]);
          setLoading(false);
        }
      } catch (err: any) {
        if (err.response.status === 401) router.push("/login");
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

  const reset = () => dispatch({ type: "RESET", payload: initialFormValues });

  const handleOk = async () => {
    try {
      const payload = getPayload(state);
      const response = await axios.post(
        `${API_URL}/statistics/${currentCountry}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success && response.data.statistics) {
        await fetchInitialData();
      }

      setIsModalVisible(false);
      reset();
    } catch (err: any) {
      if (err.response.status === 401) router.push("/login");
    }
  };

  const handleCancel = () => {
    reset();
    setIsModalVisible(false);
  };

  const handleChangeValues = (e: any) => {
    dispatch({
      type: "HANDLE_INPUT_VALUES",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const orderedDataByContinent = _.orderBy(dataTable, "continent");

  return (
    <div className="App">
      <SearchCountry onSearch={onSearch} loading={loading} />
      <div style={{ marginBottom: "20px" }}>
        <Button type="primary" onClick={syncData} disabled={loading}>
          Sync Data
        </Button>
      </div>
      <DataTable
        data={orderedDataByContinent}
        loading={loading}
        onSelectItem={(country) => {
          setCurrentCountry(country);
          setIsModalVisible(true);
        }}
      />
      <StatisticModal
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
        currentCountry={currentCountry}
        handleOk={handleOk}
        handleCancel={handleCancel}
        handleChangeValues={handleChangeValues}
        data={state}
      />
    </div>
  );
};

export const getServerSideProps = async (context: { req: any }) => {
  const { req } = context;

  const { token } = getAppCookies(req);
  if (!token)
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };

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
