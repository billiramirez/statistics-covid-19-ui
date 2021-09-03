import { Input, Space } from "antd";
import { FC } from "react";

const { Search } = Input;

interface ISearchCountry {
  onSearch: (country: string) => void;
  loading: boolean;
}

const SearchCountry: FC<ISearchCountry> = ({ onSearch, loading }) => {
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
        disabled={loading}
        onSearch={(value) => onSearch(value)}
      />
    </Space>
  );
};

export default SearchCountry;
