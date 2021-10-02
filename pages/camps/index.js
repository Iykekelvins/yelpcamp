import {
  CampHero,
  CampContainer,
  NewCamp,
  Layout,
  Seo,
} from "../../components";
import { useGlobalContext } from "../../context/context";

const camps = () => {
  const style = {
    display: "none",
  };
  const { addCamp } = useGlobalContext();
  return (
    <section className="camps container">
      <Layout Nav>
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

export default camps;
