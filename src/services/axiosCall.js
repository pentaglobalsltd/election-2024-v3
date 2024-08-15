import apis from "./Apis";
import axios from "axios";


export const Get = (p) => {
  return axios({
    method: "get",
    baseURL: apis.BASE,
    ...p,
  });
};


export const Post = (p) => {
  return axios({
    baseURL: apis.BASE,
    method: "post",
    ...p,
  });
};


export const Put = (p) => {
  return axios({
    baseURL: apis.BASE,
    method: "put",
    ...p,
  });
};
