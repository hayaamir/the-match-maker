import { createContext, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

const UsersContext = createContext(null);

export const useUsers = () => useContext(UsersContext);

export default function UsersProvider({ children }) {
    const { id } = useParams();

    const [tabs, setTabs] = useState([]);
    const tabById = tabs.find(tab => tab.id.toString() === id);

    useEffect(() => {
        fetch("https://api.slingacademy.com/v1/sample-data/users?offset=1&limit=100")
            .then(response => response.json())
            .then(data => setTabs(data.users))
    }, []);

    return (
        <UsersContext.Provider value={{
            tabs, setTabs, tabById
        }}>
            {children}
        </UsersContext.Provider>
    );
}