import { Button } from "../index";
import { appSvgs } from "../../public/appSvgs";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { camps } from "../../pages/api/camps";
import { signIn, useSession } from "next-auth/client";

import { useGlobalContext } from "../../context/context";

const CampHero = () => {
  const [session, loading] = useSession();
  const [inputValue, setInputValue] = useState("");
  const { setCampList, setEmptyCampList, setAddCamp } = useGlobalContext();

  const searchCamp = (e) => {
    e.preventDefault();
    if (inputValue) {
      const newCampList = camps.filter((camp) =>
        camp.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setCampList(newCampList);
      setInputValue("");
      if (newCampList.length === 0) {
        setEmptyCampList(true);
      } else {
        setEmptyCampList(false);
      }
    }
  };

  return (
    <section className="camp-hero">
      <div className="camp-hero__info">
        <h2>Welcome to Yelpcamp!</h2>
        <p>
          View our hand-picked campgrounds from all over the world, or add your
          own.
        </p>
        <form className="camp-hero__form flex-ac" onSubmit={searchCamp}>
          <div className="camp-hero__form--group flex-ac">
            <span className="search">
              <Image
                src={appSvgs.search}
                width={16}
                height={17}
                alt="search icon"
              />
            </span>
            <input
              type="text"
              placeholder="Search for camp"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <Button title="Search" />
        </form>
        {!session && !loading && (
          <p>
            <Link href="/api/auth/signin">
              <a>
                <button
                  className="add-camp-btn add-camp-btn--login"
                  onClick={(e) => {
                    e.preventDefault();
                    signIn();
                  }}
                >
                  Login
                </button>
              </a>
            </Link>{" "}
            to add a campground
          </p>
        )}
        {session && (
          <button
            className="add-camp-btn add-camp-btn--add-new"
            onClick={() => setAddCamp(true)}
          >
            Or add your own campground
          </button>
        )}
      </div>
    </section>
  );
};

export default CampHero;
