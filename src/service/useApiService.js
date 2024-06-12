// useApiService.js
import { useState, useEffect } from "react";
import axios from "axios";
import { api_url } from "../api/api";

export const useApiService = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${api_url}/all`);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return { isLoading, data };
};