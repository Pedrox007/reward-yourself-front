import React, { createContext, useState } from 'react';

import { AuthService } from '../service/Auth.service';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loginResponse, setLoginResponse] = useState({ access: null, refresh: null, name: null });
  const [loadingCheck, setLoadingCheck] = useState(false);

  React.useEffect(() => {
    let intervalId;

    if (loginResponse && !intervalId) {
      intervalId = setInterval(async () => {
        console.log(`Refreshing Token:`);
        const res = await AuthService.refresh(loginResponse.refresh);
        console.log(res.data);
        setLoginResponse({ ...loginResponse, access: res.data.access });
      }, 60000);
    }

    if (!loginResponse && intervalId) {
      clearInterval(intervalId);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };
  }, [loginResponse]);

  return (
    <AuthContext.Provider value={{ loginResponse, setLoginResponse }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};
