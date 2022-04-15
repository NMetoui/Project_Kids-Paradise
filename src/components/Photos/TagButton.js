import React from "react";

const TagButton = ({ name, setTag, tagActive }) => {
  return (
    <div>
      <button
        className={`tag ${tagActive ? "active" : null}`}
        onClick={() => {
          setTag(name);
          console.log(tagActive);
        }}
      >
        {name.toUpperCase()}
      </button>
    </div>
  );
};

export default TagButton;
