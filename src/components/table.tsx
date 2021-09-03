import { Table, Space } from "antd";
import Link from "next/link";
import { FC } from "react";

import { TableFormattedData } from "../hooks/useStatisticData";

const columns = [
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
    render: (text: string) => (
      <Space size="middle">
        <Link href={`/country/${text}`}>
          <a>{text}</a>
        </Link>
      </Space>
    ),
  },
  {
    title: "Continent",
    dataIndex: "continent",
    key: "continent",
  },
  {
    title: "Population",
    dataIndex: "population",
    key: "population",
  },
  {
    title: "Cases",
    dataIndex: "cases",
    key: "cases",
  },
  {
    title: "Deaths",
    dataIndex: "deaths",
    key: "deaths",
  },
  {
    title: "Tests",
    dataIndex: "tests",
    key: "tests",
  },
  {
    title: "Last Update",
    dataIndex: "lastUpdate",
    key: "day",
  },
  {
    title: "Action",
    key: "action",
    render: (record: { name: string }) => (
      <Space size="middle">
        <a>Edit</a>
      </Space>
    ),
  },
];

const DataTable: FC<{ data: TableFormattedData[]; loading: boolean }> = ({
  data,
  loading,
}) => {
  return <Table columns={columns} dataSource={data} loading={loading} />;
};

export default DataTable;
