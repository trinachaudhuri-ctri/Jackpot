import AsyncStorage from "@react-native-async-storage/async-storage";
export const storeData = async (value) => {
  try {
    await AsyncStorage.setItem("game_data", value);
  } catch (e) {
    console.log("---store data", e);
  }
};
