import { useState } from "react";

export default function TextExpander({
  children,
  color = "black",
  size = 58,
  bgColor = "white",
  borderSize = 0,
  borderStyle = "solid",
  borderColor = "black",
  btnColor = "black",
}) {
  const [expanded, setExpanded] = useState(false);
  const style = {
    color: color,
    fontSize: `${size}px`,
    backgroundColor: bgColor,
    border: `${borderSize}px ${borderStyle} ${borderColor}`,
  };
  function handleExpand() {
    setExpanded((expanded) => !expanded);
  }
  const displayText = expanded
    ? children
    : children.split(" ").slice(0, 25).join(" ") + "...";

  return (
    <div style={style}>
      <span>
        <p style={{ display: "inline" }}>{displayText}</p>
        <button
          onClick={handleExpand}
          style={{
            display: "inline",
            marginLeft: "5px",
            cursor: "pointer",
            border: "none",
            backgroundColor: bgColor,
            color: btnColor,
          }}
        >
          {expanded ? "see less" : "see more"}
        </button>
      </span>
    </div>
  );
}
