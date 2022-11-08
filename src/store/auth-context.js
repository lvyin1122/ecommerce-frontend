import {createContext, useEffect, useState} from 'react';

const AuthContext = createContext();

const initialAuthState = {
    isLoggedIn: false,
    token: null,
    username: null,
    userId: null,
};

export function AuthProvider(props) {
    const [authState, setAuthState] = useState(initialAuthState);

    useEffect(() => {
        const storedAuthState = JSON.parse(localStorage.getItem('authState'));
        if (storedAuthState && storedAuthState.isLoggedIn) {
            setAuthState(storedAuthState);
        }
    }, []);


    const login = (authState) => {
        setAuthState(authState);
        localStorage.setItem('authState', JSON.stringify(authState));
    };


    const logout = () => {
        setAuthState({
            isLoggedIn: false,
            token: null,
            username: null,
            userId: null,
        });
        localStorage.removeItem('authState');
    };

    const authContext = {
        isLoggedIn: authState.isLoggedIn,
        token: authState.token,
        username: authState.username,
        userId: authState.userId,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={authContext}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
