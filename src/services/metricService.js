import axios from "axios";

const baseURL = "http://localhost:3000";

export async function getAllMetrics(data) {
  const response = await axios.get(`${baseURL}/metric/date/${data}`);
  return response;
}
