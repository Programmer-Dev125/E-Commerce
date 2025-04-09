export default function Response({ received, message, danger }) {
  return (
    received && (
      <div className="fix-center">
        <div className={`fix-center-card ${danger ? "danger" : ""}`}>
          <p className="mt0 mb0">{message}</p>
        </div>
      </div>
    )
  );
}
