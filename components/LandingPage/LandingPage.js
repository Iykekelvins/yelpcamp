import { Button, Logo } from "../index";
import { appSvgs } from "../../public/appSvgs";
import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  return (
    <section className="landing-page">
      <article className="landing-page__left-side">
        <div className="landing-page__left-side__info">
          <div className="logo">
            <Logo />
          </div>
          <h1>Explore the best camps on Earth.</h1>
          <p>
            Yelpcamp is a curated list of the best camping spots on Earth.
            Unfiltered and unbiased reviews
          </p>
          <ul className="steps">
            <li className="flex-ac">
              <Image
                src={appSvgs.checkmark}
                height={24}
                width={24}
                alt="checkmark icon"
              />
              <p>Add your own camp suggestions.</p>
            </li>
            <li className="flex-ac">
              <Image
                src={appSvgs.checkmark}
                height={24}
                width={24}
                alt="checkmark icon"
              />
              <p>Leave reviews and experiences.</p>
            </li>
            <li className="flex-ac">
              <Image
                src={appSvgs.checkmark}
                height={24}
                width={24}
                alt="checkmark icon"
              />
              <p>See locations for all camps.</p>
            </li>
          </ul>
          <Link href="/camps">
            <a>
              <Button title="View Campgrounds" />
            </a>
          </Link>
          <div className="partners">
            <p>Partnered with:</p>
            <ul className="flex-ac-jb">
              <li>
                <Image
                  src={appSvgs.airbnb}
                  width={83}
                  height={42}
                  alt="airbnb logo"
                />
              </li>
              <li>
                <Image
                  src={appSvgs.booking}
                  width={131}
                  height={42}
                  alt="booking logo"
                />
              </li>
              <li>
                {" "}
                <Image
                  src={appSvgs.plum_guide}
                  width={160}
                  height={42}
                  alt="plum guide logo"
                />
              </li>
            </ul>
          </div>
        </div>
      </article>
      <article className="landing-page__right-side"></article>
    </section>
  );
};

export default LandingPage;
