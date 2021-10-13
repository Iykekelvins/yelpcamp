import { Seo, Account } from "../components";

const login = () => {
  return (
    <div>
      <Seo title="YelpCamp | Sign In" />
      <Account
        passwordContent="Enter Your Password"
        footer="Not a user yet?"
        span="Create an account"
        btnContent="Login"
      />
    </div>
  );
};

export default login;
