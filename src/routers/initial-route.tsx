import { Navigate } from "react-router-dom";

export default function Redirect() {
  const token = localStorage.getItem("token");

  return token ? <Navigate to="/home" replace /> : <Navigate to="/signin" replace />;
}
