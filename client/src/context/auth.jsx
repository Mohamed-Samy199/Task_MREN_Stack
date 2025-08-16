import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom";

export let AuthContext = createContext(null);
export function AuthContextProvider(props) {

    const [userData, setUserData] = useState(null);

    let saveUserData = () => {
        let encodeToken = localStorage.getItem("token");
        let decodeToken = jwtDecode(encodeToken);
        setUserData(decodeToken);
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            saveUserData();
        }
    }, []);


    const logout = () => {
        localStorage.removeItem("token");
        setUserData(null)
        return <Navigate to="" />
    };

    const [t, i18n] = useTranslation();
    const [dir, setDir] = useState("ltr");

    useEffect(() => {
        const savedLang = localStorage.getItem("language") || "en";
        i18n.changeLanguage(savedLang);
        setDir(savedLang === "ar" ? "rtl" : "ltr");
    }, [i18n]);

    const toggleLanguage = () => {
        const newLang = i18n.language === "en" ? "ar" : "en";
        i18n.changeLanguage(newLang);
        localStorage.setItem("language", newLang);
        setDir(newLang === "ar" ? "rtl" : "ltr");
    };

    return <AuthContext.Provider value={{
        userData,
        saveUserData,
        logout,
        t,
        i18n,
        dir,
        toggleLanguage
    }}>
        {props.children}
    </AuthContext.Provider>
}
