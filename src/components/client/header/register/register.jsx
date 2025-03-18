export default function Register({ onClose }) {
  function handleSubmit(e) {
    e.preventDefault();
    onClose(false);
    document.body.classList.remove("no-scroll");
  }
  function handleClose(e) {
    e.stopPropagation();
    if (e.target.classList.contains("register-fix")) {
      onClose(false);
      document.body.classList.remove("no-scroll");
    }
  }
  return (
    <div className="register-fix" onClick={handleClose}>
      <div className="register-fix-content">
        <form onSubmit={handleSubmit} className="flex-box-col g30">
          <div>
            <label htmlFor="login-name" className="client-text mb10">
              Name
            </label>
            <input type="text" id="login-name" />
          </div>
          <div>
            <label htmlFor="login-email" className="client-text mb10">
              Email
            </label>
            <input type="text" id="login-email" />
          </div>
          <div>
            <label htmlFor="login-password" className="client-text mb10">
              Password
            </label>
            <input type="text" id="login-password" />
          </div>
          <div className="w40">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
