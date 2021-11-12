import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

// context hook
const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}

export default useAuth;