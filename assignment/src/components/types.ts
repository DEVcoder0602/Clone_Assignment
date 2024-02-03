export interface FormData {
  name: string;
  email: string;
  password: string;
}

export interface CustomFormProps {
  input_values: {
    name: string;
    type: string;
    placeholder: string;
    label: string;
    required: boolean;
  }[];
  heading: string;
  submit_button_text?: string;
  redirectUrl: string;
}
