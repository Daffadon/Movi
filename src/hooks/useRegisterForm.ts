import React, { useState } from "react";
import { registerService } from "../service/api/authentication";
import { RegisterFormProps } from "../data/dto/formProps";
import { useNavigate } from "react-router-dom";

export const useRegisterForm = () => {
  const navigate = useNavigate();

  const [msg, setMsg] = useState<string>("");
  const [form, setForm] = useState<RegisterFormProps>({
    username: "",
    email: "",
    password: "",
    repassword: "",
  });

  const changeHandlerForm = (e: React.FormEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });
  };

  const { data, isLoading, error, refetch } = registerService(form);

  const registerHandler = (e: React.FormEvent) => {
    try {
      e.preventDefault();
      if (!form.email || !form.username || !form.password || !form.repassword) {
        setMsg("Please Fill All of The Fields");
        return;
      }
      if (form.password !== form.repassword) {
        setMsg("Your Password doesn't match");
        return;
      }
      refetch();
    } catch (error) {}
  };

  return {
    msg,
    form,
    changeHandlerForm,
    registerHandler,
    isLoading,
    data,
    error,
    navigate,
  };
};
