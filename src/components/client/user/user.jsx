import { userIcon } from "./paths";

export default function User({ onModal }) {
  function handleUserModal() {
    onModal(true);
    document.body.classList.add("no-scroll");
  }
  return (
    <div className="user-fix">
      <div className="user-fix-content"></div>
      <div onClick={handleUserModal} className="user-fix-circle">
        {userIcon}
      </div>
    </div>
  );
}
