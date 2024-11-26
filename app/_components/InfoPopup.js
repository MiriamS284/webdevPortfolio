"use client";

function InfoPopup({ title, content, onClose, position }) {
  const style = {
    position: "fixed",
    top: "100px", // Mehr Padding von oben
    right: position === "right" ? "20px" : "auto",
    left: position === "left" ? "20px" : "auto",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    zIndex: 1000,
  };

  return (
    <div style={style}>
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={onClose}>Schließen</button>
    </div>
  );
}
export default InfoPopup;
