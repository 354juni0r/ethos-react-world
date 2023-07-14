import { baseURlView } from "./baseAPI";

export const getDataPesan = async () => {
  const data = await baseURlView.get("pesan");
  return data.data.data;
};
export const countPesan = async () => {
  const { data } = await baseURlView.get("count/pesan");
  return data.data[0];
};

export const getUsers = async () => {
  try {
    const { data } = await baseURlView.get("users");
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
