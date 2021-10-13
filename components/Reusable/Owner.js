import { useState } from "react";
import { appSvgs } from "../../public/appSvgs";
import Image from "next/image";

const Owner = () => {
  const [projectOwner, setProjectOwner] = useState(true);
  return (
    <div>
      {projectOwner && (
        <div className="project-owner">
          <div className="project-owner--info">
            <p>
              This project was made by{" "}
              <a target="_blank" href="https://www.linkedin.com/in/coltsteele/">
                Colt steele
              </a>{" "}
              and designed by{" "}
              <a href="https://www.codewell.cc/" target="_blank">
                Codewell
              </a>
            </p>
            <button onClick={() => setProjectOwner(false)}>
              <Image
                src={appSvgs.close}
                height={11}
                width={11}
                alt="close icon"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Owner;
