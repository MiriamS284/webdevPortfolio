export default function Sign({ x, y, title, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
        transform: "translate(-50%, -50%)",
        backgroundColor: "#FFF",
        padding: "10px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        cursor: "pointer",
        zIndex: 10,
      }}
    >
      <strong>{title}</strong>
    </div>
  );
}
