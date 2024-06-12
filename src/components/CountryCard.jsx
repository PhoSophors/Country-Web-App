// src/components/CountryCard.js
import React, { useState } from "react";
import { Card, Modal, Pagination, Spin } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useApiService } from "../service/useApiService";

const CountryCard = ({ countries }) => {
  const { isLoading } = useApiService();
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentCountry, setCurrentCountry] = useState(null);
  const pageSize = 24;

  const showModal = (country) => {
    setCurrentCountry(country);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedCountries = countries.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="p-5 h-screen" style={{ overflow: "auto", height: "100%" }}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {paginatedCountries.map((country, index) => (
          <Card
            className="backdrop-blur-sm bg-white/30"
            key={index}
            onClick={() => showModal(country)}
            style={{ height: "280px", borderRadius: "20px" }}
            cover={
              <div className="relative p-3" style={{ height: "200px" }}>
                {isLoading ? (
                  <div className="flex justify-center items-center h-screen">
                    <Spin className="white-spinner" />
                  </div>
                ) : (
                  <img
                    className="w-full h-full object-cover cursor-pointer"
                    src={country.flags.png}
                    alt={country.name.official}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      borderRadius: "14px",
                      boxSizing: "border-box",
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                  />
                )}
                <div className="p-5">
                  <h1 className="text-lg text-gray-900 font-semibold line-clamp-2">
                    {country.name.official}
                  </h1>
                </div>
              </div>
            }
          ></Card>
        ))}
      </div>
      <div className="mt-5 flex justify-center">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={countries.length}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
      <Modal
        className="backdrop-blur-xl bg-white/30"
        visible={isModalVisible}
        onOk={handleOk}
        footer={null}
        onCancel={handleCancel}
        closeIcon={
          <CloseOutlined className="text-white bg-indigo-600 hover:bg-red-500 rounded-full p-3" />
        }
        centered
      >
        {currentCountry && (
          <div className="flex justify-center flex-cols mt-5 mb-5">
            {isLoading ? (
              <div className="flex justify-center items-center">
                <Spin className="white-spinner" />
              </div>
            ) : (
              <img
                src={currentCountry.flags.png}
                alt=""
                style={{ borderRadius: "20px" }}
              />
            )}
          </div>
        )}
        <div className="text-slate-100 text-base">
          <p className="text-2xl font-semibold text-slate-100">
            {currentCountry?.name.official}
          </p>
          <p className="">{currentCountry?.name.common}</p>
          <p>{currentCountry?.region}</p>
          <p>{currentCountry?.subregion}</p>
          <p>{currentCountry?.cca2}</p>
          <p>{currentCountry?.cca3}</p>
          <p>{currentCountry?.nativeName}</p>
          <p>{currentCountry?.altSpellings}</p>
          <p>{currentCountry?.idd.root}</p>
          <p>{currentCountry?.idd.suffixes.join(", ")}</p>
        </div>
      </Modal>
    </div>
  );
};

export default CountryCard;
