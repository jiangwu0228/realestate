import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "2a2b987a6bmsh276f5712854c62fp132404jsnaa3c34cb6c5a",
    },
  });

  return data;
};
