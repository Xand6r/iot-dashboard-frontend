import axios from "axios";

// export const URL = 'http://localhost:8080'; //production
export const URL = 'https://iot-dashboard-backend.herokuapp.com'; //URL
// export const WEB_URL = 'https://app.prodeus.co';

// preset requests set
export const postReq = async (path, obj) => {
  try {
    const response = await axios.post(URL + path, obj);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getReq = async (path) => {
  try {
    const response = await axios.get(URL + path);
    return response;
  } catch (error) {
    throw error;
  }
};
