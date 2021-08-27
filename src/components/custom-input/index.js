import React from "react";
export default function CustomInput({ children, value, onChange }) {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input
        type="text"
        id="search"
        placeholder="Example"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
