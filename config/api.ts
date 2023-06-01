import axios, { AxiosRequestConfig } from "axios";

export default async function callAPI({
  url,
  method,
  data,
}: AxiosRequestConfig) {
  try {
    const response = await axios({
      url,
      method,
      data,
    });
    return response.data.data;
  } catch (error: any) {
    const response = {
      message: error.response.data.message,
      error: true,
    };
    return response;
  }
}
