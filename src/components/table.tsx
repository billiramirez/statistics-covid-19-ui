import { Table, Space } from "antd";
import Link from "next/link";
import { FC } from "react";

import { TableFormattedData } from "../hooks/useStatisticData";

const DataTable: FC<{
  data: TableFormattedData[];
  loading: boolean;
  onSelectItem: (country: string) => void;
}> = ({ data, loading, onSelectItem }) => {
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
      render: (record: { country: string }) => (
        <Space size="middle">
          <a
            onClick={() => {
              onSelectItem(record.country);
            }}
          >
            Edit
          </a>
        </Space>
      ),
    },
  ];
  return <Table columns={columns} dataSource={data} loading={loading} />;
};

export default DataTable;
