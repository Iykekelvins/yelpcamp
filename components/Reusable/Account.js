import { Button, Logo, Input } from "../index";
import { appSvgs } from "../../public/appSvgs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Account = ({ btnContent, passwordContent, footer, span }) => {
  const router = useRouter();
  return (
    <section className="account">
      <article className="account__left-side">
        <div className="account__left-side__info">
          <header className="flex-ac-jb">
            <Logo />
            <Link href="/camps">
              <a>
                <button className="nav-btn">Back to campgrounds</button>
              </a>
            </Link>
          </header>
          <div className="form-container">
            <h2>Start exploring camps from all around the world.</h2>
            <form className="form">
              <Input placeholder="johndoe_91" label="Username" />
              <Input type placeholder={passwordContent} label="Password" />
              <Button title={btnContent} />
              <h4>
                {footer}
                <Link
                  href={router.pathname == "/sign-in" ? "/sign-up" : "/sign-in"}
                >
                  <a>
                    <span>{span}</span>
                  </a>
                </Link>
              </h4>
            </form>
          </div>
        </div>
      </article>
      <article className="account__right-side">
        <div className="account__right-side--content">
          <h3>
            "YelpCamp has honestly saved me hours of research time, and the
            camps on here are definitely well picked and added."
          </h3>
          <div className="flex-ac testimonial">
            <Image
              src={appSvgs.user}
              height={40}
              width={40}
              alt="user picture"
            />
            <div className="user">
              <h5>May Andrews</h5>
              <h6>Professional Hiker</h6>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Account;
