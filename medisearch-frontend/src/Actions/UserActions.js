import axios from "axios";

export const loginUser = (account, MetaMaskProvider) => async (dispatch) => {
    // console.log("bjdhjfhd")
  try {
    dispatch({
      type: "LoginRequest",
    });

    console.log("login");

    dispatch({
        type: "LoginSuccess",
        account: account,
        // MetaMaskProvider: MetaMaskProvider,
    });

      console.log("login succ");
      // console.log(account, MetaMaskProvider, "yep")

  } catch (error) {
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.message,
    });
  }
};

// export const loadUser = () => async (dispatch) => {
//     try {
//       dispatch({
//         type: "LoadUserRequest",
//       });
  
//       const  {data}  = await axios.get("/api/v1/me");
//       dispatch({
//         type: "LoadUserSuccess",
//         payload: data,
//       });
//       dispatch({
//         type: "LoginSuccess",
//         payload: data.user,
//       });
//     } catch (error) {
//       dispatch({
//         type: "LoadUserFailure",
//         payload: error.response.data.message,
//       });
//     }
//   };


export const logoutUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "LogoutRequest",
        });
      
        dispatch({
            type: "LogoutSuccess",
        });
      
    } catch (error) {
      dispatch({
        type: "LogoutFailure",
        payload: error.response.data.message,
      });
    }
};
  

export const loaddiseases = (Symptoms) => async (dispatch) => {
  try {
      dispatch({
          type: "DiseasesRequest",
      });
    
      const  data  = await axios.post(
        `http://be65-34-83-73-24.ngrok-free.app/predict_disease`,
        {Symptoms:Symptoms},
      ).then((res) => { 
        console.log(res, "res")
        return res;
      });
  
    console.log(data, "fbgfjffashgaf")
    
      dispatch({
        type: "DiseasesSuccess",
        data:data,
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
    
    const { data }  = await axios.post(
        `http://6491-34-125-63-211.ngrok-free.app/predict_medicine`,
        {
          Symptoms: Symptoms,
          Disease: disease,},
      ).then((res) => { 
        console.log(res.data.Medicines, "res")
        return res;
      });
    
    // console.log(data.Medicines, "kkkkkk")
    
      dispatch({
        type: "PrescriptionSuccess",
        data:data.Medicines,
      });
    
  } catch (error) {
    dispatch({
      type: "PrescriptionFailure",
      payload: error.response.data.message,
    });
  }
};