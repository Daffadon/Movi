import { useUserContext } from "../context/userContext";
import { loginService } from "../service/api/authentication";
import { LoginFormProps } from "../data/dto/formProps";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export const useLoginForm = () => {
  const { setTokenToLocal, setUser } = useUserContext();
  const navigate = useNavigate();

  const [form, setForm] = useState<LoginFormProps>({
    email: "",
    password: "",
  });

  const changeHandlerForm = (e: React.FormEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });
  };

  const [msg, setMsg] = useState<string>("");
  const { data, isLoading, error, refetch } = loginService(form);

  const loginHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // refetch();
    } catch (error) {}
  };
  return {
    setTokenToLocal,
    setUser,
    form,
    navigate,
    changeHandlerForm,
    msg,
    data,
    isLoading,
    error,
    loginHandler,
  };
};
