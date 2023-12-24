import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

/**
 * AuthProvider component is used to manage the authentication state and provide necessary functions to login and logout.
 * @param {Object} props - The properties object.
 * @param {ReactNode} props.children - The child components of the AuthProvider.
 * @return {ReactNode} - The rendered child components.
 */
export default function AuthProvider({ children }) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

    const login = (newUser) => {
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}