import React, { useState, useEffect } from "react";

// Import Custom Hooks
import useInput from "../hooks/useInput";

// Import Components
import { BaseForm } from "../components/Base/BaseForm";

// Import styles && images
import * as Styled from "../styles/Login";
import companyLogo from "../assets/images/logo.png";

export const Auth = (props) => {
  const [name, handleNameChange] = useInput("");
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");
  const [confirmPassword, handleConfirmPasswordChange] = useInput("");

  const formConfig = {
    login: {
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
    },
    register: {
      title: "Connect to your account",
      submit: "Join Community",
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
    },
  };

  const [form, setForm] = useState(formConfig[props.form]);

  useEffect(() => {
    setForm(formConfig[props.form]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.form]);

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

  const redirect =
    props.form === "login" ? (
      <Styled.Indication>
        No account ?
        <Styled.RouterLink to={"../register"}>
          {" "}
          Join community
        </Styled.RouterLink>
      </Styled.Indication>
    ) : (
      <Styled.Indication>
        Already have an account ?
        <Styled.RouterLink to={"../login"}> Logging in</Styled.RouterLink>
      </Styled.Indication>
    );

  return (
    <Styled.Main>
      <Styled.Figure>
        <img src={companyLogo} alt="Best solution to share your art" />
        <figcaption>Best solution to share your art</figcaption>
      </Styled.Figure>
      <BaseForm form={form} />
      {redirect}
    </Styled.Main>
  );
};
