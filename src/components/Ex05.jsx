import React, { useEffect, useState } from "react";

export default function Ex05() {
  // Tạo component <Clock />
  // Sử dụng các kiến thức đã học về react hook để xây dựng một đồng hồ dựa vào thời gian thực trên máy tính
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      <h2>Thời gian hiện tại</h2>
      <h2>{time?.toLocaleTimeString()}</h2>
    </>
  );
}
