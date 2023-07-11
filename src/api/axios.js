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
  const data = await axios.get(`${process.env.REACT_APP_API_URL_VIEW}/pesan`, {
    headers: {
      secretcode: process.env.REACT_APP_API_SECRETCODE,
      secretkey: process.env.REACT_APP_API_SECRETKEY,
    },
  });
  return data.data.data;
};
export const countPesan = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL_VIEW}/count/pesan`,
    {
      headers: {
        secretcode: process.env.REACT_APP_API_SECRETCODE,
        secretkey: process.env.REACT_APP_API_SECRETKEY,
      },
    }
  );
  return data.data[0];
};

export const grafik = async () => {
  console.log(process.env.REACT_APP_API_URL_POST);
  const data = await axios.get(`${process.env.REACT_APP_API_URL_POST}/grafik`, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",
    },
  });
  console.log("first", data);
};
