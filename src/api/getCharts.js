import axios from "./axios"
import { baseURL } from "./endpoint";

const getCharts = async () => {
    

    const {data} = await axios.get(`${baseURL}/Charts1`)
    return data;

}

export default getCharts
