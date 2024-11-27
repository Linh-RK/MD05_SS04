import React, { useState } from "react";

export default function Ex03() {
  // Tạo component <Navbar />
  // Sử dụng các kiến thức đã học về event, react hook để xây dựng tính năng khi chuyển tab thì active vào tab được chuyển
  const nav = [
    { id: 1, tab: "Trang chủ" },
    { id: 2, tab: "Sản phẩm" },
    { id: 3, tab: "Giới thiệu" },
    { id: 4, tab: "Liên hệ" },
  ];
  const [active, setActive] = useState(1);
  const handleClick = (id) => {
    setActive(id);
  };
  return (
    <>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "30px",
        }}
      >
        {nav.map((tab) => {
          return (
            <li
              className={active === tab.id ? "active" : ""}
              key={tab.id}
              onClick={() => handleClick(tab.id)}
            >
              {tab.tab}
            </li>
          );
        })}
      </ul>
    </>
  );
}
