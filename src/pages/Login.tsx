import React from "react";
import bg from "../assets/collage.png";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import logo from "/M.svg";
import { RxArrowLeft } from "react-icons/rx";
import Button from "../components/Button";
import Loading from "../components/Loading";
import { useLoginForm } from "../hooks/useLoginForm";

const Login: React.FC = () => {
  const {
    setTokenToLocal,
    setUser,
    navigate,
    form,
    changeHandlerForm,
    msg,
    data,
    isLoading,
    error,
    loginHandler,
  } = useLoginForm();

  if (isLoading) return <Loading />;
  if (data) {
    setUser(data.user);
    setTokenToLocal(data.token);
    navigate("/home");
  }
  return (
    <section className="relative">
      <img
        src={bg}
        alt="background"
        className="max-h-screen h-screen w-full absolute left-0 top-0 -z-10"
      />
      <div className="flex justify-end text-white h-screen">
        <div className="w-1/3 mt-5 h-5/6">
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
            className="h-full flex flex-col justify-center items-center"
          >
            <img src={logo} alt="Logo" className="w-8 h-8 mb-8" />
            <div className="w-3/5">
              <Input
                label={"Email"}
                value={form.email}
                onChange={changeHandlerForm}
                name="email"
              />
            </div>
            <div className="w-3/5 mt-3 mb-5">
              <Input
                label={"Password"}
                value={form.password}
                onChange={changeHandlerForm}
                type="password"
                name="password"
              />
            </div>
            <Button type="submit" text="Login" style="mb-4 w-3/5" />
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

export default Login;
