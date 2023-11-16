import { ChangeEvent, FormEvent, useState } from "react";
import { CustomFormProps, FormData } from "../../components/types";
import FetchApi from "../../utils/FetchApi.js";
import urlHandlers from "../../constant/url-handlers.js";

const CustomForm: React.FC<CustomFormProps> = ({ input_values = [] }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Perform registration logic here, e.g., dispatch an action or make an API call
    // console.log("Form data submitted:", formData);
    const response: Promise<object> = FetchApi({
      url: urlHandlers.api.auth.signup,
      method: "POST",
      body: formData,
    });
    console.log("Response:", response);
    if (response.success) {
      console.log("Registration successful");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl mb-4">Sign up for freeCodeCamp</h2>
      <form onSubmit={handleSubmit}>
        {input_values.map((input, index) => (
          <div className="mb-4" key={index}>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              {input["label"]}
            </label>
            <input
              type={input["type"]}
              name={input["name"]}
              value={formData[input["name"] as keyof FormData]}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required={input["required"]}
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default CustomForm;
