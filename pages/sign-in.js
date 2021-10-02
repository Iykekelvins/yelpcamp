import { Layout, Seo, Account } from "../components";

const login = () => {
  return (
    <Layout Nav={false}>
      <Seo title="YelpCamp | Sign In" />
      <Account
        passwordContent="Enter Your Password"
        footer="Not a user yet?"
        span="Create an account"
        btnContent="Login"
      />
    </Layout>
  );
};

export default login;
