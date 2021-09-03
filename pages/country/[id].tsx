import { useRouter } from "next/router";
import type { NextPage } from "next";
import { getAppCookies } from "../../src/utils";
import axios from "axios";
import { Descriptions, Alert } from "antd";
import { useEffect, useState } from "react";

const CountryDetails: NextPage<{ token: string }> = ({ token }) => {
  const [data, setData] = useState<{
    population: number;
    country: string;
    cases: { total: number };
    continent: string;
    deaths: { total: number };
    tests: { total: number };
  }>();
  const [error, setError] = useState(false);
  const router = useRouter();
  const countryName = router.query.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/statistics/${countryName}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const dataResponse = response.data;
        setData(dataResponse.statistics);
      } catch (err: any) {
        if (err.response.status === 401) router.push("/login");
        setError(true);
      }
    };
    fetchData();
  }, [countryName]);

  if (error)
    return (
      <Alert
        style={{ marginTop: "50px" }}
        message="Something went wrong"
        description="We didn't find any record matching your search"
        type="error"
        showIcon
      />
    );
  if (!data) return null;

  return (
    <>
      <Descriptions
        title={`Covid Statistics for ${data.country}`}
        layout="vertical"
      >
        <Descriptions.Item label="Population">
          {data.population}
        </Descriptions.Item>
        <Descriptions.Item label="Continent">
          {data.continent}
        </Descriptions.Item>

        <Descriptions.Item label="Total of Cases">
          {data?.cases?.total ?? 0}
        </Descriptions.Item>
        <Descriptions.Item label="Total of Deaths">
          {data?.deaths?.total ?? 0}
        </Descriptions.Item>
        <Descriptions.Item label="Total of Tests">
          {data?.tests?.total ?? 0}
        </Descriptions.Item>
      </Descriptions>
    </>
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

  return {
    props: {
      layout: "APP",
      token,
    },
  };
};

export default CountryDetails;
