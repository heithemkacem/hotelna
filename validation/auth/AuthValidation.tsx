import * as yup from "yup";

export const LoginSchema = () => {
  return yup.object().shape({
    email: yup.string().email("invalidEmail").required("The email is required"),
    password: yup.string().required("The password is required"),
  });
};
export const ValidatePhone = () => {
  return yup.object().shape({
    phone: yup.string().required("The phone is required"),
  });
};

export const ResetPasswordSchema = () => {
  return yup.object().shape({
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[@$!%*?&]/,
        "Password must contain at least one special character"
      )
      .required("The password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), ""], "Passwords must match")
      .required("Confirm password is required"),
  });
};
export const SignupSchema = () => {
  return yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required("The email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[@$!%*?&]/,
        "Password must contain at least one special character"
      )
      .required("The password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), ""], "Passwords must match")
      .required("Confirm password is required"),
  });
};

export const ForgetPasswordSchema = () => {
  return yup.object().shape({
    email: yup.string().email("invalidEmail").required("The email is required"),
  });
};
