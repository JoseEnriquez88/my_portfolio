"use client";
import styles from "./form.module.css";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import formValidation from "@/utils/formValidation";
import { FormData } from "@/utils/types";
import {
  successNotify,
  warnNotify,
  errorNotify,
  emailWarnNotify,
} from "@/utils/toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Form: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationError = formValidation(formData);
    if (validationError) return;

    await emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_USER_ID!
      )
      .then(
        () => {
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          successNotify();
        },
        () => {
          errorNotify();
        }
      );
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      className={styles.form}
      initial={{
        y: 0,
        opacity: 0,
      }}
      animate={{
        y: -40,
        opacity: 1,
      }}
      transition={{ duration: 2 }}
    >
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nombre"
        className={styles.input}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className={styles.input}
      />
      <textarea
        name="message"
        rows={8}
        value={formData.message}
        onChange={handleChange}
        placeholder="Mensaje"
        className={styles.textarea}
      />
      <button type="submit" className={styles.button}>
        Enviar
      </button>
      <ToastContainer className={styles.toaster} />
    </motion.form>
  );
};

export default Form;
