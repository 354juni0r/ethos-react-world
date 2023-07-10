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

export const deletePesan = async (id) => {
  return await axios.delete(`http://localhost:3030/DataMemo/${id}`);
};
export const getData = async () => {
  const data = await axios.get("http://localhost:3030/dataProject");
  return data.data;
};

export const addData = async (body) => {
  const save = await axios.post("http://localhost:3030/dataProject", body);
  return save;
};

export const getDataPesan = async () => {
  const data = await axios.get(`${process.env.REACT_APP_API_PESAN}/pesan`, {
    headers: {
      secretcode: process.env.REACT_APP_API_SECRETCODE,
      secretkey: process.env.REACT_APP_API_SECRETKEY,
    },
  });
  return data.data.data;
};
