import Image from "next/image";
import Link from "next/link";
import { appSvgs } from "../../public/appSvgs";

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <Image src={appSvgs.logo} width={118} height={27} alt="yelpcamp logo" />
      </a>
    </Link>
  );
};

export default Logo;
