import { useState } from "react";

export const Weekday = () => {
  const [weekday, setWeekday] = useState("");


  const handleChange = (e) => {
    setWeekday(e.target.value);
  };

  return (
    <form>
    {/* You can just adjust the size by changing the select className size using css or bootstrap */}
      <select className="form-select-lg" id="weekday" value={weekday} onChange={handleChange}>
        <option value="">Choose a weekday</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
      </select>
    </form>
  );
};
