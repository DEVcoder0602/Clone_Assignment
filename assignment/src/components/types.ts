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
}
