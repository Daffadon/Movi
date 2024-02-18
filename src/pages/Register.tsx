import bg from "../assets/collage.png";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import logo from "/M.svg";
import { RxArrowLeft } from "react-icons/rx";
import Button from "../components/Button";
import { useRegisterForm } from "../hooks/useRegisterForm";
import Loading from "../components/Loading";

const Register = () => {
  const {
    msg,
    form,
    changeHandlerForm,
    registerHandler,
    isLoading,
    data,
    error,
    navigate,
  } = useRegisterForm();

  if (isLoading) return <Loading />;
  if (data) {
    navigate("/login");
  }

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
                onChange={changeHandlerForm}
                name="username"
              />
            </div>
            <div className="w-3/5 mt-3">
              <Input
                label={"Email"}
                value={form.email}
                onChange={changeHandlerForm}
                name="email"
              />
            </div>
            <div className="w-3/5 mt-3">
              <Input
                label={"Password"}
                value={form.password}
                onChange={changeHandlerForm}
                type="password"
                name="password"
              />
            </div>
            <div className="w-3/5 mt-3 mb-5">
              <Input
                label={"Retype Password"}
                value={form.repassword}
                onChange={changeHandlerForm}
                type="password"
                name="repassword"
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
