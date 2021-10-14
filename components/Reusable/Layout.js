import { Navbar, Logo, Owner } from "../index";

const Layout = ({ children }) => {
  return (
    <section>
      <Owner />
      <section className="container">
        <Navbar />
        {children}
        <div style={{ marginTop: "4rem", marginBottom: "2rem" }}>
          <Logo />
        </div>
      </section>
    </section>
  );
};

export default Layout;
