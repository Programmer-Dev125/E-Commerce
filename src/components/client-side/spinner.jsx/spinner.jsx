export default function Spinner({ spin }) {
  return (
    spin && (
      <div className="parent-spinner">
        <div className="spinner"></div>
      </div>
    )
  );
}
