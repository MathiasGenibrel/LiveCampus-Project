import React, { useState, useEffect } from "react";
import { BaseForm } from "../components/Base/BaseForm";

// Import Custom Hooks
import useInput from "../hooks/useInput";

import * as Styled from "../styles/Login";
import companyLogo from "../assets/images/logo.png";

export const Login = () => {
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");

  const [form, setForm] = useState({
    title: "Connect to your account",
    submit: "Login",
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
    <Styled.Main>
      <Styled.Figure>
        <img src={companyLogo} alt="Best solution to share your art" />
        <figcaption>Best solution to share your art</figcaption>
      </Styled.Figure>
      <BaseForm form={form} />
      <Styled.Indication>
        No account ?
        <Styled.RouterLink to={"../register"}>
          {" "}
          Join community
        </Styled.RouterLink>
      </Styled.Indication>
    </Styled.Main>
  );
};
