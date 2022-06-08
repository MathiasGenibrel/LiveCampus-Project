import React, { useState, useEffect } from "react";
import { BaseForm } from "../components/Base/BaseForm";

// Import Custom Hooks
import useInput from "../hooks/useInput";
import { Link } from "react-router-dom";

export const Register = () => {
  const [name, handleNameChange] = useInput("");
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");
  const [confirmPassword, handleConfirmPasswordChange] = useInput("");

  const [form, setForm] = useState({
    title: "Connect to your account",
    submit: "Connect",
    fieldsets: [
      {
        id: "name",
        type: "name",
        label: "Name",
        value: name,
        onChange: handleNameChange,
      },
      {
        id: "email",
        type: "email",
        label: "Email",
        value: email,
        onChange: handleEmailChange,
      },
      {
        id: "password",
        type: "password",
        label: "Password",
        value: password,
        onChange: handlePasswordChange,
      },
      {
        id: "confirmPassword",
        type: "password",
        label: "Confirm Password",
        value: confirmPassword,
        onChange: handleConfirmPasswordChange,
      },
    ],
  });

  useEffect(() => {
    setForm((prevForm) => {
      return {
        ...prevForm,
        fieldsets: prevForm.fieldsets.map((item) => {
          switch (item.id) {
            case "name":
              return { ...item, value: name };

            case "email":
              return { ...item, value: email };

            case "password":
              return { ...item, value: password };

            case "confirmPassword":
              return { ...item, value: confirmPassword };

            default:
              return item;
          }
        }),
      };
    });
  }, [name, email, password, confirmPassword]);

  return (
    <>
      <figure>
        <img src="" alt="Best solution to share your art" />
        <figcaption>Instagroom</figcaption>
      </figure>
      <BaseForm form={form} />
      <Link to={"../login"}>Already have an account ? Loging in</Link>
    </>
  );
};
