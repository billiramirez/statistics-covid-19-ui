import { Table, Space } from "antd";
import Link from "next/link";

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

const data = [
  {
    key: "1",
    country: "John Brown",
    continent: 32,
    population: "New York No. 1 Lake Park",
    cases: "34",
    deaths: "34",
    tests: "34",
    lastUpdate: "today",
  },
  {
    key: "2",
    country: "Jim Green",
    continent: 42,
    population: "London No. 1 Lake Park",
    cases: "34",
    deaths: "34",
    tests: "34",
    lastUpdate: "today",
  },
  {
    key: "3",
    country: "Joe Black",
    continent: 32,
    population: "Sidney No. 1 Lake Park",
    cases: "34",
    deaths: "34",
    tests: "34",
    lastUpdate: "today",
  },
  {
    key: "4",
    country: "Jim Green",
    continent: 42,
    population: "London No. 1 Lake Park",
    cases: "34",
    deaths: "34",
    tests: "34",
    lastUpdate: "today",
  },
  {
    key: "5",
    country: "Joe Black",
    continent: 32,
    population: "Sidney No. 1 Lake Park",
    cases: "34",
    deaths: "34",
    tests: "34",
    lastUpdate: "today",
  },
  {
    key: "6",
    country: "Jim Green",
    continent: 42,
    population: "London No. 1 Lake Park",
    cases: "34",
    deaths: "34",
    tests: "34",
    lastUpdate: "today",
  },
  {
    key: "7",
    country: "Joe Black",
    continent: 32,
    population: "Sidney No. 1 Lake Park",
    cases: "34",
    deaths: "34",
    tests: "34",
    lastUpdate: "today",
  },
  {
    key: "8",
    country: "Joe Black",
    continent: 32,
    population: "Sidney No. 1 Lake Park",
    cases: "34",
    deaths: "34",
    tests: "34",
    lastUpdate: "today",
  },
  {
    key: "9",
    country: "Joe Black",
    continent: 32,
    population: "Sidney No. 1 Lake Park",
    cases: "34",
    deaths: "34",
    tests: "34",
    lastUpdate: "today",
  },
  {
    key: "10",
    country: "Joe Black",
    continent: 32,
    population: "Sidney No. 1 Lake Park",
    cases: "34",
    deaths: "34",
    tests: "34",
    lastUpdate: "today",
  },
  {
    key: "11",
    country: "Joe Black",
    continent: 32,
    population: "Sidney No. 1 Lake Park",
    cases: "34",
    deaths: "34",
    tests: "34",
    lastUpdate: "today",
  },
];

const DataTable = () => {
  return <Table columns={columns} dataSource={data} />;
};

export default DataTable;
