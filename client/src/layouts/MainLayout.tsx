import Navbar from "../components/common/Navbar";

const MainLayout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
