import { loginApi, registerApi } from "../api/authApi";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const { setUser } = useAuthStore();
  const navigate = useNavigate();

  const login = async (data: any) => {
    const res = await loginApi(data);

    setUser(res);

    navigate("/dashboard");
  };

  const register = async (data: any) => {
    const res = await registerApi(data);

    setUser(res);

    navigate("/dashboard");
  };

  return { login, register };
};
