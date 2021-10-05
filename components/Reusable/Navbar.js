import { Logo, Button } from "../index";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";

const Navbar = () => {
  const [session, loading] = useSession();
  console.log(session);
  return (
    <nav className="navbar flex-ac-jb">
      <div className="navbar__left flex-ac">
        <Logo />
        <button className="nav-btn nav-btn__left">Home</button>
      </div>
      <div className="navbar__right flex-ac">
        {!loading && !session && (
          <Link href="/api/auth/signin">
            <a
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              <button className="nav-btn nav-btn__right">Login</button>
            </a>
          </Link>
        )}
        {session && (
          <Link href="/api/auth/signout">
            <a
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              <button className="nav-btn">Logout</button>
            </a>
          </Link>
        )}
        {!session && !loading && (
          <Link href="/sign-up">
            <a>
              <Button title="Create an account" />
            </a>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
