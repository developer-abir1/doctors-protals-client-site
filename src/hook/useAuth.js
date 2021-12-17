import { useContext } from "react"
import { AuthContext } from "../context/AuthProviver"

const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth
}


export default useAuth;