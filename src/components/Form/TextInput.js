import React from "react";

export default function TextInput({
  type,
  path,
  handleChange,
  error,
  value,
  name,
  title,
  index,
  placeholder,
}) {
  console.log(path);
  console.log(index, "key");
  return (
    <div class="my-4">
      <div class="flex">
        <h2 class="mb-2 mx-2">{title}</h2>
      </div>
      <input
        type={type || "text"}
        class="border border-gray-400 rounded-lg py-3 px-3 w-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline "
        placeholder={placeholder || ""}
        name={name}
        defaultValue={value}
        onChange={(e) => {
          handleChange(e, path, index);
        }}
      />
      <p class="my-1 text-red-700">{error}</p>
    </div>
  );
}
