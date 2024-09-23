import React, { useState, useEffect, useRef } from "react";
import "./popup.css";
export const ShowPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        console.log("inside", isOpen);
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOpen = () => {
    // if (isOpen) {
    //   setIsOpen(true);
    // }
    console.log("oopen", isOpen);
    setIsOpen(true)
  };
  const handleClose = () => {
    console.log("close", isOpen);
    setIsOpen(false);
  };
  return (
    <div>
      {/* {!isOpen && (
        
      )}
      {isOpen && <button>Close Popup</button>} */}
      {/* <button onClick={handleOpen}>
        {!isOpen ? "Open Popup" : "Close Popup"}
      </button> */}
      {!isOpen && <button onClick={handleOpen}>Open Popup</button>}
      {isOpen && <button>Close Popup</button>}
      {isOpen && (
        <div className="popup-overlay" ref={popupRef}>
          <div className="popup">
            <h2>Popup Content</h2>
            <p>This is the content of the popup.</p>
            <button onClick={() => setIsOpen(false)}>Close Popup</button>
          </div>
        </div>
      )}
    </div>
  );
};
