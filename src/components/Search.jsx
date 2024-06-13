// src/components/Search.jsx
import React, { useState } from "react";
import { Input, Select } from "antd";

const { Option } = Select;

const Search = ({ onSearch, onSort }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleSortChange = (value) => {
    setSortOrder(value);
    onSort(value);
  };

  return (
    <div className="flex items-center space-x-1">
      <Input
        className="xl:w-80 md:w-80 w-auto"
        placeholder="Search by country name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <Select
        className="xl:w-32 md:w-auto w-auto"
        value={sortOrder}
        onChange={handleSortChange}
        style={{ height: "50px", borderRadius: "15px" }}
      >
        <Option value="asc">Ascending</Option>
        <Option value="desc">Descending</Option>
      </Select>
    </div>
  );
};

export default Search;
