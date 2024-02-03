import { SIGNUP_INPUTS } from "../../constant/form-static-data";
import CustomForm from "./CustomForm";

const SignUp = () => {
  return (
    <CustomForm
      input_values={SIGNUP_INPUTS}
      heading="Sign Up"
      redirectUrl="/signin"
    />
  );
};

export default SignUp;
