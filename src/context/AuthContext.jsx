import React, { createContext, useState } from 'react';

import { AuthService } from '../service/Auth.service';
import LoadingPage from '../pages/LoadingPage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loginResponse, setLoginResponse] = useState(null);
  const [userInfo, setuserInfo] = useState(null);

  const [loadingCheck, setLoadingCheck] = useState(true);

  const SessionKey = '@REWARD-session';

  const checkLocalUser = async () => {
    try {
      const storageUserString = window.localStorage.getItem(SessionKey);
      let storageUser = await JSON.parse(storageUserString);

      console.log('[storageUser] from Storage:', storageUser);

      if (storageUser) {
        setLoadingCheck(true);
        const res = await AuthService().refresh(storageUser?.refresh);
        storageUser = { ...storageUser, access: res.data.access };
        setLoginResponse(storageUser);

        console.log('[setLoginResponse]', storageUser);
      } else {
        console.log('[setLoadingCheck] (false)');
        setLoadingCheck(false);
      }
    } catch (error) {
      console.log('Error [checkLocalUser]', error);
      setLoadingCheck(false);
      window.localStorage.removeItem(SessionKey);
      alert('Erro ao recuperar login');
    }
  };

  const getUserInfo = async () => {
    const res = await AuthService(loginResponse).info(loginResponse?.id);
    console.log('[setuserInfo]:', res.data);
    setuserInfo(res.data);
  };

  React.useEffect(() => {
    checkLocalUser();
  }, []);

  React.useEffect(() => {
    let intervalId;

    window.localStorage.setItem(SessionKey, JSON.stringify(loginResponse));

    if (loginResponse) {
      setLoadingCheck(false);
      getUserInfo();
    }

    if (loginResponse && !intervalId) {
      intervalId = setInterval(async () => {
        console.log(`Refreshing Token:`);
        const res = await AuthService().refresh(loginResponse?.refresh);
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

  const deleteSession = async () => {
    setLoginResponse(null);
    window.localStorage.removeItem(SessionKey);
  };

  return (
    <AuthContext.Provider
      value={{ loginResponse, setLoginResponse, deleteSession, userInfo, getUserInfo }}>
      {loadingCheck ? <LoadingPage /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};
