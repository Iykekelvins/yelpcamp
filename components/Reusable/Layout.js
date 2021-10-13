import { Navbar, Logo, Owner } from "../index";

const Layout = ({ children }) => {
  return (
    <section>
      <Owner />
      <section className="container">
        <Navbar />
        {children}
        <Logo />
      </section>
    </section>
  );
};

export default Layout;
