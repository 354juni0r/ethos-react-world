import axios from "axios";

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

export const getUsers = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL_VIEW}/users`,
    {
      headers: {
        secretcode: process.env.REACT_APP_API_SECRETCODE,
        secretkey: process.env.REACT_APP_API_SECRETKEY,
      },
    }
  );
  return data.data;
};
