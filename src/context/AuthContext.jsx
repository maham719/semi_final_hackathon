import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"


const Authcontext=createContext();

export const AuthProvider=({children})=>{
    const [auth,setAuth] = useState(null)
    const [loading,setLoading]=useState(true)

    useEffect(() => {
     const checkAuth=async()=>{
        try {
            const res=await axios.get("/api/auth/refresh",{
                withCredentials:true
            })
            setAuth({
                accessToken:res.data.accessToken,
                id: res.data.user.id
            })
        } catch (error) {
            setAuth(null)
        } finally{
            setLoading(false)
        }
     }
     checkAuth()
    }, [])
    return <Authcontext.Provider value={{auth,setAuth,loading}}>
        {children}
    </Authcontext.Provider>
}

export const useAuth=()=>useContext(Authcontext)