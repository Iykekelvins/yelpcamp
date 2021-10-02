import { Logo, Button } from "../index";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar flex-ac-jb">
      <div className="navbar__left flex-ac">
        <Logo />
        <button className="nav-btn nav-btn__left">Home</button>
      </div>
      <div className="navbar__right flex-ac">
        <Link href="/sign-in">
          <a>
            <button className="nav-btn nav-btn__right">Login</button>
          </a>
        </Link>
        <Link href="/sign-up">
          <a>
            <Button title="Create an account" />
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
