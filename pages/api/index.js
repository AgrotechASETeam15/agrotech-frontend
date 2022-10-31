import instance from "./instance";
import Alert from "../../utils/Alert";

const REQUEST_HEADER = (access_token) => {
  return {
    headers: {
      "access-token": access_token,
    },
  };
};
// const checkTokenExpiry = async () => {
//   const tokenGeneratedTime = getTokenGeneratedTime();
//   if (tokenGeneratedTime + 20 * 60 * 1000 <= new Date().getTime()) {
//     try {
//       const { access_token, id_token, refresh_token } = await refreshToken();

//       localStorage.setItem("access_token", access_token);
//       localStorage.setItem("id_token", id_token);
//       localStorage.setItem("refresh_token", refresh_token);
//       localStorage.setItem("token_gen_time", new Date().getTime());
//     } catch (err) {
//       console.error(err);
//     }
//   }
// };

const getAccessToken = () => {
  return localStorage.getItem("access_token");
};

// const getIDToken = () => {
//   return localStorage.getItem("id_token");
// };

// const getRefreshToken = () => {
//   return localStorage.getItem("refresh_token");
// };

// const getTokenGeneratedTime = () => {
//   return Number.parseInt(localStorage.getItem("token_gen_time"), 10);
// };

// const getLoginEmail = () => {
//   return localStorage.getItem("login_email");
// };

// ERROR HANDLER
const handleError = (error) => {
  if (error && error.response && error.response.status) {
    switch (error.response.status) {
      case 302: {
        Alert({
          title: "Failed",
          message: error.response.data,
          buttonTextYes: "Ok",
          closeOnClickOutside: false,
        });
        return null;
      }
      case 400:
        return {
          status: error.response.status ? error.response.status : "",
          message: error.response.data ? error.response.data : {},
        };
      case 401:
        Alert({
          title: "Unauthorized",
          message: error.response.data,
          buttonTextYes: "Ok",
          handleClickYes: () => {
            window.location.href = "/";
          },
          closeOnClickOutside: false,
        });
        logout();
        return null;
      case 403:
        return {
          status: error.response.status ? error.response.status : "",
          message: error.response.data ? error.response.data : {},
        };
      case 404:
        Alert({
          title: "Not found",
          message: "The url not found",
          buttonTextYes: "Ok",
        });
        return null;
      case 409:
        Alert({
          title: "Duplication",
          message: error.response.data,
          buttonTextYes: "Ok",
        });
        return null;
      case 500:
        Alert({
          title: "Server Error",
          message: "The server couldn't complete the request.",
          buttonTextYes: "Ok",
        });
        return null;

      case 502:
        Alert({
          title: "Server Error",
          message: "The server couldn't complete the request.",
          buttonTextYes: "Ok",
        });
        return null;

      default:
        return null;
    }
  } else {
    Alert({
      title: "Network Error",
      message: "Couldn't reach the server or no response received.",
      buttonTextYes: "Ok",
    });
  }
  return null;
};
const login = (access_token, expiry_date) => {
  localStorage.setItem("access_token", access_token);
  localStorage.setItem("access_token_expiry", expiry_date);
};

const isLoggedin = () => {
  return localStorage.getItem("access_token");
};

const logout = () => {
  sessionStorage.clear();
  localStorage.clear();
};

/*
--------------------------------------------------------------
*/

/**
 * API response to pages.
 * @param {JSON} response API response.
 * @return {JSON} response API response of 200,201.
 */
const returnResponse = (response) => {
  if (
    response &&
    response.data &&
    response.status &&
    (response.status === 200 || response.status === 201)
  ) {
    response.data.apiStatus = response.status;
    return response.data;
  } else if (response && response.status && response.status === 400) {
    return response;
  }
};

/**
 * GET method API
 *
 * @param {string} path AIP URL.
 * @param {boolean} isHeader Header required or not. By default its true.
 * @return {JSON} return response.data if status code is 201/200. If 400 return response
 */
const getData = async (path, isHeader = true) => {
  //   await checkTokenExpiry();
  let header = REQUEST_HEADER(getAccessToken());

  let response = isHeader
    ? await instance.get(path, header).catch(handleError)
    : await instance.get(path).catch(handleError);
  return returnResponse(response);
};

/**
 * PUT method API
 *
 * @param {string} path AIP URL.
 * @param {JSON} data payload.
 * @param {boolean} isHeader Header required or not. By default its true.
 * @return {JSON} return response.data if status code is 201/200. If 400 return response
 */
const putData = async (path, data, isHeader = true) => {
  //   await checkTokenExpiry();
  let header = REQUEST_HEADER(getAccessToken());

  let response = isHeader
    ? await instance.put(path, data, header).catch(handleError)
    : await instance.put(path, data).catch(handleError);
  return returnResponse(response);
};

/**
 * PATCH method API
 *
 * @param {string} path AIP URL.
 * @param {JSON} data payload.
 * @param {boolean} isHeader Header required or not. By default its true.
 * @return {JSON} return response.data if status code is 201/200. If 400 return response
 */
const patchData = async (path, data, isHeader = true) => {
  //   await checkTokenExpiry();
  let header = REQUEST_HEADER(getAccessToken());

  let response = isHeader
    ? await instance.patch(path, data, header).catch(handleError)
    : await instance.patch(path, data).catch(handleError);
  return returnResponse(response);
};

/**
 * POST method API
 *
 * @param {string} path AIP URL.
 * @param {JSON} data payload.
 * @param {boolean} isHeader Header required or not. By default its true.
 * @return {JSON} return response.data if status code is 201/200. If 400 return response
 */
const postData = async (path, data, isHeader = true) => {
  //   await checkTokenExpiry();
  let header = REQUEST_HEADER(getAccessToken());

  let response = isHeader
    ? await instance.post(path, data, header).catch(handleError)
    : await instance.post(path, data).catch(handleError);
  return returnResponse(response);
};

/**
 * DELETE method API
 *
 * @param {string} path AIP URL.
 * @param {JSON} data payload.
 * @param {boolean} isHeader Header required or not. By default its true.
 * @return {JSON} return response.data if status code is 201/200. If 400 return response
 */
const deleteData = async (path, data, isHeader = true) => {
  //   await checkTokenExpiry();
  let header = REQUEST_HEADER(getAccessToken());

  let response = isHeader
    ? await instance.delete(path, data, header).catch(handleError)
    : await instance.delete(path, data).catch(handleError);
  return returnResponse(response);
};

export {
  getData,
  putData,
  patchData,
  postData,
  deleteData,
  isLoggedin,
  login,
  logout,
  REQUEST_HEADER,
  getAccessToken,
  //   getIDToken,
  //   getRefreshToken,
  //   checkTokenExpiry,
};
