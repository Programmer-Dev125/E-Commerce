import { useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { handleLogin } from "../../handle-fn/handle-login";
import { onSpin } from "../../global-state/spinner-slice";
import { setBio } from "../../global-state/bio-slice";
import { useDispatch, useSelector } from "react-redux";
import { closeResponse, onResponse } from "../../global-state/response-slice";

export default function Login() {
  const bio = useSelector((state) => state.bio);
  const dispatch = useDispatch();
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setInfo({
      ...info,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(onSpin());
    handleLogin(info).then((bio) => {
      dispatch(setBio({ name: bio.name, email: bio.email }));
      dispatch(onSpin());
      dispatch(
        onResponse({
          received: true,
          danger: bio.message.error ? true : false,
          message: bio.message.success
            ? bio.message.success
            : bio.message.error,
        })
      );
      setTimeout(() => dispatch(closeResponse()), 1500);
    });
  }

  return (
    <section>
      {bio.name && bio.email ? (
        <div className="user-info col">
          <h2 className="mt0 mb0 tx-25">Welcome {bio.name}</h2>
          <p className="tx-16 gre mt10 mb0">{bio.email}</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="card w40 ma mt100 col gp-40 p20 mb-c"
          autoComplete="off"
        >
          <div>
            <div className="row sp-b al-c mb10">
              <label htmlFor="email" className="blc tx-14 bl blc">
                Email
              </label>
              <small className="tx-12 gre">(Enter a valid email)</small>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              required
              onChange={handleChange}
              value={info.email}
            />
          </div>
          <div>
            <div className="row sp-b al-c mb10 mob-col mob-st">
              <label htmlFor="password" className="blc tx-14 bl">
                Passowrd
              </label>
              <small className="tx-12 gre">
                (password must only text and numbers)
              </small>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              required
              onChange={handleChange}
              value={info.password}
            />
          </div>
          <div>
            <p className="mt0 mb10 tx-14 tx-e">
              Don't have an Account?
              <Link to="/signup">
                <span className="tx-16 blu mp ml5 mt15 mt15">Login</span>
              </Link>
            </p>
            <button>Login</button>
          </div>
        </form>
      )}
    </section>
  );
}
