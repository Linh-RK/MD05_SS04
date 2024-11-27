import React, { useEffect, useRef } from "react";

export default function Ex04() {
  // Tạo component <FocusInput />
  // Trong component này, tạo một ô input
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <>
      <h2>Focus input</h2>
      <input type="text" ref={inputRef} />
    </>
  );
}
