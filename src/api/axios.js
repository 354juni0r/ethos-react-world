import axios from "axios";
import { baseURL } from "./endpoint";

export default axios.create({
  baseURL1: process.env.REACT_APP_API_PROD,
});

export const getDataMemo = async () => {
  const data = await axios.get(`${baseURL}/DataMemo`);
  return data.data;
};

export const addPesan = async (body) => {
  const save = await axios.post(`${baseURL}/DataMemo`, body);
  return save;
};

export const getData = async () => {
  const data = await axios.get(`${baseURL}/dataProject`);
  return data.data;
};

export const addData = async (body) => {
  const save = await axios.post(`${baseURL}/dataProject`, body);
  return save;
};
