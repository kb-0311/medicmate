import axios from "axios";
import { llm_url, backend_url } from "../config";

export const loginUser = (account, MetaMaskProvider) => async (dispatch) => {
  try {
    dispatch({
      type: "LoginRequest",
    });

    console.log("login");

    dispatch({
      type: "LoginSuccess",
      account: account,
    });

    console.log("login succ");
  } catch (error) {
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.message,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });

    const { data } = await axios.get(`${backend_url}/api/v1/me`, {
      withCredentials: true,
    });

    dispatch({
      type: "LoadUserSuccess",
      account: data.user,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "LoadUserFailure",
      payload: error,
    });
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LogoutRequest",
    });

    // Backend has a logout endpoint that clears the cookie
    await axios.get(`${backend_url}/api/v1/logout`, {
      withCredentials: true,
    });

    dispatch({
      type: "LogoutSuccess",
    });
  } catch (error) {
    dispatch({
      type: "LogoutFailure",
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const loaddiseases = (Symptoms) => async (dispatch) => {
  try {
    dispatch({
      type: "DiseasesRequest",
    });

    const data = await axios
      .post(`${llm_url}/predict_disease`, { Symptoms: Symptoms })
      .then((res) => {
        console.log(res, "res");
        return res;
      });

    console.log(data, "fbgfjffashgaf");

    dispatch({
      type: "DiseasesSuccess",
      data: data,
    });
  } catch (error) {
    dispatch({
      type: "DiseasesFailure",
      payload: error.response.data.message,
    });
  }
};

export const loadPrescription = (Symptoms, disease) => async (dispatch) => {
  try {
    dispatch({
      type: "PrescriptionRequest",
    });

    const { data } = await axios
      .post(`${llm_url}/predict_medicine`, {
        Symptoms: Symptoms,
        Disease: disease,
      })
      .then((res) => {
        console.log(res.data.Medicines, "res");
        return res;
      });

    // console.log(data.Medicines, "kkkkkk")

    dispatch({
      type: "PrescriptionSuccess",
      data: data.Medicines,
    });
  } catch (error) {
    dispatch({
      type: "PrescriptionFailure",
      payload: error.response.data.message,
    });
  }
};

export const loadRequest = (requestId) => async (dispatch) => {
  try {
    dispatch({
      type: "LoadRequestRequest",
    });

    const { data } = await axios.get(
      `${backend_url}/api/v1/request/${requestId}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "LoadRequestSuccess",
      pendingRequest: data.pendingRequest,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "LoadRequestFailure",
      payload: error,
    });
  }
};
