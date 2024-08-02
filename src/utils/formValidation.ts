import { warnNotify, emailWarnNotify } from "./toastify";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const formValidation = (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  if (
    formData.name === "" ||
    formData.email === "" ||
    formData.message === ""
  ) {
    warnNotify();
    return true;
  }

  if (!emailRegex.test(formData.email)) {
    emailWarnNotify();
    return true;
  }

  return false;
};

export default formValidation;
