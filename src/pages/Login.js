import React, { useState, useEffect } from "react";
import { BaseForm } from "../components/Base/BaseForm";

// Import Custom Hooks
import useInput from "../hooks/useInput";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");

  const [form, setForm] = useState({
    title: "Connect to your account",
    submit: "Connect",
    fieldsets: [
      {
        type: "email",
        label: "Email",
        value: email,
        onChange: handleEmailChange,
      },
      {
        type: "password",
        label: "Password",
        value: password,
        onChange: handlePasswordChange,
      },
    ],
  });

  useEffect(() => {
    setForm((prevForm) => {
      return {
        ...prevForm,
        fieldsets: prevForm.fieldsets.map((item) => {
          switch (item.type) {
            case "email":
              return { ...item, value: email };

            case "password":
              return { ...item, value: password };

            default:
              return item;
          }
        }),
      };
    });
  }, [email, password]);

  return (
    <>
      <figure>
        <img src="" alt="Best solution to share your art" />
        <figcaption>Instagroom</figcaption>
      </figure>
      <BaseForm form={form} />
      <Link to={"../register"}>No account ? Join community</Link>
    </>
  );
};
