import { Navbar } from "../index";

const Layout = ({ children, Nav }) => {
  return (
    <section>
      {Nav && <Navbar />}
      {children}
    </section>
  );
};

export default Layout;
