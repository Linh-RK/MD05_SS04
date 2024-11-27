import React, { useEffect, useState } from "react";

export default function Ex01() {
  // Tạo component <ChangeTitle />
  // Sử dụng các kiến thức đã học về event, react hook để thực hiện yêu cầu
  const [title, setTitle] = useState("");
  const handleInput = (title) => {
    setTitle(title);
  };
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <>
      <h2>Title: {title}</h2>
      <input type="text" onChange={(e) => handleInput(e.target.value)} />
      <hr />
    </>
  );
}
