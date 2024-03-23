import useHttps from "./useHttps";
import { useDispatch, useSelector } from "react-redux";
import { setUser, logoutUser } from "../store/features/userSlice";
import { showAlert } from "../store/features/alertSlice";
import { hideBackdrop, showBackdrop } from "../store/features/backdropSlice";
import { useNavigation } from "@react-navigation/native";
import { debounce } from "lodash";
import * as Notifications from "expo-notifications";

const useUser = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { https,httpsMultipart } = useHttps();
  const message = "verifyAllField";
  const user = useSelector((state) => state.user);

  const goToSpace = debounce((path) => {
    if (path) {
      navigation.navigate(path);
    } else {
      navigation.navigate("Home", {
        screen: "Space",
      });
    }
  }, 500);

  const loginSocial = ({ data }) => {
    dispatch(showBackdrop());
    https
      .post(`/clients/login-social-client`, { ...data })
      .then(async (response) => {
        dispatch(hideBackdrop());
        if (response) {
          const { user } = response.data;
        } else {
          dispatch(showAlert({ visible: true }));
        }
      })
      .catch((error) => {
        dispatch(hideBackdrop());
        dispatch(showAlert({ visible: true }));
      });
  };

  const defautlError = () => {
    dispatch(showAlert({ visible: true }));
  };

  const login = ({ email, password, callBackError, callBackSucess }) => {
    console.log(email)
    callBackSucess();
    // https
    //   .post(`users/login`, {
    //     email,
    //     password,
    //   })
    //   .then(async (response) => {
    //     if (response) {
    //       if (callBackSucess) {
    //         callBackSucess();
    //       }
    //       const { user } = response.data;
    //     } else {
    //       dispatch(showAlert({ visible: true }));
    //       if (callBackError) {
    //         callBackError();
    //       }
    //     }
    //   })
    //   .catch((error) => {
    //     dispatch(showAlert({ visible: true, message }));
    //     if (callBackError) {
    //       callBackError();
    //     }
    //   });
  };

  const signupBasic = ({ data, callBackError, callBackSucess }) => {
    https
      .post(`clients/create-client`, {
        client: data,
      })
      .then(async (response) => {
        if (response) {
          if (callBackSucess) {
            callBackSucess();
          }
          const { user } = response.data;
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          dispatch(
            showAlert({
              visible: true,
              message: "duplicatedEmail",
            })
          );
        } else {
          dispatch(showAlert({ visible: true }));
        }
        if (callBackError) {
          callBackError();
        }
      });
  };

  const updateUserInDataBase = ({ data, callBackError, callBackSucess }) => {
    const userInfo = user.user ? user.user : {};
    const client = {
      ...userInfo,
      ...data,
    };

    dispatch(setUser({ user: client }));
    https
      .post(`clients/update-client`, { client })
      .then((response) => {
        if (response) {
          const { token, user } = response.data;
          dispatch(setUser({ token, user }));
          if (callBackSucess) {
            callBackSucess();
          }
        } else {
          dispatch(showAlert({ visible: true }));
          if (callBackError) {
            callBackError();
          }
        }
      })
      .catch((error) => {
        dispatch(showAlert({ visible: true }));
        if (callBackError) {
          callBackError();
        }
      });
  };

  const updateUserProfile = ({ file, callBackSucess, callBackError }) => {
    const formData = new FormData();
    const userInfo = user.user ? user.user : {};
    const client = {
      ...userInfo,
    };
    formData.append("profilePictures", file);
    formData.append("client", client);
    httpsMultipart
      .post("/clients/update-client", formData)
      .then(async (res) => {
        if (res && res.data) {
          const { user, token } = res.data;
          dispatch(setUser({ user, token }));
          if (callBackSucess) {
            callBackSucess();
          }
        } else {
          dispatch(showAlert({ visible: true }));
          if (callBackError) {
            callBackError();
          }
        }
      })
      .catch((error) => {
        dispatch(showAlert({ visible: true }));
        if (callBackError) {
          callBackError();
        }
      });
  };

  const updateUserLocal = ({ data }) => {
    const userInfo = user.user ? user.user : {};
    const newUser = {
      ...userInfo,
      ...data,
    };
    dispatch(setUser({ user: newUser, token: null }));
  };

  const goToHome = debounce(() => {
    navigation.navigate("Started");
  }, 500);

  const logout = () => {
    dispatch(logoutUser());
    goToHome();
  };

  return {
    logout,
    signupBasic,
    login,
    loginSocial,
    updateUserInDataBase,
    updateUserLocal,
    updateUserProfile,
    defautlError,
  };
};

export default useUser;
