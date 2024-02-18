import { useState } from "react";
import Input from "../components/Input";
import Layout from "../components/Layout/Layout";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const searhTermHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  };
  return (
    <Layout>
      <div className="mt-5">
        <div className="grid place-items-center">
          <div className="w-72 flex justify-center items-center gap-2">
            <Input
              value={searchTerm}
              onChange={searhTermHandler}
              placeHolder="search"
              name="search"
            />
            <button className="text-3xl flex justify-center items-center text-yellow-500">
              <CiSearch />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-8 gap-x-2 gap-y-3 mx-4 mt-5">
          {Array.from({ length: 10 }).map((_, index) => {
            return (
              <Link to={"/"} key={index}>
                <div className="border border-black w-full h-56 rounded-t bg-[url(src/assets/film1.png)] bg-cover bg-center bg-no-repeat hover:brightness-150 transition-all"></div>
                <div>
                  <h2 className="bg-black text-yellow-500 py-1 rounded-b text-center">
                    asdas
                  </h2>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
