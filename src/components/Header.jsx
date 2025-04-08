import React from "react";
import Form from "./Form";

const Header = ({ hendelCkick, mode, hendelForm }) => {
  const classMove = mode ? "header_right header_circle" : "header_circle";
  const textMode = mode ? "Dark" : "Light";

  return (
    <div>
      <header className="header">
        <div className="header_mode">
          <button onClick={hendelCkick} className="header_btn">
            <span className={classMove}></span>
          </button>
          <p>{textMode} Mode</p>
        </div>
        <Form hendelForm={hendelForm} />
      </header>
    </div>
  );
};

export default Header;
