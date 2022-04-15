import React from "react";

const TagButton = ({ name, tagActive, setCategory }) => {
  return (
    <div>
      <button
        className={`tag ${tagActive ? "active" : null}`}
        onClick={() => {
          setCategory(name);
        }}
      >
        {name.toUpperCase()}
      </button>
    </div>
  );
};

export default TagButton;
