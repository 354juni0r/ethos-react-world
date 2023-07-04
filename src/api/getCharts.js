import axios from "./axios"

const getCharts = async () => {
    const baseURL = "http://localhost:3030/Charts"

    const {data} = await axios.get(baseURL)
    return data;

}

export default getCharts
