import { useState } from "react";

export const DescriptionForm = () => {
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <form>
      <div className="form-group">
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={handleChange}
          placeholder="Enter a description"
          className="form-control mx-auto" style={{ width: "50%" }}
          rows="4"
        ></textarea>
      </div>
    </form>
  );
};