// src/App.js
import React, { useState, useEffect } from "react";
import CountryCard from "./components/CountryCard";
import Search from "./components/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Fuse from "fuse.js";
import { Spin } from "antd";
import { useApiService } from "./service/useApiService";

function App() {
  const { isLoading, data: countries } = useApiService();
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredCountries(countries);
      return;
    }

    const fuse = new Fuse(countries, {
      keys: ["name.official", "name.common"],
      threshold: 0.3,
    });

    const results = fuse.search(searchTerm).map(({ item }) => item);
    setFilteredCountries(results);
  };

  const handleSort = (order) => {
    setSortOrder(order);
    const sortedCountries = [...filteredCountries].sort((a, b) => {
      const nameA = a.name.official.toLowerCase();
      const nameB = b.name.official.toLowerCase();
      return order === "asc"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
    setFilteredCountries(sortedCountries);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-sky-500 dark:bg-gradient-to-r dark:from-sky-700 dark:to-sky-900  overflow-hidden  ">
      <div className="h-screen overflow-auto flex flex-col items-center">
        <Header />
        <div className="xl:w-10/12 md:w-full w-full flex justify-center">
          <div className="grid text-center mx-auto flex xl:mt-20 max-w-screen-xl px-0 py-2 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
            <div className="mr-auto md:mt-10 xl:mt-0 lg:p-5 text-center lg:col-span-7">
              <div className="text-center">
                <h1 className="text-3xl md:text-4xl xl:text-5xl  font-bold text-gray-900">
                  A Comprehensive Guide to the World's Nations
                </h1>
                <span className="text-xl text-gray-800 font-semibold">
                  Search by country name, sort by country name, and browse by
                  page.
                </span>
              </div>
              <div className="mt-5 flex justify-center">
                <Search onSearch={handleSearch} onSort={handleSort} />
              </div>
            </div>

            <div className="hidden md:mt-10 xl:mt-0 lg:p-5 lg:col-span-5 lg:flex">
              <img
                src="https://images.pexels.com/photos/8828346/pexels-photo-8828346.jpeg"
                alt="Belgium Flag"
                style={{ height: "18rem", borderRadius: "20px" }}
              />
            </div>
          </div>
        </div>
        <div className="xl:w-10/12 md:w-full w-full flex justify-center mt-5 ">
          {isLoading ? (
            <div>
              <Spin className="white-spinner" />
            </div>
          ) : (
            <CountryCard countries={filteredCountries} sortOrder={sortOrder} />
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
