export default function User({ onUserModal }) {
  function handleClose(e) {
    e.stopPropagation();
    if (
      e.target.classList.contains("user-modal") ||
      e.target.tagName === "BUTTON"
    ) {
      onUserModal(false);
      document.body.classList.remove("no-scroll");
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    handleClose(e);
  }
  return (
    <div className="user-modal" onClick={handleClose}>
      <div className="user-modal-content">
        <h2 className="page-title wfit mt0 mb30">Signup/Login</h2>
        <form onSubmit={handleSubmit} className="flex-box-col g30">
          <div>
            <label htmlFor="username" className="isBlock client-text mb10">
              Name
            </label>
            <input type="text" id="username" />
          </div>
          <div>
            <label htmlFor="useremail" className="isBlock client-text mb10">
              Email
            </label>
            <input type="text" id="useremail" />
          </div>
          <div>
            <label htmlFor="userpassword" className="isBlock client-text mb10">
              Password
            </label>
            <input type="text" id="userpassword" />
          </div>
          <div className="w40">
            <button>SignUp/Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
