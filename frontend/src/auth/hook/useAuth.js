import { login,signup } from "../services/auth.services";
import { setAccessToken, setUser,setLoading } from "../../redux/authSlices";
import { useDispatch } from "react-redux";

export const useAuth = () => {
  const dispatch = useDispatch();

  const handleLogin = async ({ email, password }) => {
    dispatch(setLoading(true));
    try {
      const res = await login({ email, password });
     
      if (res.success) {
        dispatch(setUser(res.user));
        dispatch(setAccessToken(res.accessToken))
      }

      return res;
    } catch (err) {
      return { success: false, message: "Login failed" };
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleSignup = async ({ name, email, password }) => {
    dispatch(setLoading(true));
    try {
      const res = await signup({ name, email, password });

      if (res.success) {
        dispatch(setUser(res.user));
        dispatch(setAccessToken(res.accessToken))
      }

      return res;
    } catch (err) {
      return { success: false, message: "Signup failed" };
    } finally {
      dispatch(setLoading(false));
    }
  };

  return { handleLogin, handleSignup };
};