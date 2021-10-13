import { Layout, Seo, Account } from "../components";

const signUp = () => {
  return (
    <div>
      <Seo title="YelpCamp | Sign Up" />
      <Account
        passwordContent="Choose Your Password"
        footer="Already a user?"
        span="Sign In"
        btnContent="Create an account"
      />
    </div>
  );
};

export default signUp;
