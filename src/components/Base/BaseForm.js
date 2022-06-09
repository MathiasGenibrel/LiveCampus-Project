import React from "react";
import { BaseButton } from "./BaseButton";

// Import styles
import * as Styled from "./BaseForm.styles";

export const BaseForm = ({ form, onSubmit: handleSubmit }) => {
  return (
    <Styled.Section>
      <Styled.Title>{form.title}</Styled.Title>
      <Styled.Form>
        {form.fieldsets.map((item, index) => {
          return (
            <label htmlFor={item.type} key={index}>
              <Styled.Text>{item.label} :</Styled.Text>
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
    </Styled.Section>
  );
};
