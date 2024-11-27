import React, { useState } from "react";

export default function Ex07() {
  // Tạo component <Counter />
  // Trong component này, khai báo một state count để lưu trữ giá trị hiện tại của counter, và một state prevCountRef để lưu trữ giá trị của counter trước đó.
  const [count, setCount] = useState(0);
  const [prevCount, setPrevCount] = useState();
  const handleClick = () => {
    setPrevCount(count);
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <h3>Gía trị trước: {prevCount}</h3>
      <h3>Giá trị hiện tại: {count}</h3>
      <button className="btn" onClick={handleClick}>
        Tăng
      </button>
      <hr />
    </>
  );
}
