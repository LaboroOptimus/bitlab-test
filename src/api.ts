import axios from "axios";
import { Quotes } from "./types";

export const getQoutes = async (data: Quotes) => {
  return await axios.post(`${process.env.REACT_APP_BASE_URL}quotes`, data);
};
