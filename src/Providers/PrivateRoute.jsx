/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const location = useLocation();

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
