import React, { useEffect, useState } from "react";

export default function Ex02() {
  // Tạo một button và một lưu trữ trạng thái của biến count (có giá trị khởi tạo bằng 0)
  // Khi nhấn vào button sẽ tăng giá trị của biến count lên 1 đơn vị và render lại giao diện, ngoài ra giá trị của biến count sẽ thay đổi trên thanh tiêu đề của trình duyệt
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((pre) => pre + 1);
  };
  useEffect(() => {
    document.title = `Click ${count} times`;
  }, [count]);
  return (
    <>
      <h2>Click times: {count}</h2>
      <button onClick={handleClick}>Click</button>
      <hr />
    </>
  );
  return <div>Ex02</div>;
}
