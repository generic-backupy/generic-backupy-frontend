import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
          const tokenString = sessionStorage.getItem('gbf-token');
          const userToken = JSON.parse(tokenString);
          return userToken;
    };

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        sessionStorage.setItem('gbf-token', JSON.stringify(userToken));
        setToken(userToken);
    };

    return {
        setToken: saveToken,
        token
    }
}