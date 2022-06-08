import { useState } from "react";

/**
 * Custom Hooks to get value of input and set value of input
 * @param {any} initialValue | Initial value of the input
 * @returns {Array.<{value: any, handleChange: Function}>} Returns a stateful value, and a function to update it.
 */
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return [value, handleChange];
};
export default useInput;
