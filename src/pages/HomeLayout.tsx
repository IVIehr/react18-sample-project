import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Navbar from "../components/navbar";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <section className="align-element py-20">
        <Outlet />
      </section>
    </>
  );
};
export default HomeLayout;
