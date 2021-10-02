import { Layout, Seo, LandingPage } from "../components";

export default function Home() {
  return (
    <Layout Nav={false}>
      <Seo title="YelpCamp" />
      <LandingPage />
    </Layout>
  );
}
