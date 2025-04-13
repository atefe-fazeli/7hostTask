import React, { createContext, useState } from "react";
import Response from "../../api/Response";
import { APIFetch } from "../../api/apiConfig";

export const apiContext = createContext(null);

function ApiProvider({ children }) {
  const [getPending, setGetPending] = useState(false);

  const getApi = async (
    URL,
    callbackResponse = () => {},
    callbackErorr = () => {},
    hasLoading = true
  ) => {
    setGetPending(hasLoading);
    const api = APIFetch();
    await api
      .get(URL)
      .then((res) => {
        console.log(res)
        const response = new Response(res);
        callbackResponse(response);
      })
      .catch((err) => {
       callbackErorr(err);
      })
      .finally(() => {
        setGetPending(false);
      });
  };

  return (
    <apiContext.Provider
      value={{
        getPending: getPending,
        getApi,
      }}
    >
      {children}
    </apiContext.Provider>
  );
}

export default ApiProvider;
