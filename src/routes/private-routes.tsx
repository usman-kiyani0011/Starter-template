import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoutes: React.FC<any> = ({ allowedRoles }) => {
  const auth =
    JSON.parse(sessionStorage.getItem("auth") as string) ||
    JSON.parse(localStorage.getItem("auth") as string);
  const location = useLocation();

  return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoutes;
