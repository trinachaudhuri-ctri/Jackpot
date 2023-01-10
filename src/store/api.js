import axios from "axios";
const API_PATH = "https://production.streakcard.click";

export const getList = (changeList) => {
  axios
    .get(`${API_PATH}/test/getlist`)
    .then((res) => {
      changeList(res)
    })
    .catch((e) => console.log("---get list err", e));
};

export const userLogin = ({ number }) => {
  axios
    .post(`${API_PATH}/test/login`, {
      mobileNumber: number.toString(),
    })
    .then((res) => console.log("---l", res))
    .catch((e) => "---user login err", e);
};

export const userRegistration = ({
  firstName,
  lastName,
  mobileNumber,
  email,
}) => {
  axios
    .post(`${API_PATH}/test/register`, {
      firstName,
      lastName,
      mobileNumber,
      email,
    })
    .then((res) => console.log("---reg", res))
    .catch((e) => console.log("---reg", e));
};
