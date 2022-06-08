import React from "react";
import { BaseButton } from "./BaseButton";

// Import styles
import * as Styled from "./BaseForm.styles";

export const BaseForm = ({ form, onSubmit: handleSubmit }) => {
  return (
    <>
      <h1>{form.title}</h1>
      <Styled.Form>
        {form.fieldsets.map((item, index) => {
          return (
            <label htmlFor={item.type} key={index}>
              <p>{item.label} :</p>
              <Styled.Input
                value={item.value}
                onChange={item.onChange}
                id={item.type}
                type={item.type}
              />
            </label>
          );
        })}
        <BaseButton text={form.submit} onSubmit={handleSubmit} />
      </Styled.Form>
    </>
  );
};
