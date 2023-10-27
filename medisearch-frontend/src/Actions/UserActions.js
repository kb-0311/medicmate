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
        MetaMaskProvider: MetaMaskProvider,
    });

      console.log("login succ");
      console.log(account, MetaMaskProvider, "yep")

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