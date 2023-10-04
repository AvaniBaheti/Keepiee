import React from "react";

export default function Hamburger({ open, setOpen }) {
  return (
    <div>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
