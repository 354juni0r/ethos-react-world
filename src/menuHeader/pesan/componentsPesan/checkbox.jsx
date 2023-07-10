import React, { useState } from "react";

const CheckBox = ({ id, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onChange(id, !isChecked); // Panggil fungsi onChange dengan id dan nilai terkini isChecked
  };

  return (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={handleCheckboxChange}
    />
  );
};

export default CheckBox;
