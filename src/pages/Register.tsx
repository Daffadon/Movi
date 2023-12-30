import React, { useState } from "react";
import bg from "../assets/collage.png";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import logo from "/M.svg";
import { RxArrowLeft } from "react-icons/rx";
import { registerService } from "../api/authentication";
import Loading from "../components/Loading";
import Button from "../components/Button";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<RegisterFormProps>({
    username: "",
    email: "",
    password: "",
    repassword: "",
  });

  const setUsername = (e: React.FormEvent<HTMLInputElement>) => {
    setForm({ ...form, username: e.currentTarget.value });
  };

  const setEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setForm({ ...form, email: e.currentTarget.value });
  };

  const setPassword = (e: React.FormEvent<HTMLInputElement>) => {
    setForm({ ...form, password: e.currentTarget.value });
  };
  const setRepassword = (e: React.FormEvent<HTMLInputElement>) => {
    setForm({ ...form, repassword: e.currentTarget.value });
  };

  const [msg, setMsg] = useState<string>("");

  const { data, isLoading, error, refetch } = registerService(form);

  if (isLoading) return <Loading />;
  if (data) {
    navigate("/login");
  }

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
  return (
    <section className="relative">
      <img
        src={bg}
        alt="background"
        className="max-h-screen w-full absolute left-0 top-0 -z-10"
      />
      <div className="flex justify-end text-white">
        <div className="w-1/3 mt-5">
          <div className="flex items-center gap-3">
            <div
              className="text-2xl cursor-pointer hover:text-yellow-500 duration-200"
              onClick={() => {
                navigate(-1);
              }}
            >
              <RxArrowLeft />
            </div>
            <p className="text-2xl font-semibold">Register</p>
          </div>
          <form
            onSubmit={registerHandler}
            className="pt-24 flex flex-col justify-center items-center"
          >
            <img src={logo} alt="Logo" className="w-8 h-8 mb-8" />
            <div className="w-3/5">
              <Input
                label={"Username"}
                value={form.username}
                onChange={setUsername}
              />
            </div>
            <div className="w-3/5 mt-3">
              <Input label={"Email"} value={form.email} onChange={setEmail} />
            </div>
            <div className="w-3/5 mt-3">
              <Input
                label={"Password"}
                value={form.password}
                onChange={setPassword}
                type="password"
              />
            </div>
            <div className="w-3/5 mt-3 mb-5">
              <Input
                label={"Retype Password"}
                value={form.repassword}
                onChange={setRepassword}
                type="password"
              />
            </div>
            <Button type="submit" text="Register" style="mb-4 w-3/5" />
            <div className="text-xs">
              <span>
                Already have an Account?{" "}
                <Link
                  to={"/login"}
                  className="hover:text-yellow-500 duration-200"
                >
                  Login
                </Link>
              </span>
            </div>
            {msg && (
              <p className="text-red-500 text-xs mt-1 text-center w-3/5">
                {msg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
export default Register;
