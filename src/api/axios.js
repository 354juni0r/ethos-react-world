import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_API_PROD,
});

export const getDataMemo = async () => {
  const data = await axios.get("http://localhost:3030/DataMemo");
  return data.data;
};

export const addPesan = async (body) => {
  const save = await axios.post("http://localhost:3030/DataMemo", body);
  return save;
};

export const getData = async () => {
  const data = await axios.get("http://localhost:3030/dataProject");
  return data.data;
};

export const addData = async (body) => {
  const save = await axios.post("http://localhost:3030/dataProject", body);
  return save;
};
