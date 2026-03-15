import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Loader />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;