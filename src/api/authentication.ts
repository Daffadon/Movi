import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "../middleware/axios-client";
import { LoginResponse } from "../data/dto/responseProps";

export const loginService = (form: LoginFormProps) => {
  return useQuery<LoginResponse, Error>({
    queryKey: ["loginUser"],
    queryFn: () => axiosClient.post("/login", { form }),
    enabled: false,
  });
};

export const registerService = (form: RegisterFormProps) => {
  return useQuery({
    queryKey: ["register"],
    queryFn: () => axiosClient.post("/register", { form }),
    enabled: false,
  });
};
