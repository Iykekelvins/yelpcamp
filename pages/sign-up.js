import { Layout, Seo, Account } from "../components";

const signUp = () => {
  return (
    <Layout Nav={false}>
      <Seo title="YelpCamp | Sign Up" />
      <Account
        passwordContent="Choose Your Password"
        footer="Already a user?"
        span="Sign In"
        btnContent="Create an account"
      />
    </Layout>
  );
};

export default signUp;
