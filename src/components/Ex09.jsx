import React, { useEffect, useState } from "react";

export default function Ex09() {
  // Tạo component <CountTimeRender />
  // Áp dụng các kiến thức về React hook để thực hiện đếm thời gian kể từ khi component được render (Giá trị bắt đầu là 0)

  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    const id = setInterval(() => {
      setCount((pre) => pre + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [isRunning]);

  const handleClick = () => {
    setIsRunning((prev) => !prev);
  };
  console.log(count);
  return (
    <>
      <h2>
        Thời gian đã trôi qua: <b style={{ color: "pink" }}>{count}</b> giây
      </h2>
      <button onClick={handleClick}>{isRunning ? "Pause" : "Start"}</button>
    </>
  );
}
