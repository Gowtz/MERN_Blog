import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


export const UserContexts = createContext(null)



export default function UserContext({ children }: any) {
    const [user, setUser] = useState()

    useEffect(() => {
        async function getUser() {
            await axios.get("http://localhost:6969/authenticate",{
                withCredentials:true
            }).then(data => {
                if (data.data.id) {
                    setUser(data.data)
                }
                console.log(data.data)
                
            })
        }
        getUser()
    }, [])

    return (
        <>
            {/* @ts-ignore */}
            <UserContexts.Provider value={{ user, setUser }} >
                {children}
            </UserContexts.Provider>
        </>
    )
}


export const useAuth = () => useContext(UserContexts)