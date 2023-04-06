import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from "@env";
// import Config from "react-native-config";

const useFetch = ({ endpoint, query }) => {
    // const rapidApiKey = Config.RAPID_API_KEY;
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // const axios = require("axios");

    // const options = {
    //     method: "GET",
    //     url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    //     headers: {
    //         "X-RapidAPI-Key": rapidApiKey,
    //         "X-RapidAPI-Host": "jsearch.p.rapidapi.com"
    //     },
    //     params: { ...query }
    // };

    // const fetchData = async () => {
    //     setIsLoading(true);

    //     try {
    //         const response = await axios.request(options);
    //         setData(response.data.data);
    //         setIsLoading(false);
    //     } catch (error) {
    //         setError(error);
    //         alert("There is an error");
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const refetch = () => {
    //     setIsLoading(true);
    //     fetchData();
    // };
    // // axios
    // //     .request(options)
    // //     .then(function (response) {
    // //         console.log(response.data);
    // //     })
    // //     .catch(function (error) {
    // //         console.error(error);
    // //     });

    // return { data, isLoading, error, refetch };
};

export default useFetch;
