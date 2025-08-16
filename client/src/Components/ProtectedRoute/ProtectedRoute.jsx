import { Navigate } from "react-router-dom"

export default function RequireAuth({userData , children}) {
    if ((userData === null) && (localStorage.getItem("token") === null)) {
        return <Navigate to="/"/>
    }else{
        return children;
    }
}