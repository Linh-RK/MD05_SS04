import React, { useEffect, useReducer } from "react";

export default function Ex08() {
  // Tạo component <Season />
  // Sử dụng đối tượng new Date() để lấy ra tháng hiện tại
  // Từ tháng sẽ lấy ra tên mùa hiện tại với tiêu chí
  // Từ tháng 1 đến tháng 3 là mùa Xuân
  // Từ tháng 4 đến tháng 6 là mùa Hạ
  // Từ tháng 7 đến tháng 9 là mùa Thu
  // Từ tháng 10 đến tháng 12 là mùa Đông
  const seasonReducer = (state, action) => {
    switch (action) {
      case 1:
      case 2:
      case 3:
        return "mùa Xuân";
      case 4:
      case 5:
      case 6:
        return "mùa Hạ";
      case 7:
      case 8:
      case 9:
        return "mùa Thu";
      case 10:
      case 11:
      case 12:
        return "mùa Đông";
      default:
        return state;
    }
  };
  const [season, dispatch] = useReducer(seasonReducer, "Chưa xác định");
  const currentMonth = new Date().getMonth() + 1;
  useEffect(() => {
    dispatch(currentMonth);
  }, [currentMonth]);

  return (
    <>
      <h2>Bây giờ là tháng: {currentMonth}</h2>
      <h2>Mùa hiện tại: {season}</h2>
      <hr />
    </>
  );
}
