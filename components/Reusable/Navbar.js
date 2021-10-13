import { Logo, Button } from "../index";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import { appSvgs } from "../../public/appSvgs";
import { motion, AnimatePresence } from "framer-motion";
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
          <Link href="/">
            <a>
              <button className="cta-btn nav-btn nav-btn__left">Home</button>
            </a>
          </Link>
        </div>
        <div className="navbar__right flex-ac">
          {!loading && !session && (
            <Link href="/api/auth/signin">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
                className="cta-btn nav-btn__left"
              >
                <Button title="Login" />
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
                  className="cta-btn"
                >
                  <Button title="Logout" />
                </a>
              </Link>
            </div>
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
      <AnimatePresence>
        {isNav && (
          <motion.nav
            className="phone-nav flex-ac-jc"
            initial={{ x: -200, opacity: 0 }}
            transition={{ type: "tween" }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
          >
            {!loading && !session && (
              <Link href="/api/auth/signin">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    signIn();
                  }}
                >
                  <Button title="Login" />
                </a>
              </Link>
            )}
            {session && (
              <>
                <p className="name">
                  {session.user.name || session.user.email}
                </p>
                <Link href="/api/auth/signout">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      signOut();
                    }}
                  >
                    <Button title="Logout" />
                  </a>
                </Link>
              </>
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
