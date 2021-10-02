import { CampItem, Button } from "../index";
import Router from "next/router";
import { useGlobalContext } from "../../context/context";

const CampContainer = () => {
  const { campList, emptyCampList } = useGlobalContext();
  return (
    <div className="camp-container-wrapper">
      {emptyCampList && (
        <div className="flex-ac-jc empty-camp-list">
          <h1>This camp is not available...</h1>

          <a onClick={() => Router.reload(window.location.pathname)}>
            <Button title="Refresh page" />
          </a>
        </div>
      )}
      <section className="camp-container">
        {campList.map((camp) => (
          <CampItem {...camp} key={camp.title} />
        ))}
      </section>
    </div>
  );
};

export default CampContainer;
