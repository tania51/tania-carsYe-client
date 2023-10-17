import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ( {children} ) => {

    const {user, loading} = useContext(AuthContext);
    if(loading) {
        <div><span className="loading loading-spinner text-error"></span></div>
    }
    if(user) {
        {children}
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;