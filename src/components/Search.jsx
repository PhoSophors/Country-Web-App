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
    <div className=" justify-between items-center">
      <Input
        placeholder="Search by country name"
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ width: 300 }}
      />
      <Select
        value={sortOrder}
        onChange={handleSortChange}
        style={{ width: 150 }}
      >
        <Option value="asc">Ascending</Option>
        <Option value="desc">Descending</Option>
      </Select>
    </div>
  );
};

export default Search;
