import axios from "axios";
import { storeData } from "../utilities/storeValue";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_PATH = "https://production.streakcard.click";

export const getList = (changeList) => {
  axios
    .get(`${API_PATH}/test/getlist`)
    .then((res) => {
      changeList(res?.data);
      storeData(res?.data?.data);
    })
    .catch((e) => console.log("---get list err", e));
};

export const userLogin = (number ) => {
  axios
    .post(`${API_PATH}/test/login`, {
      mobileNumber: number,
    })
    .then(async(res) => {
       AsyncStorage.setItem('token',res?.data?.data.id)
    })
    .catch((e) =>alert('Please sign up'));
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
    .then((res) => AsyncStorage.setItem('token',res?.data?.data?.id))
    .catch((e) => console.log("---reg", e));
};
