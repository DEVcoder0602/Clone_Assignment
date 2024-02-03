import { LOGIN_INPUTS } from "../../constant/form-static-data";
import CustomForm from "./CustomForm";

const SignIn = () => {
  return (
    <CustomForm
      input_values={LOGIN_INPUTS}
      heading="Login"
      submit_button_text="Login"
      redirectUrl="/"
    />
  );
};

export default SignIn;
