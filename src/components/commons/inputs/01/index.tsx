import { FormState, UseFormRegisterReturn } from "react-hook-form";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  password: string;
}

interface IProps {
  type: "text" | "password";
  name: string;
  message: string;
  register: UseFormRegisterReturn;
  formState: FormState<IFormData> | any;
}

export default function Input01(props: IProps) {
  const name = props.name;
  return (
    <>
      <input type={props.type} {...props.register} />
      <div>{props.formState.errors[name]?.message}</div>
    </>
  );
}
