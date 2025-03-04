export default function AccountModal() {
  return (
    <div className="w90 mauto mt20 mb20">
      <form className="client-signup-form">
        <div>
          <label htmlFor="sign-email">Email</label>
          <input type="email" placeholder="Enter email" id="sign-email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Enter Password" id="password" />
        </div>
        <div>
          <button>Login/SignUp</button>
        </div>
      </form>
    </div>
  );
}
