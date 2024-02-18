import Layout from "../components/Layout/Layout";
import account from "../assets/vecteezy_user-account-icon-for-your-design-only_21079672.png";
import { MdAccountCircle } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import IconText from "../components/IconText";
import { FiCamera } from "react-icons/fi";

const Profile = () => {
  return (
    <Layout>
      <section className="grid place-items-center">
        <div className="w-full h-[90vh] max-h-[90vh] my-2 flex ">
          <div className="w-1/6 flex flex-col pt-10 border-r-2 border-r-yellow-500">
            <div className="relative">
              <img
                src={account}
                alt="profile picture"
                className="size-48 mx-auto"
              />
              <div className="absolute bottom-5 right-10 text-3xl bg-yellow-700 p-2 rounded-full cursor-pointer">
                <FiCamera />
              </div>
            </div>
            <div className="ml-3">
              <IconText text="John Doe" icon={<MdAccountCircle />} />
              <IconText
                text="johndoe999@test.com"
                icon={<MdAlternateEmail />}
              />
              <h2 className="text-base mt-2">P L A Y L I S T ----</h2>
            </div>
          </div>
          <div className="w-5/6 ml-3">asdas</div>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
