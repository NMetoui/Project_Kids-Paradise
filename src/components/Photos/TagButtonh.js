import React from "react";

const TagButtonh = ({ name, setTagh, taghActive }) => {
  return (
    <div>
      <button
        className={`tagh ${taghActive ? "active" : null}`}
        onClick={() => {
          setTagh(name);
        }}
      >
        {name.toUpperCase()}
      </button>
    </div>
  );
};

export default TagButtonh;
