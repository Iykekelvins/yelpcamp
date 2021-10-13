import {
  CampHero,
  CampContainer,
  NewCamp,
  Layout,
  Seo,
} from "../../components";
import { useGlobalContext } from "../../context/context";

const Camps = () => {
  const style = {
    display: "none",
  };
  const { addCamp } = useGlobalContext();
  return (
    <section className="camps ">
      <Layout>
        <Seo title="YelpCamp | Campgrounds" />
        {addCamp && <NewCamp />}
        <div style={addCamp ? style : null}>
          <CampHero />
          <CampContainer />
        </div>
      </Layout>
    </section>
  );
};

export default Camps;
