import "../assets/styles/dropdown.css";
import { useState } from "react";

export function Dropdown({ title, submenu, className }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a href="#" className="title-header">
        {title}
      </a>
      <div className={className}>
        {isOpen && (
          <>
            {submenu.map((option, index) => (
              <>
                <a href="#" key={index}>
                  {option}
                </a>
              </>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
