import * as yup from "yup";

export const LoginSchema = () => {
  return yup.object().shape({
    email: yup.string().email("invalidEmail").required("The email is required"),
    password: yup.string().required("The password is required"),
  });
};
