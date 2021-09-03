import { Input, Space } from "antd";

const { Search } = Input;

const onSearch = (value: any) => console.log(value);

const SearchCountry = () => {
  return (
    <Space
      direction="vertical"
      style={{ marginTop: "30px", marginBottom: "50px" }}
    >
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
    </Space>
  );
};

export default SearchCountry;
