import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

const AutoLogout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkLogoutTime = () => {
      const now = new Date();
      if (now.getHours() === 0 && now.getMinutes() === 0) {
        dispatch(logout());
        localStorage.setItem("lastLogout", now.toLocaleDateString());
      }
    };

    const interval = setInterval(checkLogoutTime, 60000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return null;
};

export default AutoLogout;
