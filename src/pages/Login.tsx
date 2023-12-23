import { useState } from "react";
import bg from "../assets/collage.png";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import logo from "/M.svg";
import { RxArrowLeft } from "react-icons/rx";
import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "../middleware/axios-client";
import { useUserContext } from "../context/userContext";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<LoginFormProps>({
    email: "",
    password: "",
  });
  const [msg, setMsg] = useState<string>("");

  const setEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setForm({ ...form, email: e.currentTarget.value });
  };

  const setPassword = (e: React.FormEvent<HTMLInputElement>) => {
    setForm({ ...form, password: e.currentTarget.value });
  };

  // const { setTokenToLocal, setUser } = useUserContext();

  const loginHandler = () => {
    // const { data, isLoading, error } = useQuery({
    //   queryKey: ["loginUser"],
    //   queryFn: () =>
    //     axiosClient.post("/login", { form }).then((res) => {
    //       res.data;
    //     }),
    // });
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
            <p className="text-2xl font-semibold">Login</p>
          </div>
          <form
            onSubmit={loginHandler}
            className="pt-32 flex flex-col justify-center items-center"
          >
            <img src={logo} alt="Logo" className="w-8 h-8 mb-8" />
            <div className="w-3/5">
              <Input label={"Email"} value={form.email} onChange={setEmail} />
            </div>
            <div className="w-3/5 mt-3 mb-5">
              <Input
                label={"Password"}
                value={form.password}
                onChange={setPassword}
                type="password"
              />
            </div>
            <button
              type="submit"
              className="mb-4 bg-yellow-500 w-3/5 py-1 rounded-md hover:bg-white border-yellow-500 hover:text-yellow-500 duration-200 font-semibold border-2 hover:border-yellow-500 hover:border-2"
            >
              Login
            </button>
            <div className="text-xs">
              <span>
                Don't have an Account yet?{" "}
                <Link
                  to={"/register"}
                  className="hover:text-yellow-500 duration-200"
                >
                  Register
                </Link>
              </span>
            </div>
            {msg && msg}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
