import { Logo, Button } from "../index";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import { appSvgs } from "../../public/appSvgs";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [session, loading] = useSession();
  const [isNav, setIsNav] = useState(false);
  return (
    <header className="nav-header">
      <nav className="navbar flex-ac-jb">
        <div className="navbar__left flex-ac">
          <Logo />
          <button className="cta-btn nav-btn nav-btn__left">Home</button>
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
                <button className="cta-btn nav-btn nav-btn__right">
                  Login
                </button>
              </a>
            </Link>
          )}
          {session && (
            <div className="flex-ac">
              <p className="name cta-btn">
                {session.user.name || session.user.email}
              </p>
              <Link href="/api/auth/signout">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                >
                  <button className="cta-btn nav-btn">Logout</button>
                </a>
              </Link>
            </div>
          )}
          {!session && !loading && (
            <Link href="/sign-up">
              <a className="cta-btn">
                <Button title="Create an account" />
              </a>
            </Link>
          )}
          <button
            className="toggle-btn hamburger-btn"
            onClick={() => setIsNav(!isNav)}
          >
            <Image
              src={appSvgs.hamburger}
              height={24}
              width={24}
              alt="hamburger btn"
            />
          </button>
        </div>
      </nav>

      {/* Phone Nav */}
      {isNav && (
        <nav className="phone-nav flex-ac-jc">
          {!loading && !session && (
            <Link href="/api/auth/signin">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                <button className=" nav-btn nav-btn__right">Login</button>
              </a>
            </Link>
          )}
          {session && (
            <>
              <p className="name">{session.user.name || session.user.email}</p>
              <Link href="/api/auth/signout">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                >
                  <button className=" nav-btn">Logout</button>
                </a>
              </Link>
            </>
          )}
          {!session && !loading && (
            <Link href="/sign-up">
              <a className="">
                <Button title="Create an account" />
              </a>
            </Link>
          )}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
