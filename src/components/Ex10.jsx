import React, { useEffect, useState } from "react";

export default function Ex10() {
  // Tạo component <KeyPress />
  // Trên bàn phím máy tính, mỗi khi chúng ta gõ bàn phím sẽ nhận được thông tin gồm tên phím và mã số của phím đó
  // áp dụng các kiến thức về React hook với sự kiện, hãy in ra ngoài màn hình tên phím và mã phím mỗi khi người dùng thao tác trên bàn phím
  const [keyInfo, setKeyInfo] = useState({ key: "", keyCode: "" });
  const handleKeyPress = (event) => {
    setKeyInfo({ key: event.key, keyCode: event.keyCode });
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <>
      <h2>Bạn đã nhấn phím: {keyInfo.key}</h2>
      <h2>Mã phím: {keyInfo.keyCode}</h2>
    </>
  );
}
