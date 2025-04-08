import React from "react";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Form = ({ hendelForm }) => {
  const [form, setForm] = useState("");
  const handelSubmit = (event) => {
    event.preventDefault();
    hendelForm(form);
    setForm("");
  };
  const hendelChange = (e) => {
    setForm(e.target.value);
  };
  return (
    <form className="header_form" onSubmit={handelSubmit}>
      <button>
        <IoIosSearch
          style={{
            position: "absolute",
            top: "12px",
            left: "20px",
          }}
          size="40px"
          color="#000"
        />
      </button>
      <input
        type="text"
        value={form}
        placeholder="Search for your preffered city..."
        onChange={hendelChange}
        required
      />
    </form>
  );
};

export default Form;
