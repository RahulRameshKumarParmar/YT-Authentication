import { createContext, useContext, useEffect, useState } from "react";
import api from "../apiInterCepter";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuth, setIsAuth] = useState(false);

    const fetchUser = async () => {
        setLoading(true);
        try {
            const { data } = await api.get(`/api/vi/me`)

            setUser(data)
            setIsAuth(true)

        }
        catch (error) {
            console.error()
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUser();
    }, [])

    return (
        <AppContext.Provider value={{ setIsAuth, isAuth, user, setUser, loading }}>
            {children}
        </AppContext.Provider>
    )
}

export const AppData = () => {
    const context = useContext(AppContext);

    if (!context) throw new Error("AppData must be used within an AppProvider");
    return context;
}